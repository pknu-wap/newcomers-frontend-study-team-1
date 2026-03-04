import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>layout</h1>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/profile">Profile</Link> |
        <Link to="/login">Login</Link> |
        <Link to="/create-account">Create Account</Link>
      </nav>
      <Outlet />   {/* 👈 이게 반드시 있어야 함 */}
    </div>
  );
}

export default Layout;