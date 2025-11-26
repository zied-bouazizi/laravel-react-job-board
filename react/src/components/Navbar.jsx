import { useState } from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { userToken, setCurrentUser, setUserToken } = useStateContext();
  const isAuthenticated = !!userToken;

  const logout = (ev) => {
    ev.preventDefault();

    axiosClient.post("/logout").then(() => {
      setCurrentUser({});
      setUserToken(null);
      setOpen(false);
    });
  };

  const links = isAuthenticated
    ? [
        { to: "/", label: "Home" },
        { to: "/jobs", label: "Jobs" },
        { to: "/add-job", label: "Add Job" },
        { to: "/manage-jobs", label: "Manage Jobs" },
        { to: "/profile", label: "Profile" },
      ]
    : [
        { to: "/", label: "Home" },
        { to: "/jobs", label: "Jobs" },
        { to: "/login", label: "Login" },
        { to: "/register", label: "Register" },
      ];

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white rounded-md px-3 py-2 block"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 block";

  const MobileNavLink = ({ to, label }) => (
    <NavLink
      to={to}
      className={linkClass}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  );

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLink
            className="flex items-center"
            to="/"
            onClick={() => setOpen(false)}
          >
            <img className="h-10 w-auto" src={logo} alt="Job Listing" />
            <span className="hidden md:block text-white text-2xl font-bold ml-2">
              Job Listing
            </span>
          </NavLink>

          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-3 ml-auto">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}

            {isAuthenticated && (
              <button
                onClick={logout}
                className="text-white hover:bg-gray-900 rounded-md px-3 py-2"
              >
                Logout
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <MobileNavLink key={link.to} to={link.to} label={link.label} />
            ))}

            {isAuthenticated && (
              <button
                onClick={logout}
                className="text-white hover:bg-gray-900 rounded-md px-3 py-2 w-full text-left"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
