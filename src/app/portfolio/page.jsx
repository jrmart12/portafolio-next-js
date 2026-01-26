"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    title: "Premium Meats Honduras",
    desc: "A modern, responsive e-commerce platform built for a premium butcher shop in La Ceiba, Honduras. Features real-time inventory management with Sanity CMS, seamless shopping experience, and bilingual support.",
    img: "/premium-meats.png",
    liveUrl: "https://premium-meats.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind", "Sanity", "Framer Motion"],
    highlights: "E-commerce • CMS Integration • Mobile-First",
  },
  {
    id: 2,
    title: "New Perspective Cayman",
    desc: "High-performance marketing website for a Cayman Islands business, built with Astro for optimal speed and SEO. Static generated for blazing-fast load times and superior user experience.",
    img: "/new-perspective-cayman.png",
    liveUrl: "https://newperspectivecayman.com/",
    tech: ["Astro", "Netlify"],
    highlights: "Static Site • SEO Optimized • Ultra-Fast",
  },
  {
    id: 3,
    title: "House Kitchen",
    desc: "Full-featured restaurant website with online ordering system. Built with Next.js App Router, users can browse menu, customize orders, and complete purchases via WhatsApp integration for payment and delivery coordination.",
    img: "/house-kitchen.png",
    liveUrl: "https://housekitchenhn.com/",
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    highlights: "Online Ordering • WhatsApp Integration • Real-time",
  },
  {
    id: 4,
    title: "Baby Heaven Honduras",
    desc: "A modern, responsive e-commerce platform built for a baby shop in Honduras. Features real-time inventory management with Sanity CMS, seamless shopping experience, and bilingual support.",
    img: "/babyheaven.png",
    liveUrl: "https://babyheavenhn.com/",
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel", "Sanity"],
    highlights: "E-commerce • CMS Integration • Mobile-First",
  },
  {
    id: 5,
    title: "Nayos Burger",
    desc: "Full-featured restaurant website with online ordering system. Built with Next.js App Router, users can browse menu, customize orders, and complete purchases via WhatsApp integration for payment and delivery coordination.",
    img: "/nayos.png",
    slug: "https://nayosburger.com/",
    tech: ["Next.js", "Tailwind", "Vercel"],
    highlights: "Online Ordering • WhatsApp Integration • Real-time",
  },

];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen px-6 md:px-16 lg:px-28 py-12">
      <header className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Portfolio
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Featured projects showcasing modern web development, e-commerce platforms, and performance-focused solutions.
        </p>
      </header>

      <main className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.liveUrl || (item.slug && item.slug.startsWith("/portfolio") ? item.slug : "#")}
            target={item.liveUrl ? "_blank" : undefined}
            rel={item.liveUrl ? "noopener noreferrer" : undefined}
            className="block"
          >
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/5 rounded-2xl backdrop-blur-lg p-6 border border-gray-800 hover:border-purple-500 h-full cursor-pointer transition-colors group"
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 bg-gray-100">
                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold group-hover:text-purple-600 transition-colors">{item.title}</h2>
                {item.highlights && (
                  <p className="text-sm text-purple-600 font-medium">{item.highlights}</p>
                )}
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tech?.map((t) => (
                    <span key={t} className="bg-gradient-to-r from-gray-800 to-gray-700 px-3 py-1 rounded-full text-xs text-gray-200 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-6 gap-4">
                  <div className="text-sm text-gray-500">
                    {item.liveUrl ? new URL(item.liveUrl).hostname : item.slug && item.slug.startsWith("/portfolio") ? "Project page" : ""}
                  </div>
                  <div className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md font-semibold">
                    {item.slug && item.slug.startsWith("/portfolio") ? "Details" : "View Live"}
                  </div>
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </main>

      <footer className="max-w-5xl mx-auto text-center mt-20 py-12 border-t border-gray-300">
        <h3 className="text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </span>
        </h3>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          I help companies and startups build modern, fast, and scalable web applications.
          From e-commerce platforms to fintech solutions, let&apos;s create something amazing.
        </p>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Get In Touch
          </motion.button>
        </Link>
      </footer>
    </div>
  );
};

export default PortfolioPage;