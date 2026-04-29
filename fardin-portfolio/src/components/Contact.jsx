"use client";

import { toast } from "react-toastify";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-padding bg-base-200">
      <div className="container-custom">
        <div className="text-center">
          <p className="font-semibold text-primary">Contact</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Get In Touch
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <ContactItem
              icon={<FaEnvelope />}
              title="Email"
              value="fardin.cse05@gmail.com"
            />
            <ContactItem icon={<FaPhone />} title="Phone" value="01872175065" />
            <ContactItem
              icon={<FaWhatsapp />}
              title="WhatsApp"
              value="01872175065"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-4xl bg-white p-6 shadow-xl"
          >
            <div className="grid gap-4">
              <input
                className="input input-bordered w-full"
                placeholder="Your Name"
                required
              />
              <input
                className="input input-bordered w-full"
                placeholder="Your Email"
                type="email"
                required
              />
              <textarea
                className="textarea textarea-bordered min-h-36 w-full"
                placeholder="Your Message"
                required
              />
              <button className="btn btn-primary rounded-full text-white">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, value }) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md">
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-2xl text-white">
        {icon}
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
};

export default Contact;
