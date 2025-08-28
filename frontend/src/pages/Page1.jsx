// src/pages/Page1.jsx
import { useSelector } from "react-redux";

export default function Page1() {
  const { data, loading, error } = useSelector((state) => state.users);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Page 1 - Users</h2>
      {data.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}
