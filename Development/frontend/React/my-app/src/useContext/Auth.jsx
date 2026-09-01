import NavBar from "./auth-example/Navbar";
import {AuthProvider} from "./auth-example/AuthContext";

function Auth() {

  return (
    <>
      <AuthProvider>
        <NavBar />
      </AuthProvider>
    </>
  )
}

export default Auth

// AuthProvider = component
// NavBar = child (comes from children prop)
