// "use client";

// import { useEffect, useRef, useState } from "react";
// import { FaGraduationCap, FaBookOpen } from "react-icons/fa6";

// const Education = () => {
//   const sectionRef = useRef(null);
//   const [lineHeight, setLineHeight] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const section = sectionRef.current;
//       const rect = section.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
//       const clampedProgress = Math.min(Math.max(progress, 0), 1);

//       setLineHeight(clampedProgress * 100);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const educationData = [
//     {
//       year: "2024 - Present",
//       title: "Diploma in Computer Science & Technology",
//       institute: "Daffodil Polytechnic Institute",
//       description:
//         "Learning software development, programming, database, web technologies and real-world project development.",
//       points: ["CST Department", "Web Development", "Programming Practice"],
//       side: "left",
//     },
//     {
//       year: "Earlier Education",
//       title: "Secondary School Certificate (SSC)",
//       institute: "Birshreshtha Munshi Abdur Rouf Public College",
//       description:
//         "Built strong academic basics and developed early interest in technology, programming and problem solving.",
//       points: ["Academic Foundation", "Tech Curiosity", "Problem Solving"],
//       side: "right",
//     },
//   ];

//   const courses = ["Udemy", "Interactive Cares", "Ostad", "Programming Hero"];

//   return (
//     <section
//       ref={sectionRef}
//       id="education"
//       className="relative overflow-hidden bg-white py-24 text-black"
//     >
//       <div className="mx-auto w-11/12">
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl font-extrabold md:text-5xl">Education</h2>
//           <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-sky-500" />
//         </div>

//         <div className="relative mx-auto max-w-6xl">
//           <div className="absolute left-4 top-0 h-full w-[2px] bg-sky-100 sm:left-1/2 sm:-translate-x-1/2" />

//           <div
//             className="absolute left-4 top-0 w-[2px] bg-sky-500 transition-all duration-200 ease-out sm:left-1/2 sm:-translate-x-1/2"
//             style={{ height: `${lineHeight}%` }}
//           />

//           <div className="space-y-12">
//             {educationData.map((item, index) => (
//               <div
//                 key={index}
//                 className={`relative grid grid-cols-1 items-center gap-8 pl-12 sm:grid-cols-2 sm:pl-0 ${
//                   item.side === "right" ? "sm:[&>div:first-child]:order-2" : ""
//                 }`}
//               >
//                 <div className="absolute left-4 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-sky-500 shadow-[0_0_0_4px_rgba(14,165,233,0.15)] sm:left-1/2" />

//                 <div
//                   className={`rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_20px_60px_rgba(14,165,233,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(14,165,233,0.18)] ${
//                     item.side === "left"
//                       ? "sm:mr-8 md:mr-12"
//                       : "sm:ml-8 md:ml-12"
//                   }`}
//                 >
//                   <div className="mb-5 flex items-center gap-3">
//                     <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500 text-white">
//                       <FaGraduationCap />
//                     </div>
//                     <span className="text-sm font-semibold text-gray-500">
//                       {item.year}
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-extrabold leading-snug text-black">
//                     {item.title}
//                   </h3>

//                   <p className="mt-2 font-bold text-sky-500">
//                     {item.institute}
//                   </p>

//                   <p className="mt-4 text-sm leading-7 text-gray-600">
//                     {item.description}
//                   </p>

//                   <ul className="mt-5 space-y-2">
//                     {item.points.map((point, i) => (
//                       <li
//                         key={i}
//                         className="flex items-center gap-2 text-sm text-gray-600"
//                       >
//                         <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
//                         {point}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="hidden sm:block" />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mx-auto mt-24 max-w-6xl">
//           <div className="mb-10 text-center">
//             <p className="font-semibold text-sky-500">Courses</p>
//             <h3 className="mt-2 text-3xl font-extrabold md:text-4xl">
//               Learning Platforms
//             </h3>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {courses.map((course, index) => (
//               <div
//                 key={index}
//                 className="group rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_15px_45px_rgba(14,165,233,0.08)] transition duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-[0_25px_70px_rgba(14,165,233,0.16)]"
//               >
//                 <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-white transition duration-300 group-hover:scale-110">
//                   <FaBookOpen />
//                 </div>

//                 <h4 className="text-lg font-extrabold text-black">{course}</h4>

//                 <p className="mt-3 text-sm leading-7 text-gray-600">
//                   Practicing development skills, project building and improving
//                   real-world problem solving.
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;

"use client";

import { useEffect, useRef, useState } from "react";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa6";

const Education = () => {
  const sectionRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const clampedProgress = Math.min(Math.max(progress, 0), 1);

      setLineHeight(clampedProgress * 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const educationData = [
    {
      year: "2024 - Present",
      title: "Diploma in Computer Science & Technology",
      institute: "Daffodil Polytechnic Institute",
      description:
        "Learning software development, programming, database, web technologies and real-world project development.",
      points: ["CST Department", "Web Development", "Programming Practice"],
      side: "left",
    },
    {
      year: "Earlier Education",
      title: "Secondary School Certificate (SSC)",
      institute: "Birshreshtha Munshi Abdur Rouf Public College",
      description:
        "Built strong academic basics and developed early interest in technology, programming and problem solving.",
      points: ["Academic Foundation", "Tech Curiosity", "Problem Solving"],
      side: "right",
    },
  ];

  const courses = ["Udemy", "Interactive Cares", "Ostad", "Programming Hero"];

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative overflow-hidden bg-white py-24 text-black"
    >
      <div className="mx-auto w-11/12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold md:text-5xl">Education</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-sky-700" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-sky-100 sm:left-1/2 sm:-translate-x-1/2" />

          <div
            className="absolute left-4 top-0 w-0.5 bg-sky-600 transition-all duration-200 ease-out sm:left-1/2 sm:-translate-x-1/2"
            style={{ height: `${lineHeight}%` }}
          />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative grid grid-cols-1 items-center gap-8 pl-12 sm:grid-cols-2 sm:pl-0"
              >
                <div className="absolute left-4 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-sky-700 shadow-[0_0_0_4px_rgba(14,165,233,0.15)] sm:left-1/2" />

                <div
                  className={`${
                    item.side === "left"
                      ? "sm:col-start-1 sm:mr-8 md:mr-12"
                      : "sm:col-start-2 sm:ml-8 md:ml-12"
                  } rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_20px_60px_rgba(14,165,233,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(14,165,233,0.18)]`}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-950 text-sky-400 text-xl">
                      <FaGraduationCap />
                    </div>
                    <span className="text-sm font-semibold text-gray-500">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold leading-snug text-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-bold text-sky-600">
                    {item.institute}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-24 max-w-6xl">
          <div className="mb-10 text-center">
            <p className="font-semibold text-sky-700">Courses</p>
            <h3 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Learning Platforms
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_15px_45px_rgba(14,165,233,0.08)] transition duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-[0_25px_70px_rgba(14,165,233,0.16)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-950 text-sky-400 transition duration-300 group-hover:scale-110">
                  <FaBookOpen />
                </div>

                <h4 className="text-lg font-extrabold text-black">{course}</h4>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Practicing development skills, project building and improving
                  real-world problem solving.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
