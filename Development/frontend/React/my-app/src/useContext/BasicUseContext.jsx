import { createContext,useContext } from "react";
const UserContext = createContext();

function BasicUseContext() {
  const user = { name: "Yahubaba", role: "Admin" };

  return (
    <>
      <UserContext.Provider value={user}>
        <Parent />
      </UserContext.Provider>
    </>
  )
}

function Parent() {
  return <Child />;   // Passing down
}

function Child() {
  return (
    <div>
      <GrandChild />
    </div>
  );  // Passing again
}

function GrandChild() {
  const { name, role } = useContext(UserContext)
  return <h3>Welcome {name} - your role is {role}</h3>;
}

export default BasicUseContext;