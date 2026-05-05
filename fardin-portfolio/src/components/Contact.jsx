"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaXmark,
  FaCopy,
} from "react-icons/fa6";

const email = "fardin.cse05@gmail.com";
const phoneNumber = "01872175065";
const phoneNumberWithCode = "+8801872175065";
const whatsappNumber = "8801872175065";

const Contact = () => {
  const [showCallModal, setShowCallModal] = useState(false);

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.currentTarget.reset();
  };

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      toast.success("Phone number copied!");
    } catch {
      toast.error("Failed to copy number!");
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-linear-to-b from-white via-sky-50/60 to-white py-16 font-[Poppins] md:py-20"
    >
      <div className="mx-auto w-[88%]">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <span className="inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Contact Me
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-[#151515] md:text-5xl">
            Let&apos;s Work Together
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
            Have a project idea, question, or want to work together? Send me a
            message and I will get back to you soon.
          </p>
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-2">
          <div className="rounded-4xl border border-black/10 bg-transparent p-5 sm:p-6 md:p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-extrabold text-[#151515] md:text-3xl">
                Get In Touch
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 md:text-base">
                Feel free to contact me for web development, frontend design,
                portfolio websites, or any creative digital project.
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href={gmailLink}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white/70 p-4 shadow-[0_12px_35px_rgba(0,0,0,0.06)] backdrop-blur-md transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-100 text-lg text-sky-700 transition group-hover:bg-sky-700 group-hover:text-white">
                  <FaEnvelope />
                </span>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-500">Email</p>
                  <p className="break-all text-sm font-bold text-[#151515] md:text-base">
                    {email}
                  </p>
                </div>
              </a>

              <button
                type="button"
                onClick={() => setShowCallModal(true)}
                className="group flex w-full items-center gap-4 rounded-2xl border border-black/10 bg-white/70 p-4 text-left shadow-[0_12px_35px_rgba(0,0,0,0.06)] backdrop-blur-md transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-100 text-lg text-sky-700 transition group-hover:bg-sky-700 group-hover:text-white">
                  <FaPhone />
                </span>

                <div>
                  <p className="text-sm font-semibold text-gray-500">Phone</p>
                  <p className="text-sm font-bold text-[#151515] md:text-base">
                    {phoneNumber}
                  </p>
                </div>
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white/70 p-4 shadow-[0_12px_35px_rgba(0,0,0,0.06)] backdrop-blur-md transition hover:-translate-y-1 hover:border-green-200 hover:bg-white"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-green-100 text-lg text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                  <FaWhatsapp />
                </span>

                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    WhatsApp
                  </p>
                  <p className="text-sm font-bold text-[#151515] md:text-base">
                    {phoneNumber}
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-8 rounded-3xl border border-black/10 bg-white/60 p-5 shadow-[0_12px_35px_rgba(0,0,0,0.05)] backdrop-blur-md">
              <p className="text-sm leading-7 text-gray-600 md:text-base">
                I am always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-4xl border border-black/10 bg-transparent p-5 shadow-none sm:p-6 md:p-8"
          >
            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-4 text-sm font-medium text-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-md outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100 sm:px-5"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-4 text-sm font-medium text-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-md outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100 sm:px-5"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project discussion"
                  className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-4 text-sm font-medium text-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-md outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100 sm:px-5"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-2xl border border-black/10 bg-white/70 px-4 py-4 text-sm font-medium text-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-md outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100 sm:px-5"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-2 rounded-2xl bg-[#151515] px-6 py-4 text-sm font-extrabold text-white shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:bg-sky-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {showCallModal && (
        <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-4xl border border-black/10 bg-white p-6 shadow-[0_25px_80px_rgba(0,0,0,0.25)] sm:p-8">
            <button
              type="button"
              onClick={() => setShowCallModal(false)}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200"
            >
              <FaXmark />
            </button>

            <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-sky-100 text-2xl text-sky-700">
              <FaPhone />
            </div>

            <div className="mt-5 text-center">
              <h3 className="text-2xl font-extrabold text-[#151515]">
                Call Now
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                You can call directly from mobile. On desktop, you can copy the
                number or use any supported calling app.
              </p>

              <p className="mt-4 rounded-2xl border border-black/10 bg-gray-50 px-4 py-3 text-lg font-extrabold text-[#151515]">
                {phoneNumber}
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={`tel:${phoneNumberWithCode}`}
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#151515] px-5 py-4 text-sm font-extrabold text-white shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:bg-sky-700"
              >
                <FaPhone />
                Call Now
              </a>

              <button
                type="button"
                onClick={handleCopyNumber}
                className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-gray-50 px-5 py-4 text-sm font-extrabold text-[#151515] transition hover:-translate-y-1 hover:bg-gray-100"
              >
                <FaCopy />
                Copy Number
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
