import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage.tsx";
import Posts from "../pages/posts.tsx";
import AboutPage from "../pages/AboutPage.tsx";
import Register from "../pages/register.tsx";
import Login from "../pages/login.tsx";
import Profile from "../pages/Profile.tsx";
import CreatePost from "../pages/CreatePost.tsx";
import EditPost from "../pages/EditPost.tsx";
import AdminPosts from "../pages/AdminPosts.tsx";
import AdminUsers from "../pages/AdminUsers.tsx";
import EditUser from "../pages/EditUser.tsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />

            {/* Authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Blog */}
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<p>Single Post</p>} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/edit-post/:id" element={<EditPost />} />

            {/* User */}
            <Route path="/profile" element={<Profile />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile/user/edit" element={<EditUser />} />

            {/* Admin */}
            <Route path="/admin" element={<p>Admin Dashboard</p>} />
            <Route path="/admin/posts" element={<AdminPosts />} />
            <Route path="admin/users" element={<AdminUsers />} />


            {/* 404 */}
            <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
    );
}