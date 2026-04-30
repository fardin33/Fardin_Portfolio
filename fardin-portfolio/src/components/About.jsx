"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaAward,
  FaGraduationCap,
  FaBookOpen,
  FaBullseye,
  FaCode,
} from "react-icons/fa6";

import me from "../assets/me-f.png";

const About = () => {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  const points = [
    {
      icon: <FaAward />,
      title: "Award Winning",
      text: "Focused on building clean, modern and professional web interfaces.",
    },
    {
      icon: <FaBookOpen />,
      title: "Certified Expert",
      text: "Learning modern web technologies and improving industry level skills.",
    },
    {
      icon: <FaBullseye />,
      title: "Strategy Driven",
      text: "Always exploring creative ideas to build meaningful digital products.",
    },
    {
      icon: <FaCode />,
      title: "Full Stack Mindset",
      text: "From frontend UI to backend logic, I love understanding the full flow.",
    },
  ];

  const stats = [
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 40, suffix: "+", label: "Projects Completed" },
    { value: 10, suffix: "+", label: "Skills Learned" },
  ];

  useEffect(() => {
    const current = statsRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.35 },
    );

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section id="about" className="relative mt-30 py-24 p-2 overflow-visible">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full" />
      {/* Blue shade div removed from here */}

      <div className="relative z-10 mx-auto w-11/12">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Sticky Image */}
          <div className="hidden lg:block lg:sticky lg:top-28 lg:self-start">
            <div className="relative mx-auto max-w-107.5">
              <div className="absolute -left-6 -top-6 z-20 rounded-2xl border border-base-300 bg-base-100/90 px-5 py-3 shadow-xl backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 text-sky-400 text-xl">
                    <FaAward />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Achievement
                    </p>
                    <h4 className="text-sm font-extrabold">
                      Programming Contest [Champion]
                    </h4>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-4xl bg-black shadow-2xl">
                <Image
                  src={me}
                  alt="Fardin Hassan"
                  className="h-135 w-full object-cover object-top opacity-95"
                  priority
                />

                <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/80 to-transparent" />
              </div>

              <div className="absolute -bottom-7 right-0 z-20 rounded-2xl border border-base-300 bg-base-100/90 px-5 py-3 shadow-xl backdrop-blur sm:-right-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 text-sky-400 text-xl">
                    <FaGraduationCap />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Education
                    </p>
                    <h4 className="text-sm font-extrabold">
                      Daffodil Polytechnic Institute
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Scroll Content */}
          <div>
            <p className="font-semibold tracking-wide text-gray-500">
              About Me
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              From a curious question to a professional craft.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">
              <p>
                It all began with a simple spark:{" "}
                <span className="font-bold italic text-base-content">
                  “How does the web actually work?”
                </span>{" "}
                This curiosity quickly transformed into a deep passion for
                building. Today, I am{" "}
                <span className="rounded-md bg-base-200 px-2 py-1 font-bold text-base-content">
                  Fardin Hassan
                </span>
                , a passionate Frontend Developer dedicated to creating clean,
                modern and responsive web applications.
              </p>

              <p>
                My core expertise lies in building user interfaces using{" "}
                <span className="font-bold text-base-content">
                  HTML, CSS, JavaScript, React and Next.js.
                </span>{" "}
                I enjoy working on landing pages, dashboards, portfolios and
                business websites that feel polished, smooth and user friendly.
              </p>

              <p>
                Beyond coding, I love learning new technologies, exploring
                creative design ideas and improving myself every day. I believe
                consistency, patience and curiosity are the most important parts
                of becoming a better developer.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-3xl border border-base-300 bg-base-100/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-800 text-sky-400 text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-800 group-hover:text-white">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-extrabold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div
              ref={statsRef}
              className="mt-20 grid gap-8 border-t border-base-300 pt-12 sm:grid-cols-3"
            >
              {stats.map((item, index) => (
                <CountBox
                  key={index}
                  end={item.value}
                  suffix={item.suffix}
                  label={item.label}
                  start={startCount}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CountBox = ({ end, suffix, label, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1400;
    const steps = 45;
    const increment = end / steps;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <div>
      <h3 className="text-4xl font-black text-base-content sm:text-5xl">
        {String(count).padStart(2, "0")}
        {suffix}
      </h3>

      <p className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.35em] text-gray-500">
        {label}
      </p>
    </div>
  );
};

export default About;
