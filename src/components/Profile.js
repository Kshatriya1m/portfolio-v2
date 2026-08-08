import React from "react";

export default function Profile({ mode, url, name, email }) {
  const isDark = mode === "dark";

  const skillGroups = [
    {
      label: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      label: "Backend",
      items: ["Node.js", "Express.js", "PHP"],
    },
    {
      label: "Database & Tools",
      items: ["MongoDB", "MySQL", "Git / GitHub"],
    },
  ];

  const projects = [
    {
      title: "Restaurant Web App",
      stack: ["MongoDB", "Express", "React", "Node"],
      desc: "Full-stack menu, orders & reservations system with real-time order tracking.",
    },
    {
      title: "Bank Management System",
      stack: ["PHP", "MySQL"],
      desc: "Secure banking operations — deposits, withdrawals, and transaction history.",
    },
    {
      title: "Café Management System",
      stack: ["Java"],
      desc: "Order processing & bill generation, cutting manual errors by 80%.",
    },
    {
      title: "Snack Game",
      stack: ["Java"],
      desc: "2D game with movement, collision detection & smooth 60fps gameplay.",
    },
  ];

  const education = [
    {
      title: "MCA — Master of Computer Applications",
      sub: "Specialization in AI & Machine Learning",
      status: "In Progress",
    },
    {
      title: "BCA — Bachelor of Computer Applications",
      sub: "Hands-on experience in full-stack development",
      status: "Completed",
    },
    {
      title: "12th — UP Board",
      sub: "PCM stream",
      status: "Completed",
    },
    {
      title: "10th — UP Board",
      sub: "",
      status: "Completed",
    },
  ];

  const bg = isDark ? "#0B0B14" : "#F7F7FB";
  const panel = isDark ? "#14141F" : "#FFFFFF";
  const panelAlt = isDark ? "#191927" : "#F1F1F8";
  const border = isDark ? "#252538" : "#E4E4EF";
  const text = isDark ? "#F2F2F7" : "#12121A";
  const muted = isDark ? "#9494A8" : "#63637A";
  const indigo = "#6366F1";
  const indigoBright = "#818CF8";
  const emerald = "#34D399";

  const display = "'Space Grotesk', sans-serif";
  const body = "'Inter', sans-serif";

  return (
    <div style={{ backgroundColor: bg, color: text, fontFamily: body }} className="min-h-screen w-full px-4 sm:px-8 py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .project-card { transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease; }
        .project-card:hover { transform: translateY(-5px); border-color: ${indigo}; box-shadow: 0 12px 30px -12px rgba(99,102,241,0.35); }
        .skill-pill { transition: border-color 0.2s ease, color 0.2s ease; }
        .skill-pill:hover { border-color: ${indigo}; color: ${indigoBright}; }
      `}</style>

      {/* Hero */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        <div
          className="rounded-2xl overflow-hidden shrink-0 h-40 w-40 sm:h-48 sm:w-48"
          style={{ border: `2px solid ${border}` }}
        >
          <img src={url} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="text-center md:text-left">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
            style={{ backgroundColor: panelAlt, border: `1px solid ${border}`, color: emerald }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: emerald }}></span>
            Open to Work
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: display }}>
            {name}
          </h1>
          <p className="text-lg sm:text-xl font-medium mt-2" style={{ color: indigoBright }}>
            Full Stack Web Developer
          </p>
          <p className="text-base mt-4 max-w-xl" style={{ color: muted }}>
            I build clean, scalable web applications end-to-end — from responsive
            interfaces to solid backend logic. Fresher with real-world project
            experience across the MERN stack and PHP.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
            <a
              href="/mayank_full_stack_web_developer.pdf"
              download="mayank_full_stack_web_developer.pdf"
              className="px-6 py-3 rounded-xl text-sm font-semibold transition"
              style={{ backgroundColor: indigo, color: "#FFFFFF" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = indigoBright)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = indigo)}
            >
              Download Resume
            </a>
            <a
              href={`mailto:${email}`}
              className="px-6 py-3 rounded-xl text-sm font-semibold transition"
              style={{ backgroundColor: "transparent", color: text, border: `1px solid ${border}` }}
            >
              {email}
            </a>
          </div>
        </div>
      </div>

      {/* Skills — grouped bento cards */}
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-2xl font-bold text-center mb-10" style={{ fontFamily: display }}>
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skillGroups.map((group, gIdx) => (
            <div
              key={gIdx}
              className="p-5 rounded-2xl"
              style={{ backgroundColor: panel, border: `1px solid ${border}` }}
            >
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: indigoBright }}
              >
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="skill-pill px-3 py-1.5 rounded-lg text-sm"
                    style={{ backgroundColor: panelAlt, border: `1px solid ${border}`, color: text }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-bold text-center mb-10" style={{ fontFamily: display }}>
          Highlighted Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="project-card p-6 rounded-2xl"
              style={{ backgroundColor: panel, border: `1px solid ${border}` }}
            >
              <h3 className="text-lg font-bold" style={{ fontFamily: display }}>{proj.title}</h3>
              <p className="mt-2 text-sm" style={{ color: muted }}>{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.stack.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ backgroundColor: panelAlt, color: indigoBright }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education — stepper */}
      <div className="max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-bold text-center mb-10" style={{ fontFamily: display }}>
          Education
        </h2>
        <div className="relative pl-8" style={{ borderLeft: `2px solid ${border}` }}>
          {education.map((item, idx) => (
            <div key={idx} className="relative mb-9 last:mb-0">
              <span
                className="absolute rounded-full"
                style={{
                  left: "-2.05rem",
                  top: "0.3rem",
                  width: "0.85rem",
                  height: "0.85rem",
                  backgroundColor: item.status === "In Progress" ? indigo : emerald,
                  boxShadow: `0 0 0 4px ${bg}`,
                }}
              ></span>
              <h3 className="text-base font-semibold">{item.title}</h3>
              {item.sub && (
                <p className="text-sm mt-1" style={{ color: muted }}>{item.sub}</p>
              )}
              <span
                className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-medium"
                style={{
                  color: item.status === "In Progress" ? indigoBright : emerald,
                  border: `1px solid ${item.status === "In Progress" ? indigo : emerald}`,
                }}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
