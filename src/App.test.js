// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ScriptHaven title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ScriptHaven/i);
    expect(titleElement).toBeInTheDocument();
});
