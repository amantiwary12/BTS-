import Navbar from "../components/Navbar";

export default function Settings() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl">Settings</h1>
        <p>Admin settings and configuration options go here.</p>
      </div>
    </div>
  );
}
