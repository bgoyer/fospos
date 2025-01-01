import { Outlet } from "react-router";
import "./styles.css";

const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>
      <Outlet />
    </div>
  );
};

export default Admin;
