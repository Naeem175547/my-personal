export default function AboutPage() {
    return (
        <div className="container py-5">
            <div className="text-center">
                <h1 className="display-5 fw-bold">About MyBlog 📝</h1>
                <p className="lead text-muted mt-3">
                    A simple place to read, share, and discover interesting ideas.
                </p>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h3 className="fw-bold mb-3">What is MyBlog?</h3>

                            <p className="text-secondary">
                                MyBlog is a community-driven blogging platform where users
                                can create and share posts about technology, programming,
                                education, experiences, and other interesting topics.
                            </p>

                            <p className="text-secondary">
                                Our goal is to provide a simple and friendly platform where
                                people can share knowledge and learn from each other.
                            </p>

                            <h4 className="fw-bold mt-4">What you can do</h4>

                            <ul className="text-secondary">
                                <li>Read interesting blog posts</li>
                                <li>Create and publish your own posts</li>
                                <li>Share your knowledge and ideas</li>
                                <li>Explore posts from other users</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}