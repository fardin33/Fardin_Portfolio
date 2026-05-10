"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaDatabase,
  FaMobileScreenButton,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiDaisyui,
  SiFirebase,
  SiMongodb,
  SiHeroui,
  SiRedux,
  SiExpress,
  SiVercel,
  SiFigma,
  SiFlutter,
  SiDart,
  SiPostman,
  SiAndroidstudio,
} from "react-icons/si";

import developerAnimation from "../assets/developerSkill.json";

const VSCodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.6 3.2 8.9 11 4.4 7.6 2.5 8.7v6.6l1.9 1.1 4.5-3.4 8.7 7.8 3.9-1.6V4.8l-3.9-1.6Zm0 5.2v7.2L11.9 12l5.7-3.6ZM4.6 10.4 7.1 12l-2.5 1.6v-3.2Z" />
  </svg>
);

const skills = [
  {
    title: "Web App",
    icon: <FaReact />,
    items: [
      { name: "HTML", icon: <FaHtml5 />, percent: 90 },
      { name: "CSS", icon: <FaCss3Alt />, percent: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, percent: 90 },
      { name: "Daisy UI", icon: <SiDaisyui />, percent: 85 },
      { name: "Hero UI", icon: <SiHeroui />, percent: 85 },
      { name: "JavaScript", icon: <FaJs />, percent: 80 },
      { name: "React", icon: <FaReact />, percent: 80 },
      { name: "Redux", icon: <SiRedux />, percent: 50 },
      { name: "Next.js", icon: <SiNextdotjs />, percent: 80 },
    ],
  },
  {
    title: "Mobile App",
    icon: <FaMobileScreenButton />,
    items: [
      { name: "Dart", icon: <SiDart />, percent: 70 },
      { name: "Flutter", icon: <SiFlutter />, percent: 75 },
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
    ],
  },
  {
    title: "Tools",
    icon: <FaGithub />,
    items: [
      { name: "GitHub", icon: <FaGithub />, percent: 85 },
      { name: "Vercel", icon: <SiVercel />, percent: 80 },
      { name: "Figma", icon: <SiFigma />, percent: 60 },
      { name: "Postman", icon: <SiPostman />, percent: 60 },
      {
        name: "VS Code",
        icon: <VSCodeIcon />,
        percent: 90,
      },
      { name: "Android Studio", icon: <SiAndroidstudio />, percent: 80 },
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
      className="mx-auto mb-20 mt-30 w-[88%] section-padding md:mt-40 lg:mt-45"
    >
      <div className="container-custom">
        <div className="text-center">
          <span className="inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Skills
          </span>

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
            <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-transparent p-6 shadow-sm backdrop-blur">
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sky-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl" />

              <div className="relative mx-auto flex min-h-105 max-w-sm items-center justify-center">
                <Lottie
                  animationData={developerAnimation}
                  loop={true}
                  autoplay={true}
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-transparent p-4 shadow-sm backdrop-blur">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl" />

              <div className="relative mx-auto flex h-72 max-w-sm items-center justify-center sm:h-96">
                <Lottie
                  animationData={developerAnimation}
                  loop={true}
                  autoplay={true}
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-4xl border border-slate-200 bg-transparent p-4 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-950 text-xl text-sky-400">
                    {group.icon}
                  </div>

                  <div className="min-w-0">
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
                      className="rounded-xl border border-slate-200 bg-transparent p-3 transition duration-300 hover:border-sky-300 hover:bg-white/60 hover:shadow-md"
                    >
                      <div className="flex flex-wrap items-start gap-x-2 gap-y-1">
                        <div className="flex max-w-full min-w-0 shrink items-start gap-2">
                          <span className="shrink-0 pt-0.5 text-lg text-black">
                            {skill.icon}
                          </span>

                          <p className="min-w-0 whitespace-normal wrap-break-word text-xs font-semibold leading-snug sm:text-sm">
                            {skill.name}
                          </p>
                        </div>

                        <p className="ml-auto shrink-0 text-right text-xs font-bold text-sky-700 sm:text-sm">
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
