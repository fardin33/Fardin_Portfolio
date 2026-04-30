"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaDribbble, FaAngellist } from "react-icons/fa6";
import me from "../assets/me-f.png";

const Hero = () => {
  const socials = [
    { icon: <FaLinkedin />, href: "#" },
    { icon: <FaGithub />, href: "#" },
    { icon: <FaDribbble />, href: "#" },
    { icon: <FaAngellist />, href: "#" },
  ];

  return (
    <section
      id="home"
      className="relative m-0 bg-opacity-5 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-size-[36px_36px] flex min-h-screen items-center justify-center overflow-hidden p-0 text-black pt-10 lg:pt-0"
    >
      <div className="absolute left-1/2 top-0 z-0 h-75 w-75 -translate-x-1/2 rounded-full bg-sky-500/10 opacity-50 blur-[120px] sm:h-125 sm:w-125" />

      <div className="relative z-10 mx-auto max-w-275 xl:max-w-337.5 2xl:max-w-375 px-4 sm:px-6 lg:px-8 xl:px-6 2xl:px-4">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
          <div className="relative order-1 flex items-center justify-center lg:order-2">
            <div className="group relative flex items-center justify-center">
              <div className="absolute rounded-full blur-3xl transition-all duration-500 h-60 w-60" />

              <div className="mt-8  md:mt-8 lg:mt-0 relative mx-auto h-87.5 w-70 overflow-hidden rounded-full sm:h-112.5 sm:w-87.5 lg:h-180 lg:w-180">
                <Image
                  src={me}
                  alt="Fardin Hassan"
                  fill
                  // className="object-cover object-center"
                  className="object-cover object-center drop-shadow-[0_0_8px_#0284c7]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* --- LEFT SIDE: Name & Title --- */}
          <div className="hero-left order-2 text-center lg:order-1 lg:text-left">
            <p className="mb-2 text-lg font-medium text-gray-600 md:text-[22px] lg:text-2xl">
              {" Hello, I'm "}
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-[57px]">
              <span className="typing-name">Fardin Hassan</span>
            </h1>

            <p className="text-[15px] leading-tight sm:text-[17px] lg:text-[20px]">
              <span>
                <span className="text-sky-600">Full Stack</span> Web & Mobile
                App Developer
              </span>
            </p>

            <div className="hidden lg:block">
              <div className="mt-5 flex flex-row items-center gap-4 text-xl">
                {socials.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black text-black transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>

              <div className="mt-6 flex">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-black"
                >
                  Download Resume
                  <span className="inline-block rounded-sm border border-white/60 px-1.5 py-0.5 text-[10px]">
                    PDF
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: Creative Developer Part --- */}
          <div className="hero-right order-3 text-center lg:text-right">
            <p className="mb-2 text-lg font-medium text-sky-600 sm:text-2xl">
              Creative
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Developer
              <br /> &{" "}
              <span className="text-gray-600 opacity-50">Designer</span>
            </h2>

            <div className="lg:hidden mt-8">
              <div className="flex flex-row items-center justify-center gap-4 text-xl">
                {socials.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black text-black transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-black"
                >
                  Download Resume
                  <span className="inline-block rounded-sm border border-white/60 px-1.5 py-0.5 text-[10px]">
                    PDF
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
