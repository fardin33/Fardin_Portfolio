"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCode,
  FaGrip,
  FaCss3Alt,
  FaReact,
  FaLaravel,
  FaFigma,
  FaHtml5,
} from "react-icons/fa6";

import { CiMobile3 } from "react-icons/ci";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiDaisyui,
  SiFigma,
} from "react-icons/si";

import project1 from "../assets/SummerStore.jpeg";
import project2 from "../assets/KeenKeeper.jpeg";
import project3 from "../assets//BookVibe.jpeg";
import project4 from "../assets/Location.png";

const projects = [
  {
    id: 1,
    name: "Summer Store",
    category: "web",
    image: project1,
    description:
      "Modern summer eCommerce platform featuring secure authentication and user profiles.",
    liveLink: "https://summer-store-tau.vercel.app",
    languages: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Next.js", icon: <RiNextjsFill /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Better Auth", icon: <RiNextjsFill /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
      { name: "DaisyUI", icon: <SiDaisyui /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Html5", icon: <FaHtml5 /> },
    ],
  },
  {
    id: 2,
    name: "Keen keeper",
    category: "Web",
    image: project2,
    description:
      "KeenKeeper is a friendship management app designed to track and nurture social connections.",
    liveLink: "https://keenkeeper-fardin.netlify.app",
    languages: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
      { name: "DaisyUI", icon: <SiDaisyui /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Html5", icon: <FaHtml5 /> },
    ],
  },
  {
    id: 3,
    name: "Book Vibe",
    category: "web",
    image: project3,
    description: "Municipal infrastructure landing page.",
    liveLink: "https://book-vibe-fardin.netlify.app",
    languages: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
      { name: "DaisyUI", icon: <SiDaisyui /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Html5", icon: <FaHtml5 /> },
    ],
  },
  {
    id: 4,
    name: "Solelux",
    category: "design",
    image: project4,
    description: "Modern shoe store hero banner.",
    liveLink: "App",
    languages: [
      { name: "Figma", icon: <FaFigma /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
  },
  {
    id: 5,
    name: "DigiTools",
    category: "web",
    image: project1,
    description:
      "Premium digital tools for creators, professionals, and businesses.",
    liveLink: "https://digitools-fardin.netlify.app",
    languages: [
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
    ],
  },
  {
    id: 6,
    name: "Mobile UI",
    category: "design",
    image: project3,
    description: "Mobile dashboard UI concept.",
    liveLink: "#",
    languages: [
      { name: "Figma", icon: <FaFigma /> },
      { name: "React", icon: <FaReact /> },
      { name: "UI Design", icon: <CiMobile3 /> },
    ],
  },
  {
    id: 7,
    name: "Landing Design",
    category: "design",
    image: project4,
    description: "Creative landing page.",
    liveLink: "#",
    languages: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    id: 8,
    name: "Solelux",
    category: "design",
    image: project4,
    description: "Modern shoe store hero banner.",
    liveLink: "#",
    languages: [
      { name: "Figma", icon: <FaFigma /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
  },
];

const tabs = [
  { label: "All", value: "all", icon: <FaGrip /> },
  { label: "Web", value: "web", icon: <FaCode /> },
  { label: "App", value: "design", icon: <CiMobile3 /> },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const handleTabChange = (value) => {
    setActiveTab(value);
    setShowAll(false);
  };

  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return projects;

    return projects.filter(
      (project) => project.category.toLowerCase() === activeTab,
    );
  }, [activeTab]);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <section
      id="projects"
      className="bg-linear-to-b from-white via-sky-50/60 to-white py-20 font-[Poppins] sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-[88%]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-gray-300" />
              <span className="inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
                Projects
              </span>
            </div>

            <h2 className="text-4xl font-black text-[#151515] sm:text-5xl lg:text-6xl">
              Featured <span className="text-gray-400">Works</span>
            </h2>
          </div>

          <div className="flex w-full justify-start lg:justify-end">
            <div className="flex w-full max-w-[320px] items-center rounded-full border border-gray-200 bg-white/60 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md sm:w-auto sm:max-w-none">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => handleTabChange(tab.value)}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 sm:flex-none sm:px-5 ${
                    activeTab === tab.value
                      ? "bg-black text-white shadow-[0_2px_7px_rgba(0,0,0,0.22)]"
                      : "text-slate-500 hover:text-black"
                  }`}
                >
                  <span className="text-[10px]">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group flex h-full flex-col rounded-3xl border border-black/10 bg-transparent p-3 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-sky-200 hover:bg-white/30 hover:shadow-[0_24px_70px_rgba(56,189,248,0.16)] hover:ring-2 hover:ring-sky-300/70 hover:backdrop-blur-xl"
            >
              <Link href={`/projects/${project.id}`} className="block">
                <div className="relative h-52 overflow-hidden rounded-2xl border border-black/10 bg-white/50 backdrop-blur-md transition-all duration-500 ease-out group-hover:border-sky-200 group-hover:bg-white/70 sm:h-56">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-contain p-5 transition duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="mt-5 flex items-center justify-between gap-3">
                <Link
                  href={`/projects/${project.id}`}
                  className="min-w-0 flex-1"
                >
                  <h3 className="truncate text-xl font-extrabold text-[#151515] sm:text-2xl">
                    {project.name}
                  </h3>
                </Link>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group/live flex shrink-0 items-center gap-1 rounded-full border border-black/10 bg-transparent py-0.5 pl-2.5 pr-1 text-[11px] font-extrabold leading-none text-[#151515] transition"
                >
                  <span>Live</span>

                  <span className="grid h-6 w-6 place-items-center rounded-full border border-black/10 bg-transparent text-[#151515] transition-all duration-300 group-hover/live:border-black group-hover/live:bg-black group-hover/live:text-white">
                    <FaArrowRight className="-rotate-45 text-[9px] transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                  </span>
                </a>
              </div>

              <Link href={`/projects/${project.id}`} className="block">
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {project.description}
                </p>
              </Link>

              <div className="mt-5 flex cursor-pointer flex-wrap gap-2">
                {project.languages.map((language) => (
                  <span
                    key={language.name}
                    className="flex items-center gap-2 rounded-full border border-black/10 bg-transparent px-3 py-2 text-xs font-bold text-gray-600 transition hover:bg-black hover:text-white"
                  >
                    <span className="text-sm">{language.icon}</span>
                    {language.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 4 && (
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
              {showAll ? "Show Less" : "View More"}
            </p>

            <button
              onClick={() => setShowAll(!showAll)}
              className="h-12 w-12 rounded-full border border-gray-200 transition hover:bg-black hover:text-white"
            >
              {showAll ? "↑" : "↓"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
