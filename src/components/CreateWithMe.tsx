"use client";
import Image from "next/image";
import Link from "next/link";

export default function CreateWithMe() {
  return (
    <section className="relative w-screen h-screen min-h-screen overflow-hidden p-0 m-0">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dried-grasses-jp.jpg"
          alt="Dried Grasses Japan"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="filter"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-center z-10 bg-black/40 w-full h-full p-0 m-0">
        <div className="flex flex-col items-center justify-center w-full">
          <blockquote className="text-3xl sm:text-4xl font-semibold text-white drop-shadow-lg mb-8 max-w-2xl m-0">
            I don't work, I enjoy. That's the angle where I stand to see something beautiful.
          </blockquote>
          <Link
            href="/what-i-do"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#888888] via-[#C0C0C0] to-[#f8f8f8] text-white font-semibold text-lg shadow transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#f8f8f8] hover:via-[#C0C0C0] hover:to-[#888888] hover:text-[#7A7A7A] m-0"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
}
