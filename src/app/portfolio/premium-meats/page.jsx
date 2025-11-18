"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PremiumMeatsPage = () => {
  return (
    <div className="min-h-screen px-6 md:px-16 lg:px-28 py-12">
      <header className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2">Premium Meats Honduras</h1>
          <div className="mt-2 text-sm">
            <Link href="/portfolio" className="text-gray-400 hover:text-white">← Back to Portfolio</Link>
          </div>
        <p className="text-gray-400">Una carnicería premium ubicada en La Ceiba, Honduras — sitio e-commerce moderno y totalmente responsivo.</p>
      </header>

      <main className="max-w-6xl mx-auto grid gap-10 grid-cols-1 lg:grid-cols-12 items-start">
        <section className="lg:col-span-7">
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/premium-meats.svg" alt="Premium Meats Honduras" fill className="object-cover" />
          </div>

          <div className="mt-8 prose prose-invert max-w-none">
            <p className="text-gray-300">A modern, fully responsive e-commerce website for Premium Meats Honduras, a premium butcher shop located in La Ceiba, Honduras. The platform provides a complete online presence with an integrated content management system for easy product and content updates.</p>
            <h2>About</h2>
            <p>
              Premium Meats Honduras es una carnicería que ofrece productos frescos y de alta calidad. El sitio web funciona como su escaparate digital y plataforma para mostrar productos, información de entregas y comunicación a través de WhatsApp.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>Modern Design - Clean, professional layout optimized for both desktop and mobile devices.</li>
              <li>Product Catalog - Comprehensive product listings organized by category (beef, pork, chicken, etc.).</li>
              <li>Content Management - Integrated Sanity CMS for easy content and product updates without coding.</li>
              <li>Delivery Information - Detailed delivery service section with ordering via WhatsApp.</li>
              <li>Fully Responsive - Seamless experience across all devices and screen sizes.</li>
              <li>SEO Optimized and Performance Optimized with Next.js image optimization.</li>
              <li>Animations - Smooth Framer Motion animations for enhanced user experience.</li>
            </ul>

            <h2>Tech Stack</h2>
            <p>Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, Sanity CMS, Node.js 20+</p>

            <h2>Pages</h2>
          </div>
        </section>

        <aside className="lg:col-span-5">
          <div className="sticky top-24">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-2xl font-semibold">Project Summary</h3>
              <p className="text-gray-300 mt-3">Plataforma e-commerce y administrable con Sanity para la carnicería Premium Meats Honduras. Diseño moderno, altamente optimizado y listo para producción.</p>

              <div className="mt-4">
                <h4 className="font-medium">Highlights</h4>
                <ul className="text-gray-300 list-disc list-inside mt-2">
                  <li>Fully responsive</li>
                  <li>Image optimization</li>
                  <li>WhatsApp ordering</li>
                </ul>
              </div>

                <div className="mt-6 flex gap-3">
                <Link href="/contact" className="bg-white text-black px-4 py-2 rounded-md font-semibold">Contact</Link>
                <a className="px-4 py-2 border border-gray-700 rounded-md text-gray-300 hover:border-white" href="https://premium-meats.vercel.app/" target="_blank" rel="noopener noreferrer">View Live</a>
              </div>
            </motion.div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default PremiumMeatsPage;
