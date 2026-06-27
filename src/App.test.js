// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoZ title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoZ/i);
    expect(titleElement).toBeInTheDocument();
});
