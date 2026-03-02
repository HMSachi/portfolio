import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Mail, Trash2, RefreshCcw, User, Clock, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const API_URL = '/api';

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/messages`);
      setMessages(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch messages');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    try {
      await axios.delete(`${API_URL}/messages/${id}`);
      setMessages(messages.filter(m => m.id !== id));
    } catch (err) {
      alert('Failed to delete message');
    }
  };

  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState({ type: '', message: '' });

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setUploadStatus({ type: 'error', message: 'Please upload a PDF file.' });
      return;
    }

    const formData = new FormData();
    formData.append('cv', file);

    setUploading(true);
    setUploadStatus({ type: '', message: '' });

    try {
      await axios.post(`${API_URL}/cv`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setUploadStatus({ type: 'success', message: 'CV uploaded successfully!' });
      // clear file input
      e.target.value = null;
    } catch (err) {
      console.error(err);
      setUploadStatus({ type: 'error', message: 'Failed to upload CV.' });
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div className="header-content">
          <h1>Admin Dashboard</h1>
          <button onClick={fetchMessages} className="refresh-btn" disabled={loading}>
            <RefreshCcw className={loading ? 'spin' : ''} size={20} />
            Refresh
          </button>
        </div>
      </header>

      <div className="upload-section">
        <h2>Update CV</h2>
        <div className="upload-controls">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileUpload}
            disabled={uploading}
            id="cv-upload"
            className="file-input"
          />
          <label htmlFor="cv-upload" className={`upload-btn ${uploading ? 'disabled' : ''}`}>
            {uploading ? 'Uploading...' : 'Select PDF File'}
          </label>
        </div>
        {uploadStatus.message && (
          <p className={`upload-status ${uploadStatus.type}`}>
            {uploadStatus.message}
          </p>
        )}
      </div>

      <main className="admin-main">
        {error && <div className="error-banner">{error}</div>}

        {loading && messages.length === 0 ? (
          <div className="loader">Loading messages...</div>
        ) : (
          <div className="message-grid">
            <AnimatePresence>
              {messages.length === 0 ? (
                <div className="no-messages">No messages yet.</div>
              ) : (
                messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="message-card"
                  >
                    <div className="card-header">
                      <div className="user-info">
                        <User size={18} className="icon-red" />
                        <h3>{msg.name}</h3>
                      </div>
                      <button onClick={() => deleteMessage(msg.id)} className="delete-btn">
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="card-body">
                      <div className="detail">
                        <Mail size={16} className="icon-gray" />
                        <span>{msg.email}</span>
                      </div>
                      <div className="detail">
                        <Clock size={16} className="icon-gray" />
                        <span>{new Date(msg.timestamp).toLocaleString()}</span>
                      </div>
                      <div className="message-content">
                        <MessageSquare size={16} className="icon-red" />
                        <p>{msg.message}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
