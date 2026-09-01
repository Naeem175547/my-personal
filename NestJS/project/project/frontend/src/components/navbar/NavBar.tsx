import "./NavBar.css";
import { useNavigate, Link } from "react-router-dom";
interface NavBarProps {
    isLoggedIn: boolean,
    setIsLoggedIn: any
}

export default function NavBar({ isLoggedIn, setIsLoggedIn }: NavBarProps) {
    const navigate = useNavigate()
    function logout() {
        if (localStorage.getItem('token') || localStorage.getItem('login')) {
            localStorage.removeItem('token')
            localStorage.removeItem('login')
            localStorage.removeItem('userId')
            localStorage.removeItem('role')
            setIsLoggedIn(false)
        }
        navigate('/')

    }
    return (
        <nav className=" container navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">
                    📝 MyBlog
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/posts">
                                Posts
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>

                    <div className="d-flex gap-2">
                        {isLoggedIn ? (
                            <>
                                <Link to="/profile" className={`btn ${localStorage.getItem("login") ? "btn-primary" : "btn-outline-primary"}`}>
                                    Profile
                                </Link>
                                <button className="btn btn-primary" onClick={logout}>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="btn btn-outline-primary">
                                    Login
                                </Link>

                                <Link to="/register" className="btn btn-primary">
                                    Register
                                </Link>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </nav>
    );
}