import { useQuery } from "@apollo/client/react"
import { GET_POSTS } from "../graphql/query"
import PostList from "../components/PostList";
import { useState } from "react";
import Model from "../components/Model";

export default function AdminPosts() {
    const { data, loading, error } = useQuery(GET_POSTS);
    const [selectedPost, setSelectedPost] = useState(null)
    console.log(data)

    return (
        <div className="container mt-4">
            <h1>Totals Posts</h1>
            {loading && <p>Loading posts...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && <p>Total posts: {data.posts.totalPosts}</p>}

            <PostList posts={data?.posts?.posts ?? []} onView={setSelectedPost} />
            {selectedPost && <Model selectedPost={selectedPost} setSelectedPost={setSelectedPost} />}
        </div>
    );



}