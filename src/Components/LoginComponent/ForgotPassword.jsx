import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordToEmail } from "../../Services/LoginService"; // You'll create this in your service

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            const response = await sendPasswordToEmail(email);
            setMessage("Password has been sent to your email.");
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (err) {
            setError("Email not found or error sending password.");
        }
    };

    return (
        <div className="login-background">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="card shadow-lg p-4 w-50">
                    <h3 className="text-center text-info mb-4">Forgot Password</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Enter your registered email:</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="example@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <br />
                        <button className="btn btn-primary w-100" type="submit">
                            Send Password
                        </button>
                    </form>

                    {message && <p className="text-success mt-3">{message}</p>}
                    {error && <p className="text-danger mt-3">{error}</p>}

                    <div className="mt-3 text-center">
                        <button className="btn btn-link text-secondary" onClick={() => navigate("/")}>
                            Back to Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
