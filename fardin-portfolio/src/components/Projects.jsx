// import Image from "next/image";
// import Link from "next/link";
// import { projects } from "@/data/projects";

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="w-11/13 mx-auto section-padding bg-base-100"
//     >
//       <div className="container-custom">
//         <div className="text-center">
//           <p className="font-semibold text-primary">Projects</p>
//           <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
//             My Best Projects
//           </h2>
//         </div>

//         <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="card bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
//             >
//               <figure className="relative h-56">
//                 <Image
//                   src={project.image}
//                   alt={project.name}
//                   fill
//                   className="object-cover"
//                 />
//               </figure>

//               <div className="card-body">
//                 <h3 className="card-title">{project.name}</h3>
//                 <p className="text-gray-600">{project.description}</p>

//                 <div className="card-actions mt-4">
//                   <Link
//                     href={`/projects/${project.id}`}
//                     className="btn btn-primary w-full rounded-full text-white"
//                   >
//                     View More / Details
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

// import Image from "next/image";
// import Link from "next/link";
// import { FaArrowRight, FaCode, FaPalette, FaGrip } from "react-icons/fa6";
// import { projects } from "@/data/projects";

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="bg-white py-20 text-black sm:py-24 lg:py-28"
//     >
//       <div className="mx-auto w-11/12 max-w-[1230px]">
//         <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
//           <div>
//             <div className="mb-3 flex items-center gap-3">
//               <span className="h-px w-8 bg-slate-300" />
//               <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-400">
//                 Portfolio
//               </p>
//             </div>

//             <h2 className="text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
//               Featured <span className="text-slate-400">Works</span>
//             </h2>
//           </div>

//           <div className="flex w-full items-center rounded-full border border-slate-200 bg-slate-100 p-1 shadow-sm sm:w-fit">
//             <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-black px-5 py-2 text-xs font-bold text-white shadow-sm sm:flex-none">
//               <FaGrip className="text-[10px]" />
//               All
//             </button>

//             <button className="flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-2 text-xs font-bold text-slate-500 transition hover:text-black sm:flex-none">
//               <FaCode className="text-[10px]" />
//               Web
//             </button>

//             <button className="flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-2 text-xs font-bold text-slate-500 transition hover:text-black sm:flex-none">
//               <FaPalette className="text-[10px]" />
//               Design
//             </button>
//           </div>
//         </div>

//         <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
//           {projects.map((project) => (
//             <Link
//               href={`/projects/${project.id}`}
//               key={project.id}
//               className="group block"
//             >
//               <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl sm:h-56">
//                 <Image
//                   src={project.image}
//                   alt={project.name}
//                   fill
//                   className="object-contain p-5 transition duration-500 group-hover:scale-105"
//                 />
//               </div>

//               <div className="mt-5 flex items-start justify-between gap-3">
//                 <div>
//                   <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-slate-400">
//                     {project.category || "Development"}
//                   </p>

//                   <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-black">
//                     {project.name}
//                   </h3>

//                   <p className="mt-3 text-sm leading-6 text-slate-500">
//                     {project.description}
//                   </p>
//                 </div>

//                 <FaArrowRight className="-rotate-45 text-xs text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black" />
//               </div>
//             </Link>
//           ))}
//         </div>

//         <div className="mt-16 flex flex-col items-center justify-center gap-5">
//           <p className="text-[11px] font-extrabold uppercase tracking-[0.45em] text-slate-400">
//             View More Projects
//           </p>

//           <Link
//             href="/projects"
//             className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-black hover:bg-black hover:text-white"
//           >
//             ↓
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

// "use client";

// import { useMemo, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaArrowRight, FaCode, FaPalette, FaGrip } from "react-icons/fa6";
// import { projects } from "@/data/projects";

// const tabs = [
//   { label: "All", value: "all", icon: <FaGrip /> },
//   { label: "Web", value: "web", icon: <FaCode /> },
//   { label: "Design", value: "design", icon: <FaPalette /> },
// ];

// const Projects = () => {
//   const [activeTab, setActiveTab] = useState("all");
//   const [showAll, setShowAll] = useState(false);

//   const filteredProjects = useMemo(() => {
//     const eightProjects = projects.slice(0, 8);

//     if (activeTab === "all") return eightProjects;

//     return eightProjects.filter(
//       (project) => project.category?.toLowerCase() === activeTab,
//     );
//   }, [activeTab]);

//   const visibleProjects = showAll
//     ? filteredProjects
//     : filteredProjects.slice(0, 4);

//   const handleTabChange = (value) => {
//     setActiveTab(value);
//     setShowAll(false);
//   };

//   return (
//     <section
//       id="projects"
//       className="bg-white py-20 text-black sm:py-24 lg:py-28"
//     >
//       <div className="mx-auto w-11/12 max-w-[1230px]">
//         <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
//           <div>
//             <div className="mb-3 flex items-center gap-3">
//               <span className="h-px w-8 bg-slate-300" />
//               <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-400">
//                 Portfolio
//               </p>
//             </div>

//             <h2 className="text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
//               Featured <span className="text-slate-400">Works</span>
//             </h2>
//           </div>

//           <div className="flex w-full items-center rounded-full border border-slate-200 bg-slate-100 p-1 shadow-sm sm:w-fit">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.value}
//                 onClick={() => handleTabChange(tab.value)}
//                 className={`flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition sm:flex-none ${
//                   activeTab === tab.value
//                     ? "bg-black text-white shadow-sm"
//                     : "text-slate-500 hover:text-black"
//                 }`}
//               >
//                 <span className="text-[10px]">{tab.icon}</span>
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-6 gap-y-12 lg:grid-cols-3">
//           {visibleProjects.map((project) => (
//             <Link
//               href={`/projects/${project.id}`}
//               key={project.id}
//               className="group block"
//             >
//               <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl sm:h-56">
//                 <Image
//                   src={project.image}
//                   alt={project.name}
//                   fill
//                   className="object-contain p-5 transition duration-500 group-hover:scale-105"
//                 />
//               </div>

//               <div className="mt-5 flex items-start justify-between gap-3">
//                 <div>
//                   <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-slate-400">
//                     {project.category || "Development"}
//                   </p>

//                   <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-black">
//                     {project.name}
//                   </h3>

//                   <p className="mt-3 text-sm leading-6 text-slate-500">
//                     {project.description}
//                   </p>
//                 </div>

//                 <FaArrowRight className="-rotate-45 text-xs text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black" />
//               </div>
//             </Link>
//           ))}
//         </div>

//         {filteredProjects.length > 4 && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-5">
//             <p className="text-[11px] font-extrabold uppercase tracking-[0.45em] text-slate-400">
//               {showAll ? "Show Less Projects" : "View More Projects"}
//             </p>

//             <button
//               onClick={() => setShowAll(!showAll)}
//               className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-black hover:bg-black hover:text-white"
//             >
//               {showAll ? "↑" : "↓"}
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;

// "use client";

// import { useMemo, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaArrowRight, FaCode, FaPalette, FaGrip } from "react-icons/fa6";

// import project1 from "../assets/Electrician-amico.png";
// import project2 from "../assets/Electrician-bro.png";
// import project3 from "../assets/Location review-bro.png";
// import project4 from "../assets/Location.png";

// const projects = [
//   {
//     id: 1,
//     name: "Snippit",
//     category: "web",
//     image: project1,
//     description: "An open-source SaaS starter registry.",
//   },
//   {
//     id: 2,
//     name: "Autovion",
//     category: "design",
//     image: project2,
//     description: "Luxury car showroom UI focused on clarity.",
//   },
//   {
//     id: 3,
//     name: "Zentra",
//     category: "web",
//     image: project3,
//     description: "Municipal infrastructure landing page.",
//   },
//   {
//     id: 4,
//     name: "Solelux",
//     category: "design",
//     image: project4,
//     description: "Modern shoe store hero banner.",
//   },
//   {
//     id: 5,
//     name: "Shopnoneer",
//     category: "web",
//     image: project1,
//     description: "Real estate web platform with clean UI.",
//   },
//   {
//     id: 6,
//     name: "Nusuki Flight",
//     category: "web",
//     image: project2,
//     description: "Flight booking search and filter system.",
//   },
//   {
//     id: 7,
//     name: "Mobile App UI",
//     category: "design",
//     image: project3,
//     description: "Clean mobile app dashboard concept.",
//   },
//   {
//     id: 8,
//     name: "Brand Landing",
//     category: "design",
//     image: project4,
//     description: "Creative landing page visual design.",
//   },
// ];

// const tabs = [
//   { label: "All", value: "all", icon: <FaGrip /> },
//   { label: "Web", value: "web", icon: <FaCode /> },
//   { label: "Design", value: "design", icon: <FaPalette /> },
// ];

// const Projects = () => {
//   const [activeTab, setActiveTab] = useState("all");
//   const [showAll, setShowAll] = useState(false);

//   const filteredProjects = useMemo(() => {
//     if (activeTab === "all") return projects;

//     return projects.filter(
//       (project) => project.category.toLowerCase() === activeTab,
//     );
//   }, [activeTab]);

//   const visibleProjects = showAll
//     ? filteredProjects
//     : filteredProjects.slice(0, 4);

//   const handleTabChange = (value) => {
//     setActiveTab(value);
//     setShowAll(false);
//   };

//   return (
//     <section
//       id="projects"
//       className="bg-white py-20 text-black sm:py-24 lg:py-28"
//     >
//       <div className="mx-auto w-11/12 max-w-307.5">
//         <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
//           <div>
//             <div className="mb-3 flex items-center gap-3">
//               <span className="h-px w-8 bg-slate-300" />
//               <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-400">
//                 Portfolio
//               </p>
//             </div>

//             <h2 className="text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
//               Featured <span className="text-slate-400">Works</span>
//             </h2>
//           </div>

//           <div className="flex w-full items-center rounded-full border border-slate-200 bg-slate-100 p-1 shadow-sm sm:w-fit">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.value}
//                 onClick={() => handleTabChange(tab.value)}
//                 className={`flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition sm:flex-none ${
//                   activeTab === tab.value
//                     ? "bg-black text-white shadow-sm"
//                     : "text-slate-500 hover:text-black"
//                 }`}
//               >
//                 <span className="text-[10px]">{tab.icon}</span>
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
//           {visibleProjects.map((project) => (
//             <Link
//               href={`/projects/${project.id}`}
//               key={project.id}
//               className="group block"
//             >
//               <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-2xl border border-sky-600 bg-slate-50 p-4 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl sm:h-56">
//                 <Image
//                   src={project.image}
//                   alt={project.name}
//                   fill
//                   className="object-contain p-5 transition duration-500 group-hover:scale-105"
//                 />
//               </div>

//               <div className="mt-5 flex items-start justify-between gap-3">
//                 <div>
//                   <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-slate-400">
//                     {project.category}
//                   </p>

//                   <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-black">
//                     {project.name}
//                   </h3>

//                   <p className="mt-3 text-sm leading-6 text-slate-500">
//                     {project.description}
//                   </p>
//                 </div>

//                 <FaArrowRight className="-rotate-45 text-xs text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black" />
//               </div>
//             </Link>
//           ))}
//         </div>

//         {filteredProjects.length > 4 && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-5">
//             <p className="text-[11px] font-extrabold uppercase tracking-[0.45em] text-slate-400">
//               {showAll ? "Show Less Projects" : "View More Projects"}
//             </p>

//             <button
//               onClick={() => setShowAll(!showAll)}
//               className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-600 text-sky-600 transition hover:bg-sky-600 hover:text-white"
//             >
//               {showAll ? "↑" : "↓"}
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;

// "use client";

// import { useMemo, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaArrowRight, FaCode, FaPalette, FaGrip } from "react-icons/fa6";

// import project1 from "../assets/Electrician-amico.png";
// import project2 from "../assets/Electrician-bro.png";
// import project3 from "../assets/Location review-bro.png";
// import project4 from "../assets/Location.png";

// const projects = [
//   {
//     id: 1,
//     name: "Snippit",
//     category: "web",
//     image: project1,
//     description: "An open-source SaaS starter registry.",
//   },
//   {
//     id: 2,
//     name: "Autovion",
//     category: "design",
//     image: project2,
//     description: "Luxury car showroom UI focused on clarity.",
//   },
//   {
//     id: 3,
//     name: "Zentra",
//     category: "web",
//     image: project3,
//     description: "Municipal infrastructure landing page.",
//   },
//   {
//     id: 4,
//     name: "Solelux",
//     category: "design",
//     image: project4,
//     description: "Modern shoe store hero banner.",
//   },
//   {
//     id: 5,
//     name: "Shopnoneer",
//     category: "web",
//     image: project1,
//     description: "Real estate web platform with clean UI.",
//   },
//   {
//     id: 6,
//     name: "Nusuki Flight",
//     category: "web",
//     image: project2,
//     description: "Flight booking search and filter system.",
//   },
//   {
//     id: 7,
//     name: "Mobile App UI",
//     category: "design",
//     image: project3,
//     description: "Clean mobile app dashboard concept.",
//   },
//   {
//     id: 8,
//     name: "Brand Landing",
//     category: "design",
//     image: project4,
//     description: "Creative landing page visual design.",
//   },
// ];

// const tabs = [
//   { label: "All", value: "all", icon: <FaGrip /> },
//   { label: "Web", value: "web", icon: <FaCode /> },
//   { label: "Design", value: "design", icon: <FaPalette /> },
// ];

// const Projects = () => {
//   const [activeTab, setActiveTab] = useState("all");
//   const [showAll, setShowAll] = useState(false);

//   const filteredProjects = useMemo(() => {
//     if (activeTab === "all") return projects;

//     return projects.filter(
//       (project) => project.category.toLowerCase() === activeTab,
//     );
//   }, [activeTab]);

//   const visibleProjects = showAll
//     ? filteredProjects
//     : filteredProjects.slice(0, 4);

//   const handleTabChange = (value) => {
//     setActiveTab(value);
//     setShowAll(false);
//   };

//   return (
//     <section
//       id="projects"
//       className="bg-white py-20 text-black sm:py-24 lg:py-28"
//     >
//       <div className="mx-auto w-11/12 max-w-307.5">
//         <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
//           <div>
//             <div className="mb-3 flex items-center gap-3">
//               <span className="h-px w-8 bg-slate-300" />
//               <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-400">
//                 Portfolio
//               </p>
//             </div>

//             <h2 className="text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
//               Featured <span className="text-slate-400">Works</span>
//             </h2>
//           </div>

//           <div className="flex w-full items-center rounded-full border border-gray-100 bg-gray-50 p-1 shadow-sm sm:w-fit">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.value}
//                 onClick={() => handleTabChange(tab.value)}
//                 className={`flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition sm:flex-none ${
//                   activeTab === tab.value
//                     ? "bg-black text-white shadow-sm"
//                     : "text-slate-500 hover:text-black"
//                 }`}
//               >
//                 <span className="text-[10px]">{tab.icon}</span>
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {visibleProjects.map((project) => (
//             <Link
//               href={`/projects/${project.id}`}
//               key={project.id}
//               className="group block overflow-hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-100 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
//             >
//               <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 p-4 sm:h-56">
//                 <Image
//                   src={project.image}
//                   alt={project.name}
//                   fill
//                   className="object-contain p-5 transition duration-500 group-hover:scale-105"
//                 />
//               </div>

//               <div className="flex items-start justify-between gap-4 px-1 pb-1 pt-5">
//                 <div>
//                   <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-slate-400">
//                     {project.category}
//                   </p>

//                   <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-black">
//                     {project.name}
//                   </h3>

//                   <p className="mt-3 text-sm leading-6 text-slate-500">
//                     {project.description}
//                   </p>
//                 </div>

//                 <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm transition duration-300 group-hover:bg-black group-hover:text-white">
//                   <FaArrowRight className="-rotate-45 text-xs transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {filteredProjects.length > 4 && (
//           <div className="mt-16 flex flex-col items-center justify-center gap-5">
//             <p className="text-[11px] font-extrabold uppercase tracking-[0.45em] text-slate-400">
//               {showAll ? "Show Less Projects" : "View More Projects"}
//             </p>

//             <button
//               onClick={() => setShowAll(!showAll)}
//               className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-100 bg-white text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition hover:bg-black hover:text-white"
//             >
//               {showAll ? "↑" : "↓"}
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;

// "use client";

// import { useMemo, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaArrowRight, FaCode, FaPalette, FaGrip } from "react-icons/fa6";

// import project1 from "../assets/Electrician-amico.png";
// import project2 from "../assets/Electrician-bro.png";
// import project3 from "../assets/Location review-bro.png";
// import project4 from "../assets/Location.png";

// const projects = [
//   {
//     id: 1,
//     name: "Snippit",
//     category: "web",
//     image: project1,
//     description: "An open-source SaaS starter registry.",
//   },
//   {
//     id: 2,
//     name: "Autovion",
//     category: "design",
//     image: project2,
//     description: "Luxury car showroom UI focused on clarity.",
//   },
//   {
//     id: 3,
//     name: "Zentra",
//     category: "web",
//     image: project3,
//     description: "Municipal infrastructure landing page.",
//   },
//   {
//     id: 4,
//     name: "Solelux",
//     category: "design",
//     image: project4,
//     description: "Modern shoe store hero banner.",
//   },
//   {
//     id: 5,
//     name: "Shopnoneer",
//     category: "web",
//     image: project1,
//     description: "Real estate web platform with clean UI.",
//   },
//   {
//     id: 6,
//     name: "Nusuki Flight",
//     category: "web",
//     image: project2,
//     description: "Flight booking system.",
//   },
//   {
//     id: 7,
//     name: "Mobile UI",
//     category: "design",
//     image: project3,
//     description: "Mobile dashboard UI concept.",
//   },
//   {
//     id: 8,
//     name: "Landing Design",
//     category: "design",
//     image: project4,
//     description: "Creative landing page.",
//   },
// ];

// const tabs = [
//   { label: "All", value: "all", icon: <FaGrip /> },
//   { label: "Web", value: "web", icon: <FaCode /> },
//   { label: "Design", value: "design", icon: <FaPalette /> },
// ];

// const Projects = () => {
//   const [activeTab, setActiveTab] = useState("all");
//   const [showAll, setShowAll] = useState(false);

//   const filteredProjects = useMemo(() => {
//     if (activeTab === "all") return projects;

//     return projects.filter(
//       (project) => project.category.toLowerCase() === activeTab,
//     );
//   }, [activeTab]);

//   const visibleProjects = showAll
//     ? filteredProjects
//     : filteredProjects.slice(0, 4);

//   return (
//     <section className="bg-white py-20 sm:py-24 lg:py-28">
//       <div className="mx-auto w-11/12 max-w-300">
//         {/* HEADER */}
//         <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
//           <div>
//             <div className="mb-3 flex items-center gap-3">
//               <span className="h-px w-8 bg-gray-300" />
//               <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-400">
//                 Portfolio
//               </p>
//             </div>

//             <h2 className="text-4xl font-black sm:text-5xl lg:text-6xl">
//               Featured <span className="text-gray-400">Works</span>
//             </h2>
//           </div>

//           {/* FILTER */}

//           <div className="flex w-full justify-start sm:w-auto">
//             <div className="flex w-full items-center rounded-full border border-gray-200 bg-[#f1f3f7] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:w-fit">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.value}
//                   onClick={() => handleTabChange(tab.value)}
//                   className={`flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-2 text-xs font-extrabold transition-all duration-300 sm:flex-none ${
//                     activeTab === tab.value
//                       ? "bg-black text-white shadow-[0_2px_6px_rgba(0,0,0,0.18)]"
//                       : "text-slate-500 hover:text-slate-900"
//                   }`}
//                 >
//                   <span className="text-[10px]">{tab.icon}</span>
//                   <span>{tab.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* GRID */}
//         <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {visibleProjects.map((project) => (
//             <Link
//               key={project.id}
//               href={`/projects/${project.id}`}
//               className="group block rounded-3xl border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-2"
//               /* 🔥 SKY SHADOW EXACT */
//               style={{
//                 boxShadow: "0px 2px 2px 2px rgba(125, 211, 252, 0.6)",
//               }}
//             >
//               {/* IMAGE */}
//               <div className="relative h-52 rounded-2xl bg-gray-50 sm:h-56">
//                 <Image
//                   src={project.image}
//                   alt={project.name}
//                   fill
//                   className="object-contain p-5 transition group-hover:scale-105"
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="mt-5 flex justify-between gap-4">
//                 <div>
//                   <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400">
//                     {project.category}
//                   </p>

//                   <h3 className="mt-2 text-xl font-bold">{project.name}</h3>

//                   <p className="mt-2 text-sm text-gray-500">
//                     {project.description}
//                   </p>
//                 </div>

//                 <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white transition group-hover:bg-black group-hover:text-white">
//                   <FaArrowRight className="-rotate-45 text-xs" />
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* SHOW MORE */}
//         {filteredProjects.length > 4 && (
//           <div className="mt-16 flex flex-col items-center gap-4">
//             <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
//               {showAll ? "Show Less" : "View More"}
//             </p>

//             <button
//               onClick={() => setShowAll(!showAll)}
//               className="h-12 w-12 rounded-full border border-gray-200 transition hover:bg-black hover:text-white"
//             >
//               {showAll ? "↑" : "↓"}
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;

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
