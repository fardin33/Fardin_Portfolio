import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import {
  FaCode,
  FaDiscord,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa6";

const Footer = () => {
  const email = "fardin.cse05@gmail.com";
  const phoneNumber = "01872175065";

  const pageLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const contactLinks = [
    {
      name: email,
      href: `mailto:${email}`,
      icon: <FaEnvelope />,
    },
    {
      name: phoneNumber,
      href: "tel:+8801872175065",
      icon: <FaPhone />,
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/fardinhasan.jihad.33",
      icon: <FaFacebookF />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/fardin-hassan-jihad",
      icon: <FaLinkedinIn />,
    },
    {
      name: "GitHub",
      href: "https://github.com/fardin33",
      icon: <FaGithub />,
    },
    {
      name: "Discord",
      href: "https://discord.com/users/1413845522225168394",
      icon: <FaDiscord />,
    },
  ];

  return (
    <footer className="w-full bg-linear-to-b from-white via-sky-50/60 to-white py-10 font-[Poppins] sm:py-12">
      <div className="mx-auto w-[88%] overflow-hidden rounded-[34px] border border-black/10 bg-white/35 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        <div className="grid items-start gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_1fr_1.15fr] lg:gap-10 lg:p-10">
          <div className="flex h-full w-full flex-col items-start text-left">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#151515] text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                <FaCode />
              </span>

              <span className="text-xl font-extrabold text-[#151515]">
                Fardin Hassan
              </span>
            </Link>

            <p className="mt-5 max-w-md text-left text-sm leading-7 text-gray-600">
              Building clean, modern, and responsive digital experiences with a
              focus on professional UI, smooth interaction, and user-friendly
              design.
            </p>

            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="grid h-9 w-9 place-items-center rounded-full bg-transparent text-base text-[#151515] transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="h-full w-full rounded-[28px] border border-black/10 bg-white/35 p-5 backdrop-blur-md sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h3 className="text-sm font-extrabold text-[#151515]">Pages</h3>

              <span className="rounded-full border border-black/10 bg-transparent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Explore
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {pageLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-full border border-black/10 bg-transparent px-4 py-2 text-center text-xs font-bold text-gray-600 transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex h-full w-full flex-col items-start text-left lg:pl-8 xl:pl-25">
            <div className="mx-0 w-full max-w-md">
              <h3 className="text-left text-sm font-extrabold text-[#151515]">
                Contact
              </h3>

              <div className="mt-5 grid w-full gap-3">
                {contactLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex w-full items-center justify-start gap-3 rounded-2xl border border-black/10 bg-transparent px-4 py-3 text-left text-sm font-medium text-gray-600 transition hover:bg-white/60 hover:text-[#151515]"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-transparent text-[#151515] transition group-hover:bg-black group-hover:text-white">
                      {item.icon}
                    </span>

                    <span className="break-all text-left">{item.name}</span>
                  </a>
                ))}
              </div>

              <p className="mt-5 max-w-md text-left text-sm leading-6 text-gray-500">
                Available for frontend, portfolio, and creative web design
                projects.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-black/10 bg-white/20 px-6 py-5 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>
            © {new Date().getFullYear()} Fardin Hassan. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#home"
              className="underline-offset-4 transition hover:text-black hover:underline"
            >
              Privacy Policy
            </a>

            <a
              href="#home"
              className="underline-offset-4 transition hover:text-black hover:underline"
            >
              Terms of Service
            </a>

            <a
              href="#contact"
              className="underline-offset-4 transition hover:text-black hover:underline"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
