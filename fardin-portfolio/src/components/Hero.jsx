import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-28 bg-linear-to-br from-teal-50 via-white to-sky-50"
    >
      <div className="container-custom section-padding grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="badge badge-primary badge-outline mb-5 px-4 py-4">
            Available for Web Development
          </div>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I am <span className="text-primary">Fardin Hassan</span>
          </h1>

          <h2 className="mt-4 text-2xl font-bold text-secondary">
            Frontend Developer
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-gray-600">
            I build modern, responsive and user-friendly websites using
            JavaScript, React, Next.js and clean UI technologies. I love turning
            ideas into real digital products.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary rounded-full text-white"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="btn btn-outline btn-primary rounded-full"
            >
              View Projects
            </a>
          </div>

          <div className="mt-8 flex gap-3 text-xl">
            <a
              className="btn btn-circle btn-outline"
              href="https://github.com/"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="btn btn-circle btn-outline"
              href="https://linkedin.com/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="btn btn-circle btn-outline"
              href="https://facebook.com/"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              className="btn btn-circle btn-outline"
              href="https://twitter.com/"
              target="_blank"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl" />
            <Image
              src="/fardin.jpg"
              alt="Fardin Hassan"
              width={420}
              height={420}
              className="relative rounded-[3rem] border-8 border-white object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
