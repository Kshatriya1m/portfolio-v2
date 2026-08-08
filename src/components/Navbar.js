import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = props.mode === "dark";

  const bgGlass = isDark ? "rgba(10,10,18,0.7)" : "rgba(255,255,255,0.75)";
  const border = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
  const text = isDark ? "#F2F2F7" : "#12121A";
  const muted = isDark ? "#9C9CB4" : "#5C5C74";
  const indigo = "#6366F1";
  const violet = "#8B5CF6";

  const handleContactClick = () => {
    const email = props.email;
    const subject = encodeURIComponent("Hello");
    const name = props.title.split(" ")[0];
    const body = encodeURIComponent(
      `Hi ${name}, I wanted to reach out to you.`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
  ];

  const linkClass = (isActive) =>
    `text-sm transition ${isActive ? "font-semibold" : "hover:opacity-80"}`;

  const linkStyle = (isActive) => ({
    color: isActive ? indigo : muted,
  });

  return (
    <>
      {/* TOP NAVBAR */}
      <div className="sticky top-0 z-50 px-3 sm:px-6 pt-3">
        <nav
          style={{
            backgroundColor: bgGlass,
            border: `1px solid ${border}`,
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
          className="max-w-5xl mx-auto rounded-2xl shadow-lg"
        >
          <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
            {/* Brand */}
            <NavLink
              to="/"
              className="text-lg font-bold"
              style={{ color: text, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {props.title}
            </NavLink>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden focus:outline-none"
              style={{ color: text }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex lg:items-center">
              <ul className="flex space-x-7">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => linkClass(isActive)}
                      style={({ isActive }) => linkStyle(isActive)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Desktop Contact Button */}
              <button
                onClick={handleContactClick}
                className="ml-7 px-5 py-2 rounded-xl text-sm font-semibold transition text-white"
                style={{ background: `linear-gradient(90deg, ${indigo}, ${violet})` }}
              >
                Contact
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <div
              className="lg:hidden px-4 pb-4"
              style={{ borderTop: `1px solid ${border}` }}
            >
              <ul className="flex flex-col pt-3 space-y-3">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      onClick={() => setIsOpen(false)}
                      to={item.path}
                      className={({ isActive }) => linkClass(isActive)}
                      style={({ isActive }) => linkStyle(isActive)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleContactClick}
                className="mt-4 px-5 py-2 rounded-xl text-sm font-semibold w-full text-white"
                style={{ background: `linear-gradient(90deg, ${indigo}, ${violet})` }}
              >
                Contact
              </button>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
