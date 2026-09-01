import { useMutation, useQuery } from "@apollo/client/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Get_Post, ME } from "../graphql/query";
import { Update_Post_By_User } from "../graphql/mutation";
import { Update_Post_By_ADMIN } from "../graphql/mutation";
import { GET_POSTS } from "../graphql/query";



export default function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const postId = Number(id);
    const { state } = useLocation()
    const from = state?.from
    const { data, loading, error } = useQuery(Get_Post, {
        variables: { id: postId },
    });
    const [updatePostUser, { loading: userSaving }] =
        useMutation(Update_Post_By_User);

    const [updatePostAdmin, { loading: adminSaving }] =
        useMutation(Update_Post_By_ADMIN);

    const saving = userSaving || adminSaving;

    useEffect(() => {
        if (data?.post) {
            setTitle(data.post.title);
            setContent(data.post.content);
        }
    }, [data]);

    async function handleSubmit(e: any) {
        e.preventDefault();


        const userId = Number(localStorage.getItem("userId"));

        try {
            if (from === "/admin/posts") {
                await updatePostAdmin({
                    variables: {
                        id: postId,
                        updatePostInput: {
                            title,
                            content,
                        },
                    },
                    refetchQueries: [{ query: ME }, { query: GET_POSTS }],
                });

                navigate("/admin/posts");

            } else if (from === "/profile") {
                await updatePostUser({
                    variables: {
                        userId,
                        id: postId,
                        updatePostInput: {
                            title,
                            content,
                        },
                    },
                    refetchQueries: [{ query: ME }, { query: GET_POSTS }],
                });

                navigate("/profile");
            }


        } catch (error) {
            console.error("Failed to update post:", error);
        }
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-7">

                    <div className="card shadow-sm">
                        <div className="card-body p-4">

                            <h2 className="card-title text-center mb-4">
                                Edit Post
                            </h2>

                            {loading && <p>Loading post...</p>}
                            {error && <p className="text-danger">Unable to load post.</p>}

                            <form onSubmit={handleSubmit}>
                                {/* Title */}
                                <div className="mb-3">
                                    <label
                                        htmlFor="title"
                                        className="form-label"
                                    >
                                        Title
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        placeholder="Enter post title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>


                                <div className="mb-3">
                                    <label
                                        htmlFor="content"
                                        className="form-label"
                                    >
                                        Content
                                    </label>

                                    <textarea
                                        className="form-control"
                                        id="content"
                                        rows={8}
                                        placeholder="Write your post..."
                                        minLength={10}
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        required
                                    />
                                </div>


                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        {saving ? "Saving..." : "Save Changes"}
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

}