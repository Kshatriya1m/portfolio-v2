import React from "react";

export default function Profile({ mode, url, name, email }) {
  const isDark = mode === "dark";

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "BootStrap",
    "React.js",
    "Node.js",
    "Php",
    "Express.js",
    "MongoDB",
    "MySql",
    "Git / GitHub",
  ];

  const projects = [
    {
      title: "Restaurant Web App (MERN)",
      desc: "Full-stack menu, orders, reservations with real-time order tracking.",
    },
    {
      title: "Snack Game (Java)",
      desc: "2D game with movement, collision & 60fps smooth gameplay.",
    },
    {
      title: "Bank Management System (PHP/MySQL)",
      desc: "Secure banking operations: deposits, withdrawals, history.",
    },
    {
      title: "Café Management System (Java)",
      desc: "Order processing & bill generation with 80% error reduction.",
    },
  ];

  const education = [
    {
      title: "MCA - Master of Computer Applications",
      sub: "Pursuing MCA with a specialization in Artificial Intelligence and Machine Learning",
    },
    {
      title: "BCA – Bachelor of Computer Applications",
      sub: "Graduated with hands-on experience in full-stack development",
    },
    {
      title: "12th - UP Board",
      sub: "Complete My 12th with UP-Board with PCM",
    },
    {
      title: "10th - UP Board",
      sub: "Complete My 10h with UP-Board",
    },
  ];

  return (
    <div
      className={`min-h-screen w-full px-4 py-12 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Profile Header */}
      <div className="flex flex-col items-center">
        <div className="rounded-full border-4 border-red-800 flex overflow-hidden center h-80 w-80 justify-center align-middle mt-3 mt-4 bg-white">
          {" "}
          <img src={url} alt="profile" className="w-full object-cover" />{" "}
        </div>
        <h1 className="text-4xl font-bold mt-6">{name}</h1>
        <p className="text-red-600 font-semibold">
          Full Stack Web Developer (MERN)
        </p>
        <p className="text-lg mt-1 opacity-80">{email}</p>
      </div>

      {/* About Me */}
      <div className="max-w-3xl mx-auto text-center mt-8">
        <p className="text-lg opacity-85">
          Passionate Full Stack Developer focused on building modern, scalable
          web applications with clean UI and optimized backend logic.
        </p>
      </div>

      {/* Skills */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg shadow text-center ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Education / Internship */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">Education</h2>
        <div className="space-y-4">
          {education.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl shadow ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="opacity-80 mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          Highlighted Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl shadow ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3 className="text-xl font-bold">{proj.title}</h3>
              <p className="opacity-80 mt-2">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Button */}
      <div className="flex justify-center mt-12">
        <a
          href="/mayank_full_stack_web_developer.pdf"
          download="mayank_full_stack_web_developer.pdf"
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white text-lg shadow-lg transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
