"use client";

import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import { Vercel } from '@lobehub/icons';

import Dialog1 from "../components/Dialoge";


const LINKS = [
  {
    title: "Turborepo",
    href: "https://turbo.build/repo",
    description: "High-performance build system for JavaScript and TypeScript.",
  },
  {
    title: "Next.js",
    href: "https://nextjs.org",
    description: "The React framework for production.",
  },
  {
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    description: "A utility-first CSS framework for rapid UI development.",
  },
  {
    title: "Shadcn UI",
    href: "https://shadcn.com",
    description: "Beautifully designed components for your projects.",
  },
  {
    title: "Express.js",
    href: "https://expressjs.com",
    description: "Fast, unopinionated, minimalist web framework for Node.js.",
  },
];

export default function Page() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/v1/testing");
        
        const data = await res.json();
        console.log(data.data.message);

        setData(data?.data?.message)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 
  return (
    <main className="flex flex-col items-center justify-between min-h-screen px-6 py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Header Section */}
      <header className="relative z-10 flex items-center justify-between w-full max-w-6xl py-4">
        <p className="px-6 py-3 text-sm font-semibold text-gray-200 border border-neutral-800 rounded-lg bg-gray-800/40 shadow-lg backdrop-blur-sm">
          Built with ❤️ by{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500">
            INDIAN
          </span>
        </p>


        <a
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-300 transition duration-300 rounded-lg bg-gray-800/40 hover:shadow-lg hover:bg-gray-700/40 backdrop-blur-sm"
          href="https://vercel.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Powered by
          <Vercel.Combine size={22} />
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center">
        {/* Animated Background */}
        <div className="absolute w-[620px] h-[620px] bg-gradient-to-r from-indigo-500/30 to-fuchsia-600/30 rounded-full animate-pulse blur-3xl"></div>

        {/* Logo Section */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-600 shadow-2xl shadow-indigo-500/40 animate-bounce">
            <span className="text-3xl font-bold text-white">🚀</span>
          </div>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500 drop-shadow-md">
            {data ? data : "Welcome to Turborepo Next.js Starter"}
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            A modern starter template for building scalable apps with{" "}
            <span className="text-indigo-400">Turborepo</span>,{" "}
            <span className="text-fuchsia-400">Next.js</span>,{" "}
            <span className="text-teal-400">Tailwind CSS</span>, and more.
          </p>
        </div>
      </section>

      {/* Links Section */}
      <section className="grid w-full max-w-5xl grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {LINKS.map(({ title, href, description }) => (
          <Card key={title} href={href} title={title}>
            {description}
          </Card>
        ))}
      </section>

      {/* Footer Section */}
      <footer className="mt-16 text-center text-gray-400">
        <p className="text-sm mb-6">
          Made with ❤️ by{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500">
           Priyanshu Tiwari
          </span>
          . Powered by{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500">
            Turborepo, Next.js, Tailwind CSS, Shadcn UI, and Express.js
          </span>
          .
        </p>
        <Dialog1 />
      </footer>
    </main>
  );
}