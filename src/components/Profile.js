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
      level: "01",
    },
    {
      title: "Snack Game",
      stack: "Java",
      desc: "2D game with movement, collision & 60fps smooth gameplay.",
      level: "02",
    },
    {
      title: "Bank Management System",
      stack: "PHP / MySQL",
      desc: "Secure banking operations: deposits, withdrawals, history.",
      level: "03",
    },
    {
      title: "Café Management System",
      stack: "Java",
      desc: "Order processing & bill generation with 80% error reduction.",
      level: "04",
    },
  ];

  const education = [
    {
      title: "MCA — Master of Computer Applications",
      sub: "Specialization in Artificial Intelligence and Machine Learning",
      status: "IN PROGRESS",
    },
    {
      title: "BCA — Bachelor of Computer Applications",
      sub: "Graduated with hands-on experience in full-stack development",
      status: "UNLOCKED",
    },
    {
      title: "12th — UP Board",
      sub: "PCM stream",
      status: "UNLOCKED",
    },
    {
      title: "10th — UP Board",
      sub: "",
      status: "UNLOCKED",
    },
  ];

  const bg = isDark ? "#1B1235" : "#F3EFFE";
  const panel = isDark ? "#241A47" : "#FFFFFF";
  const border = isDark ? "#3E2E70" : "#D9CFF5";
  const text = isDark ? "#F4F0FF" : "#221A3D";
  const muted = isDark ? "#A79BD1" : "#6E6394";
  const coin = "#FFD23F";
  const magenta = "#FF4FA3";
  const cyan = "#43E8D8";

  const pixelFont = "'Press Start 2P', monospace";
  const bodyFont = "'Poppins', sans-serif";

  return (
    <div style={{ backgroundColor: bg, color: text, fontFamily: bodyFont }} className="min-h-screen w-full px-4 py-12">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Poppins:wght@400;600&display=swap');
        @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .insert-coin { animation: blink 1s step-start infinite; }
      `}</style>

      <div
        className="max-w-3xl mx-auto rounded-2xl overflow-hidden"
        style={{ backgroundColor: panel, border: `3px dashed ${coin}` }}
      >
        <div className="px-6 py-3 text-center" style={{ borderBottom: `3px dashed ${coin}` }}>
          <span style={{ fontFamily: pixelFont, fontSize: "10px", color: coin }}>
            PLAYER CARD
          </span>
        </div>

        <div className="px-6 py-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div
            className="rounded-xl overflow-hidden shrink-0 h-32 w-32"
            style={{ border: `4px solid ${magenta}` }}
          >
            <img src={url} alt={name} className="w-full h-full object-cover" />
          </div>

          <div>
            <h1 style={{ fontFamily: pixelFont, fontSize: "20px", lineHeight: 1.6 }}>
              {name}
            </h1>
            <p className="mt-3" style={{ color: cyan, fontFamily: pixelFont, fontSize: "11px" }}>
              CLASS: FULL STACK DEVELOPER
            </p>
            <p className="text-sm mt-3" style={{ color: muted }}>{email}</p>
            <p className="mt-4 insert-coin" style={{ fontFamily: pixelFont, fontSize: "10px", color: magenta }}>
              PRESS START TO HIRE
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-8">
        <p className="text-lg" style={{ color: muted }}>
          Passionate full-stack developer focused on building modern, scalable web applications with clean UI and optimized backend logic.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-14">
        <h2 style={{ fontFamily: pixelFont, fontSize: "13px", color: coin }} className="mb-6 text-center">
          POWER-UPS
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: bg,
                border: `2px solid ${cyan}`,
                color: text,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-14">
        <h2 style={{ fontFamily: pixelFont, fontSize: "13px", color: coin }} className="mb-6 text-center">
          ACHIEVEMENTS
        </h2>
        <div className="space-y-3">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl flex items-center justify-between gap-4"
              style={{ backgroundColor: panel, border: `2px solid ${border}` }}
            >
              <div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                {item.sub && (
                  <p className="text-sm mt-1" style={{ color: muted }}>{item.sub}</p>
                )}
              </div>
              <span
                className="text-xs px-3 py-1 rounded-full shrink-0 font-bold"
                style={{
                  fontFamily: pixelFont,
                  fontSize: "8px",
                  color: item.status === "IN PROGRESS" ? magenta : cyan,
                  border: `2px solid ${item.status === "IN PROGRESS" ? magenta : cyan}`,
                }}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-14">
        <h2 style={{ fontFamily: pixelFont, fontSize: "13px", color: coin }} className="mb-6 text-center">
          LEVEL SELECT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl"
              style={{ backgroundColor: panel, border: `2px solid ${border}` }}
            >
              <div className="flex items-center justify-between">
                <span style={{ fontFamily: pixelFont, fontSize: "18px", color: coin }}>
                  {proj.level}
                </span>
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ fontFamily: pixelFont, fontSize: "8px", color: magenta, border: `2px solid ${magenta}` }}
                >
                  {proj.stack}
                </span>
              </div>
              <h3 className="text-lg font-semibold mt-3">{proj.title}</h3>
              <p className="mt-2 text-sm" style={{ color: muted }}>{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-16">
        
          href="/mayank_full_stack_web_developer.pdf"
          download="mayank_full_stack_web_developer.pdf"
          className="px-8 py-4 rounded-xl text-base font-bold shadow-lg transition"
          style={{
            backgroundColor: coin,
            color: "#1B1235",
            fontFamily: pixelFont,
            fontSize: "12px",
          }}
        >
          GET RESUME
        </a>
      </div>
    </div>
  );
}
