import { useMutation, useQuery } from "@apollo/client/react";
import { useState } from "react";
import { GET_POSTS } from "../graphql/query";
import { like, unlike } from "../graphql/mutation";

export default function Posts() {
    const [page, setPage] = useState(1);
    const limit = 5;

    const [performLike] = useMutation(like);
    const [performUnLike] = useMutation(unlike);

    const [likeError, setLikeError] = useState<string | null>(null);

    const storedUserId = localStorage.getItem("userId");
    const userId = storedUserId ? Number(storedUserId) : null;

    const {
        data,
        loading,
        error,
        refetch,
    } = useQuery(GET_POSTS, {
        variables: {
            page,
            limit,
        },
    });
    console.log(data)

    if (loading && !data) {
        return <p>Loading posts...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    async function handleLike(postId: number) {
        const storedUserId = localStorage.getItem("userId");

        if (!storedUserId) {
            alert("Please login first");
            return;
        }

        
        try {
            setLikeError(null);

            const post = data?.posts?.posts?.find(
                (post) => post.id === postId
            );

            if (!post) {
                return;
            }

            const isLiked = post.likes.some(
                (like:any) => like.userId === currentUserId
            );

            if (!isLiked) {
                await performLike({
                    variables: {
                        user_id: currentUserId,
                        post_id: postId,
                    },
                });
            } else {
                await performUnLike({
                    variables: {
                        user_id: currentUserId,
                        post_id: postId,
                    },
                });
            }

            await refetch();
        } catch (err: any) {
            setLikeError(err.message);
        }
    }

    function changePage(pageNumber: number) {
        setPage(pageNumber);
        setLikeError(null);
    }

    return (
        <div className="container mt-4">
            <h1 className="mb-4">All Posts</h1>

            {data?.posts?.posts?.map((post) => {
                const isLiked = userId
                    ? post.likes.some(
                        (like:any) => like.userId === userId
                    )
                    : false;

                return (
                    <div
                        key={post.id}
                        className="card mb-3 border-0 shadow"
                    >
    <div className="card-body">
    <small className="text-secondary">
    By <span className="fw-semibold text-dark">{post.user.name}</span>{" "}
    <span className="text-primary">@{post?.user?.username}</span> 
    </small>

        <h4 className="fw-semibold mb-2 mt-2">
            {post.title}
        </h4>

        <p className="text-muted mb-3">
            {post.content}
        </p>

        <div className="d-flex justify-content-between align-items-center">
            <small className="text-secondary">
                {new Date(
                    post.createdAt
                ).toLocaleDateString()}
            </small>
        </div>

        <div className="d-flex align-items-center gap-3 mt-3">
            <button
                className={`btn rounded-pill px-4 ${isLiked
                    ? "btn-primary"
                    : "btn-outline-primary"
                    }`}
                onClick={() =>
                    handleLike(post.id)
                }
            >
                {isLiked
                    ? "❤️ Liked"
                    : "♡ Like"}
            </button>

            <span className="text-muted">
                {post.likes.length} likes
            </span>
        </div>

        {likeError && (
            <div className="text-danger small mt-2">
                {likeError}
            </div>
        )}

    </div>
</div>
                );
            })}

            <nav className="mt-4">
                <ul className="pagination justify-content-center">
                    <li
                        className={`page-item ${page === 1 ? "disabled" : ""
                            }`}
                    >
                        <button
                            className="page-link"
                            onClick={() =>
                                changePage(page - 1)
                            }
                            disabled={page === 1}
                        >
                            Previous
                        </button>
                    </li>

                    {Array.from(
                        {
                            length:
                                data?.posts?.totalPages ?? 0,
                        },
                        (_, index) => {
                            const pageNumber = index + 1;

                            return (
                                <li
                                    key={pageNumber}
                                    className={`page-item ${page === pageNumber
                                        ? "active"
                                        : ""
                                        }`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={() =>
                                            changePage(
                                                pageNumber
                                            )
                                        }
                                    >
                                        {pageNumber}
                                    </button>
                                </li>
                            );
                        }
                    )}

                    <li
                        className={`page-item ${data?.posts?.totalPages &&
                            page >= data.posts.totalPages
                            ? "disabled"
                            : ""
                            }`}
                    >
                        <button
                            className="page-link"
                            onClick={() =>
                                changePage(page + 1)
                            }
                            disabled={
                                data?.posts?.totalPages !==
                                undefined &&
                                page >=
                                data.posts.totalPages
                            }
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}