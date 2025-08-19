"use client";
import Image from "next/image";
import Link from "next/link";
import LazyText from "./LazyText";
import { useEffect, useState } from "react";

export default function ExploreParallax() {
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setParallax(Math.min(scrolled * 0.4, 200));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-screen h-screen min-h-screen overflow-hidden p-0 m-0">
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `scale(1.12) translateY(${parallax}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <Image
          src="/images/train.jpg"
          alt="Somewhere in Dainyu"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="filter"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-center z-10 bg-black/40 w-full h-full p-0 m-0">
        <div className="flex flex-col items-center justify-center w-full">
          <LazyText as="h1" className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-white drop-shadow-lg">
            Create with Me.
          </LazyText>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl drop-shadow">
            I don&apos;t work, I enjoy. That&apos;s the angle where I stand to see something beautiful.
          </p>
          <Link
            href="/what-i-do"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#888888] via-[#C0C0C0] to-[#f8f8f8] text-white font-semibold text-lg shadow transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#f8f8f8] hover:via-[#C0C0C0] hover:to-[#888888] hover:text-[#7A7A7A]"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
}
