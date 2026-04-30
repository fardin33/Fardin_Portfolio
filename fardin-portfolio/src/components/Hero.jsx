import Image from "next/image";
import { FaGithub, FaLinkedin, FaDribbble, FaAngellist } from "react-icons/fa6";
import me from "../assets/me5.png";

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
      className="relative min-h-screen flex items-center justify-center text-black overflow-hidden m-0 p-0"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-75 h-75 sm:w-125 sm:h-125 bg-primary/5 rounded-full blur-[120px] opacity-50 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
          <div className="hero-left order-2 lg:order-1 text-center lg:text-left">
            <p className="text-gray-600 text-lg sm:text-2xl font-medium mb-2">
              {" Hello, I'm "}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[57px] font-bold leading-tight">
              <span className="typing-name">Fardin Hassan</span>
            </h1>

            <p className="text-[15px] sm:text-[17px] lg:text-[20px] leading-tight">
              <span className="">
                <span className="text-sky-600">Full Stack</span> Web & Mobile
                App Developer
              </span>
            </p>

            <div className="mt-5 flex flex-row justify-center lg:justify-start items-center gap-4 text-xl">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black text-black transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <div className="mt-6 flex justify-center lg:justify-start">
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

          <div className="order-1 lg:order-2 flex justify-center items-center relative">
            <div className="relative group flex justify-center items-center">
              <div className="absolute rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500" />

              <div className="relative w-70 h-87.5 sm:w-87.5 sm:h-112.5 lg:w-200 lg:h-200 overflow-hidden rounded-full mx-auto">
                <Image
                  src={me}
                  alt="Fardin Hassan"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="hero-right order-3 text-center lg:text-right">
            <p className="text-sky-500 text-lg sm:text-2xl font-medium mb-2">
              Creative
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Developer
              <br /> & <span className="opacity-50 text-sky-500">Designer</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
