import { render, screen } from "@testing-library/react";
import Register from "./Register";

test('should render login page', () => {
    render(<Register />);
    const emailField = screen.findByPlaceholderText('Email')
    expect(emailField).toBeInTheDocument()
})