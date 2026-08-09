import React from "react";

const Experience = (props) => {
  const isDark = props.mode === "dark";

  const bg = isDark ? "#08080F" : "#FAFAFC";
  const border = isDark ? "#232336" : "#E6E6F0";
  const text = isDark ? "#F5F5FA" : "#111118";
  const muted = isDark ? "#9C9CB4" : "#5C5C74";
  const indigo = "#6366F1";
  const violet = "#8B5CF6";

  const display = "'Space Grotesk', sans-serif";

  const experiences = [
    {
      title: "Full Stack Web Developer Intern",
      org: "Appz Global Tech, Noida (Aug 2025 - Nov 2025)",
      points: [
        "Developed MERN applications handling 100+ daily transactions.",
        "Implemented authentication, REST APIs & optimized MongoDB queries.",
        "Built responsive UIs using React, Tailwind CSS, JavaScript.",
        "Worked in Agile sprints with Git version control.",
      ],
    },
    {
      title: "Hackathon Participant",
      org: "Dev Bhoomi Uttarakhand University",
      points: [
        "Participated in a 2-day competitive coding event, building solutions under time pressure.",
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: bg, color: text }} className="min-h-screen px-4 sm:px-10 py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .gradient-text {
          background: linear-gradient(90deg, ${indigo}, ${violet});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: indigo }}>
          Where I've Worked
        </p>
        <h2 className="gradient-text text-4xl sm:text-5xl font-bold mb-14" style={{ fontFamily: display }}>
          Experience
        </h2>

        <div className="relative pl-8 space-y-14" style={{ borderLeft: `2px solid ${border}` }}>
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              <span
                className="absolute rounded-full"
                style={{
                  left: "-2.05rem",
                  top: "0.3rem",
                  width: "0.9rem",
                  height: "0.9rem",
                  backgroundColor: indigo,
                  boxShadow: `0 0 0 4px ${bg}`,
                }}
              ></span>

              <h3 className="text-2xl font-semibold" style={{ fontFamily: display }}>
                {exp.title}
              </h3>
              <p className="italic mt-1" style={{ color: violet }}>
                {exp.org}
              </p>
              <ul className="mt-3 space-y-2 list-disc ml-5" style={{ color: muted }}>
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
