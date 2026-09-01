import { useMutation } from "@apollo/client/react";
import { Register_User, UPLOAD_FILE_URL } from "../graphql/mutation";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [register] = useMutation(Register_User);
    const [uploadFile] = useMutation(UPLOAD_FILE_URL);
    const navigage = useNavigate();

    async function registerUser(e: any) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const file = formData.get("file");

        if (!(file instanceof File) || file.size === 0) {
            alert("Please select a profile image");
            return;
        }

        const key = `uploads/${Date.now()}-${file.name}`;


        try {
            const { data } = await uploadFile({
                variables: {
                    key,
                    contentType: file.type,
                },
            });


            const uploadUrl = data.uploadFileUrl.url;



            const response = await fetch(uploadUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": file.type,
                },
                body: file,
            });
            console.log("4. S3 response:", response);

            if (!response.ok) {
                throw new Error("File upload failed");
            }

            console.log("Uploaded successfully");
            console.log("S3 key:", key);


            const userData = {
                name: String(formData.get("name") ?? ""),
                username: String(formData.get("username") ?? ""),
                email: String(formData.get("email") ?? ""),
                password: String(formData.get("password") ?? ""),
                role:
                    formData.get("role") === "ADMIN"
                        ? ("ADMIN" as const)
                        : ("USER" as const),


                key: key,
            };

            const result = await register({
                variables: {
                    input: userData,
                },
            });

            if (result.data?.registerUser) {
                navigage("/login");
            }

        } catch (error) {
            console.error(error);

            alert(
                error instanceof Error
                    ? error.message
                    : "Registration failed"
            );
        }
    }


    return (
        <div className="container py-2">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body p-4">

                            <h2 className="text-center mb-4">
                                Create Account
                            </h2>

                            <form onSubmit={registerUser}>

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
                                        name="name"
                                        className="form-control"
                                        placeholder="Enter your name"
                                    />
                                </div>

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
                                        name="username"
                                        className="form-control"
                                        placeholder="Enter username"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email
                                    </label>

                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                    >
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="role"
                                        className="form-label"
                                    >
                                        Role
                                    </label>

                                    <select
                                        name="role"
                                        id="role"
                                        className="form-select"
                                        defaultValue="USER"
                                    >
                                        <option value="USER">
                                            User
                                        </option>

                                        <option value="ADMIN">
                                            Admin
                                        </option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="file"
                                        className="form-label"
                                    >
                                        Profile Image
                                    </label>

                                    <input
                                        type="file"
                                        id="file"
                                        name="file"
                                        className="form-control"
                                        accept="image/*"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >
                                    Register
                                </button>

                            </form>

                            <div className="text-center mt-3">
                                <span>
                                    Have an account?
                                </span>

                                <a
                                    href="/login"
                                    className="ms-1"
                                >
                                    Login
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}