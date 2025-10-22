"use client";
import React, { useRef, useState } from "react";
import { FaAt, FaFax, FaLocationArrow, FaPhone } from "react-icons/fa";
import Map from "@/components/home/Map";
import emailjs from "@emailjs/browser";
import OurServices from "@/components/home/OurServices";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const businessTemplateID = process.env.NEXT_PUBLIC_BUSINESS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  //const clientTemplateID = process.env.NEXT_PUBLIC_CLIENT_TEMPLATE_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    const formData = {
      name,
      email,
      phone,
      booked_date: new Date().toLocaleString(),
      message,
      timestamp: Date.now(),
    };

    try {
      if (!serviceID || !businessTemplateID || !publicKey) {
        throw new Error("Email service credentials are missing");
      }
      const response = await emailjs.send(
        serviceID,
        businessTemplateID,
        formData,
        publicKey
      );

      console.log(response);
      if (response.status === 200) {
        setSubmitStatus("success");
        formRef.current.reset();
      } else {
        console.error("EmailJS failed response:", response);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  };

  return (
    <>
      <section className="w-full mb-16 md:mb-24 mt-7 px-4 sm:px-6 md:px-8 lg:px-12">
        <OurServices />
      </section>
      <Map />
    </>
  );
};

export default ContactUs;
