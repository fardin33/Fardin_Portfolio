"use client";

import { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaDatabase,
  FaMobileScreenButton,
  FaCode,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiDaisyui,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiTypescript,
  SiExpo,
  SiExpress,
  SiVercel,
  SiFigma,
} from "react-icons/si";

import { SiFlutter, SiDart } from "react-icons/si";

const skills = [
  {
    title: "Web App",
    icon: <FaReact />,
    items: [
      { name: "HTML", icon: <FaHtml5 />, percent: 90 },
      { name: "CSS", icon: <FaCss3Alt />, percent: 85 },
      { name: "JavaScript", icon: <FaJs />, percent: 80 },
      { name: "React", icon: <FaReact />, percent: 85 },
      { name: "Next.js", icon: <SiNextdotjs />, percent: 75 },
      { name: "Tailwind", icon: <SiTailwindcss />, percent: 90 },
      { name: "DaisyUI", icon: <SiDaisyui />, percent: 80 },
    ],
  },
  {
    title: "Mobile App",
    icon: <FaMobileScreenButton />,
    items: [
      { name: "Dart", icon: <SiDart />, percent: 70 },
      { name: "Flutter", icon: <SiFlutter />, percent: 75 },
      { name: "React Native", icon: <FaReact />, percent: 65 },
      { name: "Expo", icon: <SiExpo />, percent: 60 },
    ],
  },
  {
    title: "Backend & Database",
    icon: <FaDatabase />,
    items: [
      { name: "Node.js", icon: <FaNodeJs />, percent: 70 },
      { name: "Express.js", icon: <SiExpress />, percent: 65 },
      { name: "Firebase", icon: <SiFirebase />, percent: 75 },
      { name: "MongoDB", icon: <SiMongodb />, percent: 65 },
      { name: "MySQL", icon: <SiMysql />, percent: 70 },
    ],
  },
  {
    title: "Tools",
    icon: <FaGithub />,
    items: [
      { name: "GitHub", icon: <FaGithub />, percent: 85 },
      { name: "Redux", icon: <SiRedux />, percent: 75 },
      { name: "TypeScript", icon: <SiTypescript />, percent: 70 },
      { name: "Vercel", icon: <SiVercel />, percent: 80 },
      { name: "Figma", icon: <SiFigma />, percent: 60 },
    ],
  },
];

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className="w-11/13 mx-auto section-padding mt-20 mb-20"
    >
      <div className="container-custom">
        <div className="text-center">
          <p className="font-semibold text-gray-500">Skills</p>

          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Technologies I Use
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            A clean overview of the technologies I work with for web, mobile,
            backend, database and development tools.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="sticky top-24 hidden lg:block">
            <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-8 shadow-xl">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sky-200/40 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />

              <div className="relative mx-auto flex h-105 max-w-sm items-center justify-center">
                <div className="absolute top-8 h-24 w-24 rounded-full bg-sky-100" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="h-20 w-20 rounded-full bg-primary/20 shadow-md" />

                  <div className="mt-4 h-28 w-40 rounded-t-[3rem] bg-primary/80 shadow-xl" />

                  <div className="-mt-2 h-20 w-56 rounded-3xl bg-slate-900 shadow-2xl">
                    <div className="flex h-full items-center justify-center">
                      <FaCode className="text-4xl text-sky-400" />
                    </div>
                  </div>

                  <div className="mt-4 h-4 w-40 rounded-full bg-slate-200" />

                  <div className="mt-6 flex gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-sky-100 shadow-sm" />
                    <div className="h-10 w-10 rounded-2xl bg-primary/10 shadow-sm" />
                    <div className="h-10 w-10 rounded-2xl bg-slate-100 shadow-sm" />
                  </div>
                </div>

                <div className="absolute left-3 top-20 rounded-2xl bg-white px-4 py-3 text-sm font-semibold shadow-lg">
                  {"<Code />"}
                </div>

                <div className="absolute bottom-20 right-0 rounded-2xl bg-sky-500 px-4 py-3 text-sm font-bold text-white shadow-lg">
                  Build UI
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-4xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-950 text-xl text-sky-400">
                    {group.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold sm:text-xl">
                      {group.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {group.items.length} technologies
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-xl border border-slate-200 bg-slate-50/80 p-3 transition duration-300 hover:border-sky-300 hover:bg-white hover:shadow-md"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg text-black">
                            {skill.icon}
                          </span>

                          <p className="text-xs font-semibold sm:text-sm">
                            {skill.name}
                          </p>
                        </div>

                        <p className="text-xs font-bold text-sky-700">
                          {animate ? skill.percent : 0}%
                        </p>
                      </div>

                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-sky-100">
                        <div
                          className="h-full rounded-full bg-sky-700 transition-all duration-1000 ease-out"
                          style={{
                            width: animate ? `${skill.percent}%` : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
