// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
        h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
        p: ({ children, ...props }) => <p {...props}>{children}</p>,
        a: ({ children, ...props }) => <a {...props}>{children}</a>,
        span: ({ children, ...props }) => <span {...props}>{children}</span>,
        img: ({ children, ...props }) => <img {...props}>{children}</img>,
    },
    AnimatePresence: ({ children }) => <>{children}</>,
}));
