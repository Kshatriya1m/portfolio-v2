import React from "react";

const Header = (props) => {
  const isDark = props.mode === "dark";

  const bg = isDark ? "#0B0B14" : "#FFFFFF";
  const border = isDark ? "#252538" : "#E4E4EF";
  const text = isDark ? "#F2F2F7" : "#12121A";
  const muted = isDark ? "#9494A8" : "#63637A";
  const indigo = "#6366F1";

  return (
    <div
      style={{ backgroundColor: bg, borderBottom: `1px solid ${border}`, color: text }}
      className="py-3 sticky top-0 z-50"
    >
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center px-4 gap-2 md:gap-0">
        {/* Contact info */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-1 md:space-y-0">
          
            href={`tel:${props.tel}`}
            className="text-sm flex items-center gap-1.5 hover:opacity-80 transition"
            style={{ color: muted }}
          >
            <span style={{ color: indigo }}>&#9742;</span>
            {props.tel}
          </a>

          
            href={`mailto:${props.email}`}
            className="text-sm flex items-center gap-1.5 hover:opacity-80 transition"
            style={{ color: muted }}
          >
            <span style={{ color: indigo }}>&#9993;</span>
            {props.email}
          </a>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium" style={{ color: muted }}>
            {isDark ? "Dark" : "Light"}
          </span>

          <label className="relative inline-block w-11 h-6 cursor-pointer">
            <input
              type="checkbox"
              checked={isDark}
              onChange={props.togglemode}
              className="peer sr-only"
            />
            <span
              className="absolute inset-0 rounded-full transition"
              style={{ backgroundColor: isDark ? indigo : "#D1D1DB" }}
            ></span>
            <span
              className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"
              style={{ transform: isDark ? "translateX(20px)" : "translateX(0)" }}
            ></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
