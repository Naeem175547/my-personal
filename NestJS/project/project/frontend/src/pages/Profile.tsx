import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client/react";
import { ME } from "../graphql/query";
import ProfileHeader from "../components/ProfileHeader";
import ProfilePosts from "../components/ProfilePosts";
import AdminDashboard from "../components/AdminDashboard";
import Model from "../components/Model";
import { GET_FILE_URL } from "../graphql/mutation";

export default function Profile() {
    const { data, loading, error } = useQuery(ME);
    const [imgUrl, setImgUrl] = useState("")
    const [selectedPost, setSelectedPost] = useState(null);
    const [getFile] = useMutation(GET_FILE_URL)


    useEffect(() => {
        if (!data?.me) return;

        localStorage.setItem("userId", String(data.me.id));
        localStorage.setItem("role", data.me.role);

        if (!data.me.key) return;

        const loadImage = async () => {
            try {
                const { data: fileData } = await getFile({
                    variables: {
                        key: data.me.key,
                    },
                });
                console.log(fileData)
                setImgUrl(fileData?.getFileUrl?.url);
            } catch (error) {
                console.error("Failed to get image URL:", error);
            }
        };

        loadImage();
    }, [data, getFile]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    if (!data?.me) {
        return <p>User not found</p>;
    }

    return (
        <>

            <div className="container mt-5" >
                <ProfileHeader user={data.me!} imgUrl={imgUrl} />
                {
                    data?.me?.role.toLocaleLowerCase() === "admin" && <AdminDashboard />

                }
                <ProfilePosts
                    posts={data.me.posts ?? []}
                    onView={setSelectedPost}
                />

            </div>



            {selectedPost && (
                <Model selectedPost={selectedPost} setSelectedPost={setSelectedPost} />


            )}
        </>
    );
}