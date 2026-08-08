import React, { useState, useEffect } from "react";

export default function Profile({ mode, url, name, email }) {
  const isDark = mode === "dark";

  const skills = [
    "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap",
    "React.js", "Node.js", "PHP", "Express.js", "MongoDB",
    "MySQL", "Git / GitHub",
  ];

  const projects = [
    {
      title: "Restaurant Web App",
      stack: "MERN",
      desc: "Full-stack menu, orders, reservations with real-time order tracking.",
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
      title: "Café Management System",
      stack: "Java",
      desc: "Order processing & bill generation with 80% error reduction.",
    },
  ];

  const education = [
    {
      title: "MCA — Master of Computer Applications",
      sub: "Specialization in Artificial Intelligence and Machine Learning",
      status: "In Progress",
    },
    {
      title: "BCA — Bachelor of Computer Applications",
      sub: "Graduated with hands-on experience in full-stack development",
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

  // ---- Typewriter effect: types "Full Stack Developer" first, then the name ----
  const roleText = "Full Stack Developer";
  const [roleTyped, setRoleTyped] = useState("");
  const [nameTyped, setNameTyped] = useState("");
  const [roleDone, setRoleDone] = useState(false);

  useEffect(() => {
    if (roleTyped.length < roleText.length) {
      const t = setTimeout(() => {
        setRoleTyped(roleText.slice(0, roleTyped.length + 1));
      }, 70);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setRoleDone(true), 300);
      return () => clearTimeout(t);
    }
  }, [roleTyped]);

  useEffect(() => {
    if (roleDone && nameTyped.length < name.length) {
      const t = setTimeout(() => {
        setNameTyped(name.slice(0, nameTyped.length + 1));
      }, 90);
      return () => clearTimeout(t);
    }
  }, [roleDone, nameTyped, name]);

  const bg = isDark ? "#0A0A0A" : "#FAFAFA";
  const panel = isDark ? "#161616" : "#FFFFFF";
  const border = isDark ? "#2A2A2A" : "#E5E5E5";
  const text = isDark ? "#F5F5F5" : "#111111";
  const muted = isDark ? "#A3A3A3" : "#6B7280";
  const red = "#DC2626";
  const redBright = "#EF4444";
  const redDeep = "#7F1D1D";

  return (
    <div style={{ backgroundColor: bg, color: text, fontFamily: "'Poppins', sans-serif" }} className="min-h-screen w-full px-4 py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        @keyframes cursorBlink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .cursor { animation: cursorBlink 0.9s step-start infinite; }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 25px rgba(220,38,38,0.35); }
          50% { box-shadow: 0 0 45px rgba(220,38,38,0.6); }
        }
        .photo-glow { animation: glow 3.5s ease-in-out infinite; }
        .project-card { transition: transform 0.25s ease, border-color 0.25s ease; }
        .project-card:hover { transform: translateY(-6px); border-color: ${red}; }
      `}</style>

      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <div
          className="photo-glow rounded-full overflow-hidden h-64 w-64 sm:h-72 sm:w-72"
          style={{ border: `4px solid ${red}` }}
        >
          <img src={url} alt={name} className="w-full h-full object-cover" />
        </div>

        <p className="mt-8 text-lg sm:text-xl font-semibold" style={{ color: redBright, minHeight: "1.75rem" }}>
          {roleTyped}
          {!roleDone && <span className="cursor">|</span>}
        </p>

        <h1 className="mt-2 text-4xl sm:text-5xl font-bold" style={{ minHeight: "3.5rem" }}>
          {nameTyped}
          {roleDone && nameTyped.length < name.length && <span className="cursor">|</span>}
        </h1>

        <p className="text-base mt-4" style={{ color: muted }}>{email}</p>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-10">
        <p className="text-lg" style={{ color: muted }}>
          Passionate full-stack developer focused on building modern, scalable
          web applications with clean UI and optimized backend logic.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center mb-2">Technical Skills</h2>
        <div className="w-16 h-1 mx-auto mb-8 rounded-full" style={{ backgroundColor: red }}></div>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-lg text-sm font-medium"
              style={{ backgroundColor: panel, border: `1px solid ${border}`, color: text }}
            >
              <span style={{ color: red }}>•</span> {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center mb-2">Education</h2>
        <div className="w-16 h-1 mx-auto mb-10 rounded-full" style={{ backgroundColor: red }}></div>
        <div className="relative pl-8" style={{ borderLeft: `2px solid ${redDeep}` }}>
          {education.map((item, idx) => (
            <div key={idx} className="relative mb-10 last:mb-0">
              <span
                className="absolute rounded-full"
                style={{
                  left: "-2.05rem",
                  top: "0.3rem",
                  width: "0.9rem",
                  height: "0.9rem",
                  backgroundColor: item.status === "In Progress" ? redBright : red,
                  boxShadow: `0 0 0 4px ${bg}`,
                }}
              ></span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {item.sub && (
                <p className="text-sm mt-1" style={{ color: muted }}>{item.sub}</p>
              )}
              <span
                className="inline-block mt-2 text-xs px-2 py-0.5 rounded"
                style={{
                  color: item.status === "In Progress" ? redBright : muted,
                  border: `1px solid ${item.status === "In Progress" ? redBright : border}`,
                }}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center mb-2">Highlighted Projects</h2>
        <div className="w-16 h-1 mx-auto mb-10 rounded-full" style={{ backgroundColor: red }}></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="project-card p-6 rounded-xl"
              style={{ backgroundColor: panel, border: `1px solid ${border}` }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{proj.title}</h3>
                <span
                  className="text-xs px-2 py-1 rounded-full font-medium"
                  style={{ color: red, border: `1px solid ${red}` }}
                >
                  {proj.stack}
                </span>
              </div>
              <p className="opacity-80 mt-3 text-sm" style={{ color: muted }}>{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <a
          href="/mayank_full_stack_web_developer.pdf"
          download="mayank_full_stack_web_developer.pdf"
          className="px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition"
          style={{ backgroundColor: red, color: "#FFFFFF" }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = redBright)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = red)}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
