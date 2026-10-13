import { useState } from "react";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
  CommandLineIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";

function About() {
  return (
    <div className="text-brand-text">
      <h2 className="text-[2rem] font-semibold mt-0 text-brand-text">
        Hi There!
      </h2>

      <p className="text-[1.1rem] leading-[1.6rem] opacity-90">
        My name is Keegan Schwartz, i'm an aspiring game developer and designer from Wisconsin. 
        I take pride in making ideas come to life through both the process of design and progmramming. 
        With a sharp mind for thinking on my feet and outside the box, I can keep work flowing despite hiccups that threaten to slow down development of my projects. 
        My personal passion is to learn constantly and always be improving or finding something new I haven't learned yet.
      </p>

      <p className="text-[1.1rem] leading-[1.6rem] mt-6 opacity-90">
        I'm currently a student at the University of Wisconsin-Whitewater, aquiring my Bachelors in Media Arts and Game Development, 
        with a minor in general buisness. I have a few small projects under my belt, and i'm always looking to expand my portfolio and learn new skills. 
        I have a strong interest in game design, and I hope to one day work in the game industry as a designer or developer. 
        My personal strength is with the Java programming language but I'm learning more each day with C# and HTML/CSS/JS. My main interest is in game development, 
        but i'm interested in all aspects of program development and design.
      </p>
    </div>
  );
}

function Skills() {
  const items = [
    {
      name: "TestSkill",
      level: "Working Knowledge",
      icon: PaintBrushIcon,
      description:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
    },
    {
      name: "TestSkill",
      level: "Working Knowledge",
      icon: PaintBrushIcon,
      description:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
    },
    {
      name: "TestSkill",
      level: "Working Knowledge",
      icon: PaintBrushIcon,
      description:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
    },
    {
      name: "TestSkill",
      level: "Working Knowledge",
      icon: PaintBrushIcon,
      description:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
    },
    {
      name: "TestSkill",
      level: "Working Knowledge",
      icon: PaintBrushIcon,
      description:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
    },
    {
      name: "TestSkill",
      level: "Working Knowledge",
      icon: PaintBrushIcon,
      description:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
    },
    {
      name: "TestSkill",
      level: "Working Knowledge",
      icon: PaintBrushIcon,
      description:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
    },
    {
      name: "TestSkill",
      level: "Working Knowledge",
      icon: PaintBrushIcon,
      description:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
    },
  ];

  return (
    <div className="text-brand-text">
      <h2 className="text-[2rem] font-semibold mt-0 text-brand-prussian">
        SKILLS & TOOLS
      </h2>

      <p className="text-[1.1rem] opacity-75 leading-[1.6rem] mt-2">
        The toolkit behind the work. A mix of design craft and front‑end fluency
        that helps move from an early idea to a refined, testable experience.
      </p>

      <div
        className="
          grid 
          grid-cols-[repeat(auto-fit,minmax(250px,1fr))] 
          gap-8 
          mt-10
        "
      >
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="
                bg-brand-surface
                border border-brand-slate
                p-6 rounded-lg
                transition
                hover:-translate-y-[6px]
                hover:shadow-[0_12px_24px_rgba(0,0,0,0.35)]
                hover:border-brand-prussian
              "
            >
              {/* Icon */}
              <Icon className="w-10 h-10 text-brand-prussian opacity-90 mb-4" />

              {/* Title */}
              <h3 className="text-[1.3rem] font-semibold mb-1 text-brand-text">
                {item.name}
              </h3>

              {/* Proficiency */}
              <p className="text-[0.95rem] text-brand-gold mb-4">
                {item.level}
              </p>

              {/* Optional description */}
              <p className="text-[0.85rem] opacity-70 leading-[1.4rem]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Work() {
  return (
    <div className="text-brand-text">
      <h2 className="text-[2rem] font-semibold mt-0 text-brand-prussian">
        Work Showcase
      </h2>

      <div
        className="
          grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-8
          md:grid-cols-2
          xl:grid-cols-3
          xl:gap-12
          max-[699px]:grid-cols-1
        "
      >

        <div className="
          bg-brand-surface
          border border-brand-slate
          p-6 rounded-lg
          transition
          hover:-translate-y-[6px]
          hover:shadow-[0_12px_24px_rgba(0,0,0,0.35)]
          hover:border-brand-prussian
          cursor-pointer
        ">
          <div className="
            w-full h-[150px] rounded-md mb-4
            bg-gradient-to-br from-brand-slate to-brand-background
            transition-opacity hover:opacity-85
          "></div>

          <h3 className="text-[1.2rem] mt-4 mb-2 text-brand-text">
            Project One
          </h3>

          <p className="text-[0.9rem] opacity-75">
            A short description of the project goes here.
          </p>
        </div>

        <div className="
          bg-brand-surface
          border border-brand-slate
          p-6 rounded-lg
          transition
          hover:-translate-y-[6px]
          hover:shadow-[0_12px_24px_rgba(0,0,0,0.35)]
          hover:border-brand-prussian
          cursor-pointer
        ">
          <div className="
            w-full h-[150px] rounded-md mb-4
            bg-gradient-to-br from-brand-slate to-brand-background
            transition-opacity hover:opacity-85
          "></div>

          <h3 className="text-[1.2rem] mt-4 mb-2 text-brand-text">
            Project Two
          </h3>

          <p className="text-[0.9rem] opacity-75">
            A short description of the project goes here.
          </p>
        </div>

        <div className="
          bg-brand-surface
          border border-brand-slate
          p-6 rounded-lg
          transition
          hover:-translate-y-[6px]
          hover:shadow-[0_12px_24px_rgba(0,0,0,0.35)]
          hover:border-brand-prussian
          cursor-pointer
        ">
          <div className="
            w-full h-[150px] rounded-md mb-4
            bg-gradient-to-br from-brand-slate to-brand-background
            transition-opacity hover:opacity-85
          "></div>

          <h3 className="text-[1.2rem] mt-4 mb-2 text-brand-text">
            Project Three
          </h3>

          <p className="text-[0.9rem] opacity-75">
            A short description of the project goes here.
          </p>
        </div>

      </div>
    </div>
  );
}

/* -------------------------------------------
   MAIN APP HERE
-------------------------------------------- */

export default function App() {
  const [section, setSection] = useState("welcome");

  return (
    <div
      className="
        flex h-screen bg-brand-background text-brand-text font-sans
        max-[699px]:flex-col max-[699px]:h-auto
      "
    >
      {/* LEFT PANEL */}
      <aside
        className="
          w-[40%] md:w-[30%]
          border-r border-brand-slate
          flex justify-center items-center
          sticky top-0 h-screen

          max-[699px]:w-full
          max-[699px]:h-auto
          max-[699px]:relative
          max-[699px]:border-r-0
          max-[699px]:border-b
          max-[699px]:border-brand-slate
          max-[699px]:justify-start
          max-[699px]:items-start
          max-[699px]:px-4
          max-[699px]:py-6
        "
      >
        {/* LEFT INNER */}
        <div
          className="
            w-[70%] flex flex-col

            max-[699px]:w-full
            max-[699px]:gap-4
          "
        >
          {/* Availability */}
          <p className="text-[0.8rem] tracking-[0.05rem] text-brand-gold opacity-90">
            AVAILABLE FOR WORK
          </p>

          {/* Name */}
          <h1
            className="
              text-[2.5rem] font-semibold my-2
              md:text-[2.4rem]
              xl:text-[3.2rem]
              text-brand-text
            "
          >
            Keegan Schwartz
          </h1>

          {/* Tagline */}
          <p className="text-[1.05rem] opacity-75 mb-8 max-w-[90%]">
            Student at the University of Wisconsin-Whitewater, BS in Media Arts
            and Game Development With an Emphasis on Technology and Minor in
            General Business.
          </p>

          {/* NAVIGATION */}
          <nav
            className="
              flex flex-col gap-4

              max-[699px]:flex-row
              max-[699px]:overflow-x-auto
              max-[699px]:gap-6
              max-[699px]:pb-2
            "
          >
            {["about", "skills", "work"].map((key) => (
              <div
                key={key}
                onClick={() => setSection(key)}
                className={`
                  cursor-pointer transition tracking-[0.03rem]
                  ${
                    section === key
                      ? "text-brand-prussian opacity-100"
                      : "opacity-60 hover:opacity-100 hover:text-brand-prussian"
                  }

                  max-[699px]:whitespace-nowrap
                  max-[699px]:text-[0.9rem]
                `}
              >
                {key.toUpperCase()}
              </div>
            ))}
          </nav>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4 my-8 opacity-80">
            <a className="text-brand-text text-[0.9rem] transition hover:text-brand-prussian">
              LinkedIn
            </a>
            <a className="text-brand-text text-[0.9rem] transition hover:text-brand-prussian">
              GitHub
            </a>
            <a className="text-brand-text text-[0.9rem] transition hover:text-brand-prussian">
              Itch.io
            </a>
          </div>

          {/* CONTACT BUTTON */}
          <button
            className="
              bg-transparent
              border border-brand-slate
              px-5 py-2
              text-brand-text
              tracking-[0.05rem]
              transition
              hover:border-brand-prussian
              hover:text-brand-prussian
            "
          >
            LET'S TALK
          </button>
        </div>
      </aside>

      {/* RIGHT PANEL */}
      <main
        className="
          w-[60%] p-[4rem_5rem] overflow-y-auto
          md:w-[70%]
          md:p-[3rem_2rem]
          xl:p-[5rem_6rem]

          max-[699px]:w-full
          max-[699px]:p-[2rem_1.5rem]
        "
      >
        {section === "welcome" && (
          <div>
            <h2 className="text-[2rem] font-semibold mt-0 text-brand-prussian">
              Welcome
            </h2>
            <p className="text-[1.1rem] leading-[1.6rem] opacity-90">
              Hover or click a section on the left to explore.
            </p>
          </div>
        )}

        {section === "about" && <About />}
        {section === "skills" && <Skills />}
        {section === "work" && <Work />}
      </main>
    </div>
  );
}
