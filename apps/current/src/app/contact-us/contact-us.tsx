"use client";
import { useState } from "react";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import BackToTopButton from "../general/back-to-top";
import Footer from "../general/footer";

const ContactUs: React.FunctionComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <ShootingStars />
      <StarsBackground />
      <div className="relative z-20 py-[12px] sm:py-[24px]">
        <NavbarDemo />
        <div className="my-8 flex min-h-screen flex-col items-center justify-center px-4">
          <form
            onSubmit={handleSubmit}
            className="relative z-30 w-full max-w-lg space-y-6 bg-transparent p-8"
          >
            <h1 className="mb-2 text-center text-4xl font-bold text-white">
              Let’s Get In Touch
            </h1>
            <p className="mb-8 text-center text-gray-300">
              We are excited to hear from you!
            </p>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-2 text-white placeholder:text-gray-400 autofill:!bg-gray-800 focus:border-white focus:ring-1 focus:ring-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-2 text-white placeholder:text-gray-400 autofill:!bg-gray-800 focus:border-white focus:ring-1 focus:ring-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-2 text-white placeholder:text-gray-400 autofill:!bg-gray-800 focus:border-white focus:ring-1 focus:ring-white"
                placeholder="Type your message here..."
              />
            </div>
            <button
              type="submit"
              className="mx-auto flex items-center justify-center rounded-full bg-vividOrange px-4 py-2 font-semibold text-white hover:bg-[#ff4b00]"
            >
              Submit
            </button>
          </form>
        </div>
        <BackToTopButton />
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
