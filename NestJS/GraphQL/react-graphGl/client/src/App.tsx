import { useQuery } from "@apollo/client/react";

import { GET_USERS } from "./graphql/queries";

export default function App() {
  const { data, loading, error } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      {data?.users.map((user: any) => (
        <div key={user.id}>
          <p>{user.username}</p>
          <p>{user.displayName}</p>
        </div>
      ))}
    </div>
  );
}
