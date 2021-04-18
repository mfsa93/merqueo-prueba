import { render, screen } from "@testing-library/react"
import Login from "./Login";

test('should render login page', () => {
    render(<Login />);
    const emailField = screen.findByPlaceholderText('Email')
    expect(emailField).toBeInTheDocument()
})