import React from "react";

const projects = [
  {
    title: "Restaurant Web App",
    stack: "MERN",
    desc: "Full-stack menu, orders, reservations with real-time order tracking.",
  },
  {
    title: "Coffee Shop App",
    stack: "MERN",
    desc: "Order system, customer profiles, online payments & MongoDB APIs.",
  },
  {
    title: "Snack Game",
    stack: "Java",
    desc: "2D game with movement, collision & 60fps smooth gameplay.",
  },
  {
    title: "Bank Management System",
    stack: "PHP / MySQL",
    desc: "Secure banking operations: deposits, withdrawals, history.",
  },
  {
    title: "CRUD Application",
    stack: "PHP / MySQL",
    desc: "Create-read-update-delete + advanced search & validation.",
  },
  {
    title: "Café Management System",
    stack: "Java",
    desc: "Order processing & bill generation with 80% error reduction.",
  },
];

const Projects = (props) => {
  const isDark = props.mode === "dark";

  const bg = isDark ? "#08080F" : "#FAFAFC";
  const panel = isDark ? "#13131E" : "#FFFFFF";
  const panelAlt = isDark ? "#191927" : "#F3F3F9";
  const border = isDark ? "#232336" : "#E6E6F0";
  const text = isDark ? "#F5F5FA" : "#111118";
  const muted = isDark ? "#9C9CB4" : "#5C5C74";
  const indigo = "#6366F1";
  const violet = "#8B5CF6";

  const display = "'Space Grotesk', sans-serif";

  return (
    <div style={{ backgroundColor: bg, color: text }} className="min-h-screen px-4 sm:px-10 py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .project-card { transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease; }
        .project-card:hover { transform: translateY(-6px); border-color: ${indigo}; box-shadow: 0 20px 40px -20px rgba(99,102,241,0.45); }
        .gradient-text {
          background: linear-gradient(90deg, ${indigo}, ${violet});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: indigo }}>
          Selected Work
        </p>
        <h2 className="gradient-text text-4xl sm:text-5xl font-bold mb-12" style={{ fontFamily: display }}>
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, index) => (
            <div
              key={index}
              className="project-card relative p-6 rounded-2xl overflow-hidden"
              style={{ backgroundColor: panel, border: `1px solid ${border}` }}
            >
              <span
                className="absolute -top-2 -right-1 font-bold select-none"
                style={{ fontFamily: display, fontSize: "4rem", color: panelAlt, lineHeight: 1, zIndex: 0 }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative" style={{ zIndex: 1 }}>
                <h3 className="text-xl font-bold" style={{ fontFamily: display }}>
                  {p.title}
                </h3>
                <p className="mt-2 text-sm" style={{ color: muted }}>
                  {p.desc}
                </p>
                <span
                  className="inline-block mt-4 text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ backgroundColor: panelAlt, color: violet }}
                >
                  {p.stack}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
