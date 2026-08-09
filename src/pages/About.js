import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaJava,
  FaPython,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiExpress, SiDotnet } from "react-icons/si";

const About = ({ mode }) => {
  const isDark = mode === "dark";

  const bg = isDark ? "#08080F" : "#FAFAFC";
  const panel = isDark ? "#13131E" : "#FFFFFF";
  const panelHover = isDark ? "#191927" : "#F3F3F9";
  const border = isDark ? "#232336" : "#E6E6F0";
  const text = isDark ? "#F5F5FA" : "#111118";
  const muted = isDark ? "#9C9CB4" : "#5C5C74";
  const indigo = "#6366F1";
  const violet = "#8B5CF6";

  const display = "'Space Grotesk', sans-serif";

  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 className="inline mr-2 text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="inline mr-2 text-blue-500" /> },
    { name: "JavaScript (ES6+)", icon: <FaJsSquare className="inline mr-2 text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="inline mr-2 text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="inline mr-2 text-teal-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="inline mr-2 text-purple-500" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="inline mr-2 text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="inline mr-2 text-gray-400" /> },
    { name: "PHP", icon: <FaPhp className="inline mr-2 text-indigo-500" /> },
  ];

  const databaseSkills = [
    { name: "MongoDB", icon: <FaDatabase className="inline mr-2 text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="inline mr-2 text-blue-600" /> },
    { name: "SQL", icon: <FaDatabase className="inline mr-2 text-gray-500" /> },
  ];

  const languageSkills = [
    { name: "C", icon: <img src="c.png" alt="C" className="inline mr-2 w-6 h-6" /> },
    { name: "C++", icon: <img src="cpp.png" alt="C++" className="inline mr-2 w-6 h-6" /> },
    { name: "C#", icon: <img src="c-sharp.png" alt="C#" className="inline mr-2 w-6 h-6" /> },
    { name: "Python", icon: <FaPython className="inline mr-2 text-yellow-400" /> },
    { name: "Java", icon: <FaJava className="inline mr-2 text-red-500" /> },
    {
      name: "Visual Basic",
      icon: <img src="visual-basic.png" alt="VB" className="inline mr-2 w-6 h-6" />,
    },
  ];

  const toolsSkills = [
    {
      name: "Visual Studio Code",
      icon: <img src="visual-studio.png" alt="VSCode" className="inline mr-2 w-6 h-6" />,
    },
    { name: "Git & GitHub", icon: <FaGitAlt className="inline mr-2 text-red-500" /> },
    {
      name: "Notepad++",
      icon: <img src="notepadpp.png" alt="Notepad++" className="inline mr-2 w-6 h-6" />,
    },
    {
      name: "Apache NetBeans",
      icon: <img src="netbeans.png" alt="NetBeans" className="inline mr-2 w-6 h-6" />,
    },
    { name: ".NET", icon: <SiDotnet className="inline mr-2 text-purple-600" /> },
  ];

  const renderSkills = (skills) =>
    skills.map((skill) => (
      <div
        key={skill.name}
        className="skill-card p-3 rounded-xl text-center flex items-center justify-center space-x-2"
        style={{ backgroundColor: panel, border: `1px solid ${border}`, color: text }}
      >
        {skill.icon} <span className="font-medium text-sm">{skill.name}</span>
      </div>
    ));

  const sections = [
    { label: "Frontend Technologies", skills: frontendSkills },
    { label: "Backend Technologies", skills: backendSkills },
    { label: "Databases", skills: databaseSkills },
    { label: "Programming Languages", skills: languageSkills },
    { label: "Tools", skills: toolsSkills },
  ];

  return (
    <div style={{ backgroundColor: bg, color: text }} className="min-h-screen px-4 sm:px-10 py-16 transition">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .skill-card { transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease; }
        .skill-card:hover { transform: translateY(-4px); border-color: ${indigo}; background-color: ${panelHover}; }
        .gradient-text {
          background: linear-gradient(90deg, ${indigo}, ${violet});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: indigo }}>
          Get To Know Me
        </p>
        <h2 className="gradient-text text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: display }}>
          About Me
        </h2>

        <p className="max-w-3xl leading-7 mb-14 text-lg" style={{ color: muted }}>
          I'm a Full Stack Developer with experience in the MERN Stack, REST APIs,
          PHP/MySQL applications, and Java desktop software. I love designing
          modern UIs and building high-performance applications.
        </p>

        {sections.map((section, sIdx) => (
          <section key={sIdx} className="mb-14">
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: violet }}
            >
              {section.label}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {renderSkills(section.skills)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default About;
