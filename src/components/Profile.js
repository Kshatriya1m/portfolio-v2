import React from "react";

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
      tag: "In Progress",
    },
    {
      title: "BCA — Bachelor of Computer Applications",
      sub: "Graduated with hands-on experience in full-stack development",
      tag: "Completed",
    },
    {
      title: "12th — UP Board",
      sub: "PCM stream",
      tag: "Completed",
    },
    {
      title: "10th — UP Board",
      sub: "",
      tag: "Completed",
    },
  ];

  const bg = isDark ? "#0B0E14" : "#F5F6F8";
  const panel = isDark ? "#111621" : "#FFFFFF";
  const border = isDark ? "#232B3A" : "#E2E5EA";
  const text = isDark ? "#E6E8EB" : "#161A23";
  const muted = isDark ? "#8B93A1" : "#5B6472";
  const accent = "#E3B341";
  const accent2 = "#4FD1C5";

  return (
    <div style={{ backgroundColor: bg, color: text, fontFamily: "'Inter', sans-serif" }} className="min-h-screen w-full px-4 py-12">

      <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: panel, border: `1px solid ${border}` }}>
        <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: `1px solid ${border}` }}>
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F56" }}></span>
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FFBD2E" }}></span>
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27C93F" }}></span>
          <span className="ml-3 text-xs" style={{ color: muted, fontFamily: "'JetBrains Mono', monospace" }}>
            ~/portfolio/whoami.sh
          </span>
        </div>

        <div className="px-6 py-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="rounded-lg overflow-hidden shrink-0 h-32 w-32" style={{ border: `2px solid ${accent}` }}>
            <img src={url} alt={name} className="w-full h-full object-cover" />
          </div>

          <div style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <p className="text-sm" style={{ color: accent2 }}>$ whoami</p>
            <h1 className="text-3xl font-bold mt-1">{name}</h1>
            <p className="mt-1" style={{ color: accent }}>&gt; Full Stack Web Developer (MERN)</p>
            <p className="text-sm mt-2" style={{ color: muted }}>{email}</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-8">
        <p className="text-lg" style={{ color: muted }}>
          Passionate full-stack developer focused on building modern, scalable web applications with clean UI and optimized backend logic.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: muted, fontFamily: "'JetBrains Mono', monospace" }}>
          {"// Installed Skills"}
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-md text-sm"
              style={{ backgroundColor: panel, border: `1px solid ${border}`, fontFamily: "'JetBrains Mono', monospace", color: text }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: muted, fontFamily: "'JetBrains Mono', monospace" }}>
          {"// Education Log"}
        </h2>
        <div className="space-y-3">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg flex items-start justify-between gap-4"
              style={{ backgroundColor: panel, border: `1px solid ${border}` }}
            >
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.sub && (
                  <p className="text-sm mt-1" style={{ color: muted }}>{item.sub}</p>
                )}
              </div>
              <span
                className="text-xs px-2 py-1 rounded shrink-0"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: item.tag === "In Progress" ? accent : accent2,
                  border: `1px solid ${item.tag === "In Progress" ? accent : accent2}`,
                }}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: muted, fontFamily: "'JetBrains Mono', monospace" }}>
          {"// Highlighted Projects"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((proj, idx) => (
            <div key={idx} className="p-5 rounded-lg" style={{ backgroundColor: panel, border: `1px solid ${border}` }}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{proj.title}</h3>
                <span
                  className="text-xs px-2 py-0.5 rounded"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: accent2, border: `1px solid ${accent2}` }}
                >
                  {proj.stack}
                </span>
              </div>
              <p className="mt-2 text-sm" style={{ color: muted }}>{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-14">
        <a
          href="/mayank_full_stack_web_developer.pdf"
          download="mayank_full_stack_web_developer.pdf"
          className="px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition"
          style={{ backgroundColor: accent, color: "#0B0E14", fontFamily: "'JetBrains Mono', monospace" }}
        >
          ./download_resume.sh
        </a>
      </div>

    </div>
  );
}
