export default function Model({ selectedPost, setSelectedPost }: { selectedPost: any, setSelectedPost: any }) {
    if (!selectedPost) {
        return null;
    }
    return (
        <>
            <div
                className="modal fade show d-block"
                tabIndex={-1}
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {selectedPost.title}
                            </h5>

                            <button
                                type="button"
                                className="btn-close"
                                onClick={() =>
                                    setSelectedPost(null)
                                }
                            />

                        </div>


                        {/* Body */}

                        <div className="modal-body">

                            <h3>
                                {selectedPost.title}
                            </h3>

                            <p className="mt-3">
                                {selectedPost.content}
                            </p>

                            <hr />

                            <small className="text-muted">
                                Created:{" "}
                                {new Date(
                                    selectedPost.createdAt
                                ).toDateString()}
                            </small>

                        </div>


                        {/* Footer */}

                        <div className="modal-footer">

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() =>
                                    setSelectedPost(null)
                                }
                            >
                                Close
                            </button>

                        </div>

                    </div>

                </div>
            </div>


            {/* BACKDROP */}

            <div
                className="modal-backdrop fade show"
                onClick={() =>
                    setSelectedPost(null)
                }
            />
        </>
    )
}