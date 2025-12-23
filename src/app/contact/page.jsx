"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-12 lg:py-24 gap-12 lg:gap-24">
        {/* TEXT CONTAINER */}
        <div className="h-1/3 lg:h-full lg:w-1/2 flex flex-col justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I&apos;m currently looking for new opportunities. Whether you have a question
              or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Find me on:</h3>
              <div className="flex gap-6">
                <Link href="https://github.com/jrmart12" target="_blank" className="transform hover:scale-110 transition-transform">
                  <Image src="/github.png" alt="Github" width={40} height={40} />
                </Link>
                <Link href="https://www.linkedin.com/in/jose-martinez-706253100/" target="_blank" className="transform hover:scale-110 transition-transform">
                  <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FORM CONTAINER */}
        <div className="lg:h-full lg:w-1/2">
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            onSubmit={sendEmail}
            ref={form}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col gap-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Send a Message</h2>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600">Name</label>
              <input
                name="user_name"
                type="text"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600">Email</label>
              <input
                name="user_email"
                type="email"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600">Message</label>
              <textarea
                rows={6}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 outline-none resize-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                name="user_message"
                placeholder="Hello, I'd like to discuss..."
                required
              />
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
              Send Message
            </button>

            {success && (
              <span className="text-green-600 font-semibold text-center mt-2 bg-green-50 p-2 rounded">
                Message sent successfully!
              </span>
            )}
            {error && (
              <span className="text-red-600 font-semibold text-center mt-2 bg-red-50 p-2 rounded">
                Something went wrong!
              </span>
            )}
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
