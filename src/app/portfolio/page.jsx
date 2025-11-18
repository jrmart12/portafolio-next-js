"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    title: "Premium Meats Honduras",
    desc: "A modern, responsive e-commerce website built for a local premium butcher in La Ceiba, Honduras.",
    img: "/premium-meats.png",
    liveUrl: "https://premium-meats.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind", "Sanity", "Framer Motion"],
  },
  {
    id: 2,
    title: "New Perspective Cayman",
    desc: "New Perspective Cayman Website is made with Astro deployed in Netlify",
    img: "/new-perspective-cayman.png",
    liveUrl: "https://newperspectivecayman.com/",
    tech: ["Astro", "Netlify"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    desc: "This Website is made in Next.js and uses framer motion for effects",
    img: "/portfolio.png",
    slug: "https://jr-martinez.com/",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
  },
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen px-6 md:px-16 lg:px-28 py-12">
      <header className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">My Portfolio</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Selected work showcasing design, e-commerce platforms and performance-focused projects.</p>
      </header>

      <main className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <motion.article
            key={item.id}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/5 rounded-2xl backdrop-blur-lg p-6 border border-gray-800"
          >
            <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
              <Image src={item.img} alt={item.title} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-gray-300">{item.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tech?.map((t) => (
                  <span key={t} className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-6 gap-4">
                {item.slug && item.slug.startsWith("/portfolio") && (
                  <Link
                    href={item.slug}
                    className="text-sm bg-white text-black px-4 py-2 rounded-md font-semibold hover:brightness-95"
                  >
                    Details
                  </Link>
                )}

                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-white text-black px-4 py-2 rounded-md font-semibold hover:brightness-95"
                  >
                    View
                  </a>
                )}

                <div className="text-sm text-gray-400">
                  {item.liveUrl ? new URL(item.liveUrl).hostname : item.slug && item.slug.startsWith("/portfolio") ? "Project page" : ""}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </main>

      <footer className="max-w-5xl mx-auto text-center mt-20">
        <h3 className="text-2xl font-bold mb-2">Have a project?</h3>
        <p className="text-gray-400 mb-6">I help companies and startups build modern, fast interfaces and e-commerce platforms.</p>
        <Link href="/contact" className="inline-block bg-black text-white px-6 py-3 rounded-lg">
          Contact Me
        </Link>
      </footer>
    </div>
  );
};

export default PortfolioPage;