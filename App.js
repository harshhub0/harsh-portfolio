import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MailIcon } from "lucide-react";

export default function Portfolio() {
  const [projects] = useState([
    {
      title: "Crypto Currency Tracker",
      description:
        "Dashboard to track real-time crypto data using CoinGecko API, Firebase Auth, and Chart.js.",
      tech: "React.js, Chart.js, Firebase, Material UI",
      github: "https://github.com/harshhub0/React-Crypto-Tracker",
      live: "https://crypto-hunter.netlify.app/",
    },
    {
      title: "Library Management System",
      description:
        "Full-stack app for library operations with admin functionalities and MongoDB schema.",
      tech: "Node.js, Express.js, EJS, MongoDB",
      github: "https://github.com/harshhub0/Library-management-System",
    },
  ]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-6">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Harsh Bardhan Sinha</h1>
        <p className="text-xl text-gray-600">
          Software Engineer | Full-Stack Developer | ECE @ NIT Patna
        </p>
      </header>

      {/* About */}
      <section className="max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          I'm an Electronics & Communication Engineering student at NIT Patna
          with a passion for web development, competitive programming, and
          scalable systems. I've built full-stack apps, tackled 700+ LeetCode
          problems, and love turning ideas into clean code.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Languages: C++, Python, JavaScript</li>
          <li>Frameworks/Tools: React.js, Node.js, Express.js, Firebase</li>
          <li>Databases: MongoDB, MySQL</li>
          <li>Developer Tools: Git, Postman, VS Code, Jenkins, JUnit</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-xl p-4 shadow-md">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-2">{project.description}</p>
              <p className="text-sm text-gray-500 mb-2">{project.tech}</p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    className="text-green-600 hover:underline"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="mailto:sinhaharsh@gmail.com"
            className="text-gray-800 hover:text-red-600"
          >
            <MailIcon />
          </a>
          <a
            href="https://github.com/harshhub0"
            target="_blank"
            className="hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/harsh-s-398b9425a"
            target="_blank"
            className="hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  );
}

