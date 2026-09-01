import PostItem from "./PostItem";

type Post = {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    userId: number;
};

export default function PostList({ posts, onView }: { posts: Post[], onView: any }) {
    return (
        <div className="card-body p-0">
            <div className="table-responsive">
                <table className="table table-hover mb-0">
                    <thead className="table-light">
                        <tr>
                           
                            <th>Title</th>
                            <th>Created At</th>
                            <th>Created By</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {posts.map((post: Post) => (
                            <PostItem key={post.id} post={post} onView={onView} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}