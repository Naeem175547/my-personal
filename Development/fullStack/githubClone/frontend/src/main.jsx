import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AuthProvider } from "./authContext.jsx";
import ProjectRoutes from "./Routes.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from "./components/auth/Signup.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Router>
      <Navbar />
      <ProjectRoutes />
    </Router>
  </AuthProvider>,
);
