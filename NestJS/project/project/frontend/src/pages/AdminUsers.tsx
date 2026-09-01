import { useMutation, useQuery } from "@apollo/client/react";
import { Delete_User } from "../graphql/mutation";
import { GET_POSTS, Get_Users } from "../graphql/query";


export default function AdminUsers() {

    const { data, loading, error } = useQuery(Get_Users);
    const [deleteUserMutation] = useMutation(Delete_User);

    if (loading) return <p>loading...</p>
    if (error) return <p>{error.message}</p>


    async function deleteUser(userId: number) {
        const currentUserId = Number(localStorage.getItem("userId"));

        if (currentUserId === userId) {
            alert("You cannot delete your own account.");
            return;
        }

        await deleteUserMutation({
            variables: {
                id: userId,
            },
            refetchQueries: [
                {
                    query: Get_Users,
                },
                {
                    query: GET_POSTS,
                },
            ],
        });
    }
    return (
        <div className="container-fluid mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Users</h3>
                <span className="badge bg-primary">
                    Total Users: {data?.users.length}
                </span>
            </div>

            <div className="card shadow-sm">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped mb-0">
                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>UserId</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Role</th>
                                    {/* <th>Status</th> */}
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data?.users.map((user, index) => (
                                    <tr key={user.id} >

                                        <td>
                                            {Number(localStorage.getItem("userId")) === user.id && (
                                                <span className="text-primary me-1">★</span>
                                            )}
                                            {index + 1}
                                        </td>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>
                                            <span
                                                className={`badge ${user.role === "Admin"
                                                    ? "bg-danger"
                                                    : "bg-secondary"
                                                    }`}
                                            >
                                                {user.role}
                                            </span>
                                        </td>

                                        <td>

                                            <button className="btn btn-sm btn-danger" onClick={() => deleteUser(user.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}