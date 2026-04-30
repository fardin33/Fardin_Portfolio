"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCode, FaGrip } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";

import project1 from "../assets/Electrician-amico.png";
import project2 from "../assets/Electrician-bro.png";
import project3 from "../assets/Location review-bro.png";
import project4 from "../assets/Location.png";

const projects = [
  {
    id: 1,
    name: "Snippit",
    category: "web",
    image: project1,
    description: "An open-source SaaS starter registry.",
  },
  {
    id: 2,
    name: "Autovion",
    category: "design",
    image: project2,
    description: "Luxury car showroom UI focused on clarity.",
  },
  {
    id: 3,
    name: "Zentra",
    category: "web",
    image: project3,
    description: "Municipal infrastructure landing page.",
  },
  {
    id: 4,
    name: "Solelux",
    category: "design",
    image: project4,
    description: "Modern shoe store hero banner.",
  },
  {
    id: 5,
    name: "Shopnoneer",
    category: "web",
    image: project1,
    description: "Real estate web platform with clean UI.",
  },
  {
    id: 6,
    name: "Nusuki Flight",
    category: "web",
    image: project2,
    description: "Flight booking system.",
  },
  {
    id: 7,
    name: "Mobile UI",
    category: "design",
    image: project3,
    description: "Mobile dashboard UI concept.",
  },
  {
    id: 8,
    name: "Landing Design",
    category: "design",
    image: project4,
    description: "Creative landing page.",
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
    <section id="projects" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-11/12 max-w-300">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-gray-300" />
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-400">
                Portfolio
              </p>
            </div>

            <h2 className="text-4xl font-black sm:text-5xl lg:text-6xl">
              Featured <span className="text-gray-400">Works</span>
            </h2>
          </div>

          <div className="flex w-full justify-start lg:justify-end">
            <div className="flex w-full max-w-[320px] items-center rounded-full border border-gray-200 bg-[#f3f5f8] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:w-auto sm:max-w-none">
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

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block rounded-3xl border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-2"
              style={{
                boxShadow: "0px 2px 2px 2px rgba(125, 211, 252, 0.6)",
              }}
            >
              <div className="relative h-52 overflow-hidden rounded-2xl bg-gray-50 sm:h-56">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-contain p-5 transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-5 flex justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold">{project.name}</h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {project.description}
                  </p>
                </div>

                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white transition group-hover:bg-black group-hover:text-white">
                  <FaArrowRight className="-rotate-45 text-xs" />
                </div>
              </div>
            </Link>
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
