import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <div className="container text-center py-5">

            <div className="py-5">

                <h1 className="display-4 fw-bold">
                    Welcome to MyBlog 📝
                </h1>

                <p className="lead text-muted mt-3">
                    Discover interesting stories, ideas, and knowledge
                    shared by our community.
                </p>

                <p className="text-secondary">
                    Read posts, share your thoughts, and explore new topics
                    every day.
                </p>

                <div className="mt-4">

                    <Link
                        to="/posts"
                        className="btn btn-primary me-2"
                    >
                        Explore Posts
                    </Link>

                    {!localStorage.getItem('login') && (<Link
                        to="/register"
                        className="btn btn-outline-primary"
                    >
                        Join Us
                    </Link>
                    )}



                </div>

            </div>

        </div>
    );
}