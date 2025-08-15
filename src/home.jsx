import React, { useState, useEffect, useMemo } from "react";
import pics from "./assets/pics.JPG";
import CV from "./assets/CV.pdf";

// Data
const projects = [
  {
    title: "TransitLive",
    blurb: "Real‑time bus arrivals with route search and offline cache.",
    image: "https://via.placeholder.com/600x400?text=TransitLive",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "PWA"],
    live: "#",
    code: "#",
  },
  {
    title: "UI Motion Lab",
    blurb: "A gallery of micro‑interactions built with Framer Motion.",
    image: "https://via.placeholder.com/600x400?text=UI%20Motion%20Lab",
    tech: ["React", "Framer Motion", "Vite", "Tailwind"],
    live: "#",
    code: "#",
  },
  {
    title: "DevNotes",
    blurb: "Markdown notes app with tagging, search, and sync.",
    image: "https://via.placeholder.com/600x400?text=DevNotes",
    tech: ["React", "Zustand", "Tailwind", "IndexedDB"],
    live: "#",
    code: "#",
  },
];

const skills = {
  Languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
  Frameworks: ["React", "Next.js", "Vue", "TailwindCSS"],
  Tools: ["Git", "Figma", "Vite/Webpack", "ESLint/Prettier"],
};

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDark(prefersDark);
  }, []);

  const wrapperClass = useMemo(
    () => (dark ? "dark min-h-screen" : "min-h-screen"),
    [dark]
  );

  return (
    <div className={wrapperClass}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Header */}
        <header className="sticky top-0 bg-white dark:bg-gray-900 shadow z-50">
          <div className="container mx-auto px-4 h-16 flex justify-between items-center">
            <a href="#home" className="font-bold text-lg">
              TADE ABIOLA
            </a>
            <nav className="hidden md:flex gap-6">
              <a href="#projects" className="hover:underline">
                Projects
              </a>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
              <a href="#about" className="hover:underline">
                About
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </nav>
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {dark ? "☀️" : "🌙"}
            </button>
          </div>
        </header>

        {/* Hero */}
        <section
          id="home"
          className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-8 items-center"
        >
          <img
            src={pics}
            alt="Your portrait"
            className="rounded-full w-40 h-40 sm:w-50 sm:h-50"
          />
          <div>
            <h1 className="text-4xl font-bold mb-4">Hi, I’m Abiola Tade 👋</h1>
            <p className="mb-6 text-lg">
              Front‑End Developer specialized in building fast, responsive, and
              accessible web apps with React, Next.js, TypeScript, and Tailwind
              CSS. I turn complex ideas into clean, user-friendly interfaces
              that deliver exceptional experiences.clean.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View Projects
              </a>
              <a
                href={CV}
                target="_blank"
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p.title}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{p.title}</h3>
                  <p className="mb-4 text-sm">{p.blurb}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={p.live}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                    >
                      Live Demo
                    </a>
                    <a
                      href={p.code}
                      className="border border-blue-600 text-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-50"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([group, list]) => (
              <div
                key={group}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow"
              >
                <h3 className="font-bold text-lg mb-4">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {list.map((item) => (
                    <span
                      key={item}
                      className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About & Contact */}
        <section
          id="about"
          className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="mb-4">
              I’m a front‑end developer who loves turning ideas into delightful,
              fast, and accessible web products.
            </p>
            <p>
              Recently I’ve been exploring design systems, performance budgets,
              and server components in Next.js.
            </p>
          </div>
          <div id="contact">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                placeholder="Message"
                className="w-full p-2 border rounded min-h-[120px]"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Your Name — Built with React &
            TailwindCSS
          </p>
        </footer>
      </div>
    </div>
  );
}
