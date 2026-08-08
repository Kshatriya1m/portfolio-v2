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

  // ---- Typewriter: types the role first, then the name ----
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
  const panel = isDark ? "#151515" : "#FFFFFF";
  const border = isDark ? "#262626" : "#E5E5E5";
  const text = isDark ? "#F5F5F5" : "#111111";
  const muted = isDark ? "#A3A3A3" : "#6B7280";
  const red = "#DC2626";
  const redDeep = "#7F1D1D";

  const serif = "'Playfair Display', serif";
  const body = "'Inter', sans-serif";

  return (
    <div style={{ backgroundColor: bg, color: text, fontFamily: body }} className="min-h-screen w-full">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap');
        @keyframes cursorBlink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .cursor { animation: cursorBlink 0.9s step-start infinite; }
        .project-card { transition: transform 0.25s ease, border-color 0.25s ease; }
        .project-card:hover { transform: translateY(-6px); border-color: ${red}; }
      `}</style>

      {/* Split hero */}
      <div className="relative w-full h-[92vh] flex flex-col md:flex-row overflow-hidden">
        <div className="hidden md:flex md:w-[42%] items-center justify-center relative" style={{ backgroundColor: bg }}>
          <span
            style={{
              fontFamily: serif,
              fontSize: "14rem",
              color: isDark ? "#151515" : "#F0F0F0",
              fontWeight: 700,
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            MC
          </span>
          <span className="absolute left-0 top-0 h-full w-1" style={{ backgroundColor: red }}></span>
        </div>

        <div className="relative w-full md:w-[58%] h-[55vh] md:h-full">
          <img src={url} alt={name} className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0.05) 60%, transparent 100%)",
            }}
          ></div>
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, transparent 22%)",
            }}
          ></div>

          <div className="absolute bottom-8 left-6 right-6 md:left-10 md:right-10 text-left">
            <p className="text-sm sm:text-base font-medium tracking-widest uppercase" style={{ color: red, minHeight: "1.5rem" }}>
              {roleTyped}
              {!roleDone && <span className="cursor">|</span>}
            </p>
            <h1
              className="mt-2 text-4xl sm:text-6xl font-bold text-white"
              style={{ fontFamily: serif, minHeight: "3.5rem" }}
            >
              {nameTyped}
              {roleDone && nameTyped.length < name.length && <span className="cursor">|</span>}
            </h1>
            <p className="text-sm sm:text-base mt-3" style={{ color: "#D4D4D4" }}>{email}</p>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="max-w-3xl mx-auto text-center mt-16 px-4">
        <p className="text-lg" style={{ color: muted }}>
          Passionate full-stack developer focused on building modern, scalable
          web applications with clean UI and optimized backend logic.
        </p>
      </div>

      {/* Skills */}
      <div className="max-w-4xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: serif }}>Technical Skills</h2>
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

      {/* Education — timeline */}
      <div className="max-w-3xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: serif }}>Education</h2>
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
                  backgroundColor: red,
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
                  color: item.status === "In Progress" ? red : muted,
                  border: `1px solid ${item.status === "In Progress" ? red : border}`,
                }}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-4xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: serif }}>Highlighted Projects</h2>
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

      {/* Resume Button */}
      <div className="flex justify-center mt-16 pb-16 px-4">
        <a
          href="/mayank_full_stack_web_developer.pdf"
          download="mayank_full_stack_web_developer.pdf"
          className="px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition"
          style={{ backgroundColor: red, color: "#FFFFFF" }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#EF4444")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = red)}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
