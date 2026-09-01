import React, { useState } from "react";
import axios from "axios";

import "./auth.css";
import logo from "../../assets/react.svg";
import { useAuth } from "../../authContext.jsx";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setCurrentUser } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/signup", {
        email,
        username,
        password,
      });

      const token = res.data.token;
      const userId = res.data.userId;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", res.data.userId);

      setCurrentUser(userId);
      setLoading(false);

      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert("Signed up failed!");
      setLoading(false);
    }
  };
  return (
    <>
      {/* Logo */}
      <div className="d-flex justify-content-center mt-5">
        <img src={logo} alt="Logo" width="60" height="60" />
      </div>

      {/* Signup Form */}
      <div className="container mt-4">
        <form className="row justify-content-center">
          <div className="col-md-5 col-lg-4">
            <h2 className="text-center mb-4">Sign Up</h2>
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="username" className="form-label fw-semibold">
                    Username
                  </label>

                  <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold">
                    Password
                  </label>

                  <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                  onClick={handleSignup}
                  disabled={loading}
                >
                  {loading ? "loading" : "Signup"}
                </button>
                <div className="text-center mt-3">
                  <p>
                    Already have an account? <Link to="/auth">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
