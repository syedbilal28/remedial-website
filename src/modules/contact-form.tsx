'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  contactNumber: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  contactNumber?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.contactNumber.trim())
      newErrors.contactNumber = "Contact number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("https://api.example.com/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          alert("Form submitted successfully!");
          setFormData({ name: "", email: "", contactNumber: "", message: "" });
        } else {
          alert("Form submission failed. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="w-full max-w-[480px] mx-auto">
      <h1 className="text-[#182A54] leelawadee text-4xl font-bold leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center mb-6">
        Let&lsquo;s talk about your next project
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`w-full px-4 py-2 text-[#0d131c] bg-[#e6ecf4] rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#79abfc] ${
              errors.name ? "ring-2 ring-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={`w-full px-4 py-2 text-[#0d131c] bg-[#e6ecf4] rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#79abfc] ${
              errors.email ? "ring-2 ring-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Your Contact Number"
            className={`w-full px-4 py-2 text-[#0d131c] bg-[#e6ecf4] rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#79abfc] ${
              errors.contactNumber ? "ring-2 ring-red-500" : ""
            }`}
          />
          {errors.contactNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message or query"
            className={`w-full min-h-[250px] px-4 py-2 text-[#0d131c] bg-[#e6ecf4] rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#79abfc] resize-none h-32 ${
              errors.message ? "ring-2 ring-red-500" : ""
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#79abfc] text-white font-bold py-2 px-8 rounded-xl hover:bg-[#5b8ee6] transition duration-300"
          >
            Get in Touch
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
