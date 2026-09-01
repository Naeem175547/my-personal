import { useMutation } from "@apollo/client/react";
import { useNavigate } from "react-router-dom";
import { Delete_Post_By_User, Delete_Post_By_Admin } from "../graphql/mutation";
import { ME } from "../graphql/query";
import { GET_POSTS } from "../graphql/query";

type Post = {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    userId: number;
};

export default function PostItem({ post, onView }: { post: Post, onView: any }) {
    const [deletePostMutation] = useMutation(Delete_Post_By_User);
    const [deletePostAdmin] = useMutation(Delete_Post_By_Admin);

    const navigate = useNavigate();

    async function deletePostByUser(postId: number) {
        const result = await deletePostMutation({
            variables: {
                userId: Number(localStorage.getItem("userId")),
                id: postId,
            },

            refetchQueries: [
                {
                    query: ME,
                },
                {
                    query: GET_POSTS,
                },
            ]

        });
        if (result.data?.removePostUser) {
            navigate('')
        }
    }
    async function deletePostByAdmin(postId: number) {
        const result = await deletePostAdmin({
            variables: {
                id: postId,
            },
            refetchQueries: [
                {
                    query: ME,
                },
                {
                    query: GET_POSTS,
                },
            ]

        });
        if (result.data?.removePostAdmin) {
            // window.location.href = "/profile";
            navigate('')
        }
    }

    function editPost(postId: number) {
        navigate(`/edit-post/${postId}`, {
            state: {
                from: window.location.pathname
            }
        });
    }

    return (
        <tr>
          
            <td>{post.title}</td>
            <td>{(new Date(post.createdAt)).toDateString()}</td>
            <td>{post?.user?.username}</td>

            <td>
                <button className="btn btn-sm btn-primary me-2" onClick={() => { onView(post) }}>
                    View
                </button>

                <button className="btn btn-sm btn-warning me-2" onClick={() => editPost(post.id)}>
                    Edit
                </button>

                <button className="btn btn-sm btn-danger" onClick={() => {
                    if (localStorage.getItem('role') === "ADMIN") {
                        deletePostByAdmin(post.id)
                    }
                    else if (localStorage.getItem('role') === "USER") {
                        deletePostByUser(post.id)
                    }
                }
                }>
                    Delete
                </button>
            </td>
        </tr>
    );
}