import React, { useState, useEffect, useMemo } from "react";
import pics from "./assets/pics.JPG";
import CV from "./assets/CV.pdf";
import Fixit from "./assets/fixit.png";
import Health from "./assets/Health-connect.png";
import lijofoods from "./assets/lijofoods.png";
import { Phone } from 'lucide-react';

// Data
const projects = [
  {
    title: "Fixit Naija",
    blurb: " innovative civic tech platform, where you can easily report and track public infrastructure problems in your community.Join us in making a difference by highlighting issues in your community.",
    image: Fixit,
    tech: [ "React", "TypeScript", "Tailwind", "PWA"],
    live: "https://fixitnaija.vercel.app",
    code: "https://github.com/teecrown/Fixitnaija",
  },
  {
    title: "Health-Connect",
    blurb: "Easily discover nearby clinics, pharmacies, and reliable health information—all in one place.",
    image: Health,
    tech: ["React", "Vite","Javascript", "Git", "Figma","Tailwind"],
    live: "https://health-connect-six.vercel.app",
    code: "https://github.com/teecrown/Health-Connect",
  },
  {
    title: "Lijo Foods",
    blurb: "Experience the rich taste of Nigeria with LijoFoods. We offer premium catering services for all your events, bringing traditional recipes and modern elegance to your table.",
    image: lijofoods,
    tech: ["Next.js","Git","Vite","Figma", "Tailwind", "Typscript"],
    live: "https://www.lijofoods.com/",
    code: "https://github.com/teecrown/lijofoods",
  },
];

const skills = {
  Languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
  Frameworks: ["React", "Next.js", "TailwindCSS"],
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
            <nav className="hidden md:flex  gap-16">
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
          className="container mx-auto px-16 py-16 flex flex-col md:flex-row md:justify-center gap-16 items-center"
        >
          <img
            src={pics}
            alt="Your portrait"
            className="rounded-full w-40 h-40 sm:w-60 sm:h-60"
          />
          <div >
            
            <h1 className="text-4xl font-bold mb-4">Hi, I’m Abiola Tade 👋</h1>
            <p className="mb-6 text-md w-[300px] sm:w-[400px] px-[5px]">
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
        <section id="projects" className="container mx-auto  px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid justify-center md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p.title}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="-[10px] w-[full]  object-cover"
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
                  <div className="flex justify-center gap-2">
                    <a
                      href={p.live}
                      target="_blank"
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                    >
                      Live Demo
                    </a>
                    <a
                      href={p.code}
                      target="_blank"
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
            <p><a href="https://wa.me/+2347067594570?text=Hello%20there!"
            target="_blank"
            rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800">
              Contact: +2347067594570
              </a>
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
            © {new Date().getFullYear()} Abiola Tade — Built with React &
            TailwindCSS
          </p>
        </footer>
      </div>
    </div>
  );
}
