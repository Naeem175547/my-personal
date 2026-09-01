import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import { Create_Post } from "../graphql/mutation";
import { useNavigate } from "react-router-dom";
import { GET_POSTS, ME } from "../graphql/query";

export default function CreatePost() {
    const [blog, setBlog] = useState({
        title: "",
        content: "",
    });

    const [createPost] =
        useMutation(Create_Post);
    const navigate = useNavigate()

    async function handleSubmit(e: any) {
        e.preventDefault();

        const result = await createPost({
            variables: {
                userId: Number(localStorage.getItem("userId")),
                input: {
                    title: blog.title,
                    content: blog.content,
                },

            },
            refetchQueries: [{
                query: ME
            }, {
                query: GET_POSTS,
                variables:{
                    page:1,
                    limit:5
                }
                
            }]
        });
        navigate('/profile')

    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-7">

                    <div className="card shadow-sm">
                        <div className="card-body p-4">

                            <h2 className="card-title text-center mb-4">
                                Create Post
                            </h2>

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
                                        value={blog.title}
                                        onChange={(e: any) => { setBlog({ ...blog, title: e.target.value }) }}
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
                                        value={blog.content}
                                        onChange={(e: any) => { setBlog({ ...blog, content: e.target.value }) }}
                                    />
                                </div>


                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Create Post
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