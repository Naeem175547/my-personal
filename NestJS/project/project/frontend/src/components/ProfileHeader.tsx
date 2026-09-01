import { useNavigate } from "react-router-dom";

type User = {
    id: number;
    name: string;
    username: string;
    role: string;
};

export default function ProfileHeader({ user, imgUrl }: { user: User, imgUrl: any }) {
    const navigate = useNavigate()
    function handleEdit() {
        navigate('/profile/user/edit', {
            state: {
                user
            }
        })

    }

    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-md-3 text-center">
                        <div
                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto overflow-hidden"
                            style={{
                                width: "150px",
                                height: "150px",
                                fontSize: "35px",
                                backgroundColor: "green",
                            }}
                        >
                            {imgUrl ? (
                                <img
                                    src={imgUrl}
                                    alt="profileImg"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            ) : (
                                user.name.charAt(0).toUpperCase()
                            )}
                        </div>
                    </div>

                    <div className="col-md-9 text-sm-center text-md-start">
                        <h2>{user.name}</h2>
                        <p className="mb-1">
                            <strong>Username:</strong> @{user.username}
                        </p>
                        <p className="mb-1">
                            <strong>Email:</strong> {user?.email}
                        </p>

                        <p className="mb-2  ">
                            <strong>Role:</strong>{" "}
                            <span className="badge bg-secondary">
                                {user.role}
                            </span>
                        </p>
                        <button className="btn btn-success" onClick={handleEdit}>Edit</button>
                    </div>

                </div>
            </div>
        </div>
    )


}