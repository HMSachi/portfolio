function Contact() {
  return (
    <section
      id="contact"
      className="p-10 scroll-mt-24 bg-black text-white"
    >
      <div className="container mx-auto">
        {/* Section title */}
        <h2 className="text-3xl font-bold mb-6 text-red-500 hover:text-[#fc0000] text-center">
          Contact Me
        </h2>

        <form className="max-w-md mx-auto flex flex-col gap-4 bg-[#121212] p-6 rounded-2xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-black text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-black text-white"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-black text-white"
          ></textarea>
          
          {/* Button with gradient hover */}
          <button className="bg-gradient-to-r from-black via-red-500 to-black text-white p-3 rounded-xl transition duration-300 ease-in-out hover:from-gray-900 hover:via-red-600 hover:to-gray-900">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
