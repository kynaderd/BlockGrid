// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockGrid title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockGrid/i);
    expect(titleElement).toBeInTheDocument();
});
