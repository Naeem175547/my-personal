import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { Update_User } from "../graphql/mutation";
import { ME } from "../graphql/query";

export default function EditUser() {
    const [updateUser, { loading: updating }] = useMutation(Update_User);
    const { state } = useLocation();
    const navigate = useNavigate();

    const user = state?.user;

    const [name, setName] = useState(user?.name || "");
    const [username, setUsername] = useState(user?.username || "");
    const [email, setEmail] = useState(user?.email || "");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(user?.role || "USER");

    async function handleSubmit(e: any) {
        e.preventDefault();

        const updatedUser = {
            name,
            username,
            role,
            email,
            password
        };

        await updateUser({
            variables: {
                id: user.id,
                input: updatedUser,
            },
            refetchQueries: [{ query: ME }]

        });

        navigate("/profile");
    }

    if (!user) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger">
                    User data not found.
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-7">

                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4">

                            <h2 className="text-center mb-4">
                                Edit User
                            </h2>

                            <form onSubmit={handleSubmit}>

                                {/* Name */}
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        placeholder="Enter name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                {/* Username */}
                                <div className="mb-3">
                                    <label
                                        htmlFor="username"
                                        className="form-label"
                                    >
                                        Username
                                    </label>

                                    <input
                                        type="text"
                                        id="username"
                                        className="form-control"
                                        placeholder="Enter username"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="mb-3">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                {/* Password */}
                                <div className="mb-3">
                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                    >
                                        New Password
                                    </label>

                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Enter new password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />

                                    <div className="form-text">
                                        Leave blank if you don't want to
                                        change the password.
                                    </div>
                                </div>

                                {/* Role */}
                                <div className="mb-3">
                                    <label
                                        htmlFor="role"
                                        className="form-label"
                                    >
                                        Role
                                    </label>

                                    <select
                                        id="role"
                                        className="form-select"
                                        value={role}
                                        onChange={(e) =>
                                            setRole(e.target.value)
                                        }
                                    >
                                        <option value="USER">
                                            USER
                                        </option>

                                        <option value="ADMIN">
                                            ADMIN
                                        </option>
                                    </select>
                                </div>

                                {/* Buttons */}
                                <div className="d-flex gap-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary flex-grow-1"
                                        disabled={updating}
                                    >
                                        {updating ? "Updating..." : "Update User"}
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() =>
                                            navigate("/profile")
                                        }
                                    >
                                        Cancel
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