import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaExternalLinkAlt,
} from "react-icons/fa";

/* ================= BACKGROUND ================= */
const AnimatedBackground = ({ theme }) => (
  <div className="fixed inset-0 overflow-hidden -z-10">
    <div
      className={`absolute inset-0 ${
        theme === "dark" ? "bg-[#020617]" : "bg-gray-100"
      }`}
    />
    {theme === "dark" && (
      <>
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-cyan-500 rounded-full blur-[140px] opacity-25 animate-blob" />
        <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] bg-indigo-600 rounded-full blur-[140px] opacity-25 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-1/3 w-[520px] h-[520px] bg-fuchsia-600 rounded-full blur-[140px] opacity-20 animate-blob animation-delay-4000" />
      </>
    )}
  </div>
);

export default function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark"); // default dark

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const projects = [
    {
      title: "E-Commerce Web Application",
      image: "Ecomerce.png",
      github: "#",
      live: "#",
      desc: "Full-stack eCommerce website using HTML, CSS, JavaScript, PHP & MySQL.",
    },
    {
      title: "Portfolio Website",
      image: "portfolio.png",
      github: "#",
      live: "#",
      desc: "Personal portfolio built using React, Vite and Tailwind CSS.",
    },
    {
      title: "Blood Donation App (UI)",
      image: "Blood.png",
      github: "#",
      live: "#",
      desc: "Flutter UI project for blood donation system.",
    },
    {
      title: "E-Learning Website in React",
      image: "Learning.png",
      github: "#",
      live: "#",
      desc: " React.js, PHP, MySQL.",
    },
    {
      title: "Netflix Clone",
      image: "Netfilix.png",
      github: "https://github.com/Iamsunil06/NETFILIX-CLONE/tree/main/video53_EX9_NETFILIX%20CLONE",
      live: "#",
      desc: " Technology Used: React.js, JavaScript, CSS, API Integration • Project Type: Web Application.",
    },
    {
      title: "Cryptoverse",
      image: "crypto.png",
      github: "https://github.com/Iamsunil06/Cryptoverse-project",
      live: "#",
      desc: "Frontend: React (JSX) with Tailwind CSS; Backend: Node.js with Express; Database: PostgreSQL.",
    },
  ];

  return (
    <div
      className={`${
        theme === "dark" ? "text-slate-200" : "text-gray-900"
      } scroll-smooth relative`}
    >
      <AnimatedBackground theme={theme} />

      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed w-full z-50 backdrop-blur border-b ${
          theme === "dark"
            ? "bg-slate-900/70 border-slate-800"
            : "bg-white/70 border-gray-300"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
          <h1
            className={`text-xl font-bold ${
              theme === "dark" ? "text-emerald-400" : "text-indigo-600"
            }`}
          >
            Sunil<span className="text-indigo-400">.dev</span>
          </h1>

          {/* Desktop */}
          <div className="items-center hidden space-x-4 md:flex">
            {["home", "about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`hover:${
                  theme === "dark" ? "emerald-400" : "indigo-500"
                } transition`}
              >
                {item.toUpperCase()}
              </a>
            ))}

            <a
              href="https://github.com/Iamsunil06"
              target="_blank"
              rel="noreferrer"
              className={`text-xl hover:${
                theme === "dark" ? "emerald-400" : "indigo-500"
              }`}
            >
              <FaGithub />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`ml-4 text-xl hover:${
                theme === "dark" ? "emerald-400" : "indigo-500"
              } transition`}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile */}
          <button
            className="text-2xl md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className={`md:hidden px-6 pb-4 ${
              theme === "dark" ? "bg-slate-900" : "bg-gray-100"
            }`}
          >
            {["home", "about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className={`block py-2 border-b hover:${
                  theme === "dark" ? "emerald-400" : "indigo-500"
                } ${
                  theme === "dark" ? "border-slate-800" : "border-gray-300"
                } transition`}
              >
                {item.toUpperCase()}
              </a>
            ))}

            <a
              href="https://github.com/Iamsunil06"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 py-3 hover:${
                theme === "dark" ? "emerald-400" : "indigo-500"
              } transition`}
            >
              <FaGithub /> GitHub
            </a>

            <button
              onClick={toggleTheme}
              className={`flex items-center gap-2 py-2 text-xl hover:${
                theme === "dark" ? "emerald-400" : "indigo-500"
              } transition`}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />} Theme
            </button>
          </motion.div>
        )}
      </nav>

      {/* ================= HOME ================= */}
      <section
        id="home"
        className="flex items-center justify-center min-h-screen px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.img
            src="/photo.png"
            alt="Sunil Kumar"
            className="object-cover w-40 h-40 mb-6 border-4 rounded-full shadow-xl md:w-48 md:h-48 border-emerald-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <h2 className="mb-4 text-4xl font-bold md:text-6xl">
            Hi, I'm <span className="text-emerald-400">Sunil Kumar</span>
          </h2>

          <p className="mb-8 text-slate-400">
            Aspiring Software Engineer | Full Stack Developer | B.Tech (IT)
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://drive.google.com/file/d/1t8jOZrBx1FweTJgAWrP5aBpZvBjoJ3BR/view"
              target="_blank"
              className="px-6 py-3 font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-900"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 font-semibold transition border rounded-lg border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-900"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h3 className="mb-6 text-3xl font-bold text-center text-emerald-400">
            About Me
          </h3>

          <p className="max-w-3xl mx-auto mb-12 text-center text-slate-400">
            I am a B.Tech IT student I am a passionate Full Stack Developer with a strong foundation in web technologies. I enjoy building clean, responsive, and user-friendly applications while continuously learning new skills..
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-gray-800/60 rounded-xl">
              <h4 className="mb-4 text-xl font-semibold text-emerald-400">
              💻 Skills
              </h4>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>✔ HTML, CSS, JavaScript</li>
                <li>✔ React.js, Vite</li>
                <li>✔ Java, Python</li>
                <li>✔ Node.js, MySQL</li>
                <li>✔ Tailwind CSS, Bootstrap</li>
                <li>✔Basic AI concepts & AI tools usage</li>
                <li>✔ Git & GitHub</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-800/60 rounded-xl">
              <h4 className="mb-4 text-xl font-semibold text-emerald-400">
               🧑‍💻 Experience
              </h4>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>✔ Full Stack E-Commerce College Project</li>
                <li>✔ Full Stack E-Learning Website</li>
                <li>✔Netflix Clone</li>
                <li>✔TwitterClone</li>
                <li>✔ React Portfolio Website</li>
                <li>✔ Flutter Blood Donation App UI</li>
                <li>✔......Many more</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-800/60 rounded-xl">
              <h4 className="mb-4 text-xl font-semibold text-emerald-400">
              🎓 Education
              </h4>
            

  <ul className="space-y-4 text-sm text-slate-200">
    <li className="flex items-center justify-between">
      <div>
        <p className="font-medium">
          B.Tech – Information Technology
        </p>
        <p className="text-xs text-slate-400">
          RK University, Rajkot
        </p>
        <p className="text-xs text-slate-500">
          2022 – 2026
        </p>
      </div>
      <span className="font-semibold text-emerald-400">
        7.5 GPA
      </span>
    </li>

    <li className="flex items-center justify-between">
      <div>
        <p className="font-medium">
          12th – Science (BSEB)
        </p>
        <p className="text-xs text-slate-400">
          RNAR College, Samastipur, Bihar 
        </p>
        <p className="text-xs text-slate-500">
          2020 – 2022
        </p>
      </div>
      <span className="font-semibold text-emerald-400">
        67%
      </span>
    </li>

    <li className="flex items-center justify-between">
      <div>
        <p className="font-medium">
          10th (BSEB)
        </p>
        <p className="text-xs text-slate-400">
          SK High School Harishankari, Samastipur, Bihar
        </p>
        <p className="text-xs text-slate-500">
          2019 – 2020
        </p>
      </div>
      <span className="font-semibold text-emerald-400">
        71%
      </span>
    </li>
  </ul>
</div>


          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h3 className="mb-12 text-3xl font-bold text-center text-emerald-400">
            Projects
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden bg-gray-900 shadow-lg rounded-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48"
                />
                <div className="p-5">
                  <h4 className="mb-2 text-xl font-semibold text-emerald-400">
                    {project.title}
                  </h4>
                  <p className="mb-4 text-sm text-slate-400">{project.desc}</p>
                  <div className="flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 hover:text-emerald-400"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 hover:text-emerald-400"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="px-6 py-24">
        <h3 className="mb-12 text-3xl font-bold text-center text-emerald-400">
          Contact Me
        </h3>

        <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-2">
          <form className="grid gap-4">
            <input
              className="p-3 bg-gray-800 rounded text-slate-200"
              placeholder="Your Name"
            />
            <input
              className="p-3 bg-gray-800 rounded text-slate-200"
              placeholder="Email"
            />
            <textarea
              rows="5"
              className="p-3 bg-gray-800 rounded text-slate-200"
              placeholder="Message"
            ></textarea>
            <button className="py-3 font-semibold rounded bg-emerald-500 text-slate-900">
              Send Message
            </button>
          </form>

          <div className="p-6 space-y-3 bg-gray-800/60 rounded-xl text-slate-200">
            <p>
              <strong>Name:</strong> Sunil Kumar
            </p>
            <p>
              <strong>Email:</strong> thesunildev06@gmail.com
            </p>
            <p>
              <strong>Local Address:</strong> Rajkot, Gujarat
            </p>
            <p>
              <strong>Permanent Address:</strong> Samastipur, Bihar, India
            </p>
            <div className="flex gap-4 pt-4 text-xl">
              <a
                href="https://github.com/Iamsunil06"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400"
              >
                <FaGithub />
              </a>
              <a
                href=" https://www.linkedin.com/in/sunil-kumar-409422331/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/sunilyadav354"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 text-center border-t border-gray-800">
        <div className="flex justify-center gap-6 mb-3 text-2xl">
          <a
            href="https://github.com/Iamsunil06"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-emerald-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sunil-kumar-409422331/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-emerald-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/sunilyadav354"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-emerald-400"
          >
            <FaTwitter />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Sunil Kumar. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
