import { Link } from "react-router-dom";
import PostList from "./PostList";

export default function ProfilePosts({ posts, onView }: { posts: any, onView: any }) {
    return (
        <div className="card">
            <div className="card-header d-flex  justify-content-between">
                <h4 className="mb-0">My Posts</h4>
                <Link className="btn btn-secondary" to="/create-post">Add Post</Link>
            </div>
            <PostList posts={posts} onView={onView} />
        </div>
    );
}       