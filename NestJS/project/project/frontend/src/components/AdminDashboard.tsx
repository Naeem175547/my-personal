import { Link } from "react-router-dom";

export default function AdminDashboard() {
    return (
        <div className="my-4 border p-4">
            <h3 className="mb-3">Admin Dashboard</h3>

            <div className="d-flex gap-3">
                <Link
                    to="/admin/posts"
                    className="btn btn-primary"
                >
                    All Posts
                </Link>

                <Link
                    to="/admin/users"
                    className="btn btn-secondary"
                >
                    All Users
                </Link>
            </div>
        </div>
    );
}