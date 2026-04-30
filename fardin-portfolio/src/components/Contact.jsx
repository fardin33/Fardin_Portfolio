"use client";

import { toast } from "react-toastify";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.currentTarget.reset();
  };

  return <div></div>;
};

export default Contact;
