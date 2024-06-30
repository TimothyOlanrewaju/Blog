import { NavLink, Link } from "react-router-dom";
import "./index.css";
export default function PageNav() {
  return (
    <div className="max-w-screen-2xl flex justify-between bg-gray-600 p-3">
      <div className="inline-flex gap-2">
        <Link to="/">
          <h1 className="text-white pt-6 text-3xl font-extrabold">
            SmoothTech Blog
          </h1>
        </Link>
      </div>
      <div>
        <ul className="inline-flex gap-4 text-white pt-6">
          <NavLink to="/" id="navlink">
            Home
          </NavLink>
          <NavLink to="/admin" id="navlink">
            Admin
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
