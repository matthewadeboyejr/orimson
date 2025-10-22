"use client";

import React from "react";
import Links from "@/components/Links";

const BookingBtn = ({ title = "Get in Touch", action = "/contact-us" }) => {
  return <Links title={title} action={action} />;
};

export default BookingBtn;
