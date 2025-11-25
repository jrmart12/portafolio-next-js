import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "../components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://jr-martinez.com";
const siteName = "Jose Martinez - Software Engineer Portfolio";
const siteDescription = "Full Stack Software Engineer specializing in React, Next.js, and modern web technologies. 4+ years of experience building scalable e-commerce platforms and fintech applications.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | Jose Martinez`
  },
  description: siteDescription,
  keywords: [
    "Jose Martinez",
    "Jose Rodolfo Martinez",
    "Software Engineer",
    "Front End Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Honduras Developer",
    "Web Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Portfolio"
  ],
  authors: [{ name: "Jose Rodolfo Martinez" }],
  creator: "Jose Rodolfo Martinez",
  publisher: "Jose Rodolfo Martinez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Jose Martinez - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you set up Google Search Console
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jose Rodolfo Martinez",
    alternateName: "Jose Martinez",
    url: siteUrl,
    image: `${siteUrl}/cartoon-rounded.png`,
    jobTitle: "Software Engineer",
    description: "Full Stack Software Engineer specializing in React, Next.js, and modern web technologies",
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Node.js",
      "Web Development",
      "Software Engineering"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Hello Iconic"
    },
    nationality: {
      "@type": "Country",
      name: "Honduras"
    },
    sameAs: [
      "https://github.com/jrmart12",
      "https://www.linkedin.com/in/jose-martinez-706253100/"
    ]
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
