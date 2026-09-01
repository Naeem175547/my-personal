import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import { Login_User } from "../graphql/mutation";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";
import client from "../apollo/client";


export default function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [login] = useMutation(Login_User);
    const { setIsLoggedIn }: any = useContext(AuthContext)

    async function handlelogin(e: any) {
        e.preventDefault();
        try {
            const result = await login({
                variables: {
                    username,
                    password
                }
            });

            const token = result.data?.login?.accessToken;
            const userId = result.data?.login?.id;
            if (token) {
                localStorage.setItem("token", token);
                localStorage.setItem("userId", userId);
                await client.resetStore();
                setIsLoggedIn(true)
                localStorage.setItem('login', 'true');
                navigate("/");
            }
        } catch (error: any) {
            alert(error.message)
        }
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">
                                Login
                            </h2>
                            <form onSubmit={handlelogin}>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        placeholder="Enter username"
                                        required
                                        value={username}
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >
                                    Login
                                </button>

                            </form>

                            <div className="text-center mt-3">
                                <span>Don't have an account?</span>
                                <a href="/register" className="ms-1">
                                    Register
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}