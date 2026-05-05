
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaBarsStaggered,
  FaCode,
  FaHouse,
  FaUser,
  FaBriefcase,
  FaFolderOpen,
  FaLayerGroup,
  FaEnvelope,
  FaPhoneVolume,
  FaXmark,
} from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";

const phoneNumber = "8801872175065";

const navLinks = [
  { name: "Home", href: "#home", icon: <FaHouse /> },
  { name: "About", href: "#about", icon: <FaUser /> },
  { name: "Skills", href: "#skills", icon: <FaLayerGroup /> },
  { name: "Education", href: "#education", icon: <FaFolderOpen /> },
  { name: "Projects", href: "#projects", icon: <FaBriefcase /> },
  { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const isClickScrolling = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const whatsappLink = `https://wa.me/${phoneNumber}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (isClickScrolling.current) return;

      const currentSection = navLinks.findLast((link) => {
        const section = document.querySelector(link.href);
        if (!section) return false;
        return section.getBoundingClientRect().top <= 120;
      });

      if (currentSection) setActiveLink(currentSection.href);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();

    setActiveLink(href);
    setOpen(false);
    isClickScrolling.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const section = document.querySelector(href);

    if (section) {
      const navbarOffset = 95;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - navbarOffset;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });

      scrollTimeoutRef.current = setTimeout(() => {
        isClickScrolling.current = false;
        setActiveLink(href);
      }, 700);
    } else {
      isClickScrolling.current = false;
    }
  };

  return (
    <header className="fixed top-1 md:top-0 lg:top-2 left-0 z-50 w-full px-3 py-2.5 md:px-8 md:py-2 lg:px-3 lg:py-2 font-[Poppins] pointer-events-none">
      <nav
        className={`relative mx-auto flex items-center justify-between rounded-4xl border border-black/10 bg-white/50 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 pointer-events-auto ${
          scrolled
            ? "max-w-6xl px-4 py-2.5 -mt-2.5"
            : "max-w-7xl px-5 py-3 md:px-6"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#151515]/90 text-white text-xl">
            <FaCode />
          </span>
          <span className="text-xl md:text-[23px] lg:text-[26px] font-extrabold text-[#151515] text-shadow-sky-500">
            Fardin.
          </span>
        </Link>

        <ul className="hidden items-center gap-2 rounded-full bg-white/25 px-3 py-1.5 backdrop-blur-md lg:flex">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={`relative px-4 py-2 text-[15px] font-bold rounded-full ${
                    isActive
                      ? "bg-black/75 text-white shadow-sm"
                      : "text-gray-800 hover:text-black hover:bg-white/35"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button className="hidden h-10 w-10 place-items-center rounded-full text-[22px] bg-sky-100/60 text-sky-800 transition hover:bg-sky-200/80 md:grid">
            <IoSunnyOutline />
          </button>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#151515]/85 px-5 py-3 text-sm font-bold text-white md:flex"
          >
            <span className="relative grid h-6 w-6 place-items-center rounded-full bg-white/15">
              <span className="absolute h-full w-full animate-ping rounded-full bg-white/40" />
              <FaPhoneVolume className="relative text-[11px]" />
            </span>
            Book A Call
          </a>

          <button className="grid h-10 w-10 place-items-center rounded-full text-[22px] bg-sky-100/60 text-sky-800 transition hover:bg-sky-200/80 md:hidden">
            <IoSunnyOutline />
          </button>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="grid h-10 w-10 place-items-center rounded-full bg-[#151515]/85 text-white lg:hidden"
          >
            {open ? <FaXmark /> : <FaBarsStaggered />}
          </button>
        </div>
      </nav>

      <div
        className={`pointer-events-auto absolute right-5 top-23.5 z-50 w-44 rounded-lg border border-black/20 bg-white/50 p-2 shadow-xl backdrop-blur-xl transition-all duration-200 md:right-8 md:top-24.5 md:w-50 lg:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="grid gap-1">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={`flex items-center gap-3 rounded-md px-4 py-3 text-sm font-bold ${
                  isActive
                    ? "bg-[#202020]/75 text-white shadow-sm"
                    : "text-slate-900 hover:bg-white/35"
                }`}
              >
                <span className="text-base">{link.icon}</span>
                {link.name}
              </a>
            );
          })}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center gap-3 rounded-lg border border-black/50 px-4 py-3 text-sm font-bold text-black shadow-sm md:hidden"
          >
            <FaPhoneVolume />
            Book A Call
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;