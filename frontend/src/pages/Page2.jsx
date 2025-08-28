// src/pages/Page2.jsx
import { useSelector } from "react-redux";

export default function Page2() {
  const { data } = useSelector((state) => state.users);

  return (
    <div>
      <h2>Page 2 - Users</h2>
      <ul>
        {data.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
