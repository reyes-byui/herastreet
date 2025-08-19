

"use client";
import React from "react";
import Image from "next/image";
import LazyImage from "../../components/LazyImage";
import LazyText from "../../components/LazyText";
import "../../styles/contentScroll.css";

// ContentPlate component for slider
type ContentPlateProps = {
  video: string;
  title: string;
  desc: string;
  link: string;
};
function ContentPlate({ video, title, desc, link }: ContentPlateProps) {
  return (
    <div className="flex flex-col bg-black p-8 min-w-[320px] max-w-xs mx-2">
      <video
        src={video}
        autoPlay
        loop
        muted
        className="w-full h-40 object-cover mb-3 shadow bg-black"
        poster="/images/video-poster.jpg"
      >
        Your browser does not support the video tag.
      </video>
      <LazyText as="h3" className="text-white text-2xl font-bold mb-1 text-left">{title}</LazyText>
      <p className="text-white text-sm mb-2 text-left">{desc}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#d1cbcb] hover:underline text-sm text-left font-semibold"
      >
        See More
      </a>
    </div>
  );
}

export default function WhatIDoPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-black p-0 m-0 text-white">
      {/* Section 1: Development, Content, Design, Strategy */}
      <section className="w-full flex flex-row items-center justify-center gap-18 py-16 pt-30">
        <a
          href="#development-section"
          className="text-1xl sm:text-1xl cursor-pointer hover:underline"
          onClick={e => {
            e.preventDefault();
            const target = document.getElementById('development-section');
            if (!target) return;
            // Custom slow scroll
            const startY = window.scrollY;
            const endY = target.getBoundingClientRect().top + window.scrollY;
            const duration = 1200; // ms
            const startTime = performance.now();
            function scrollStep(now: number) {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const ease = progress < 0.5
                ? 2 * progress * progress
                : -1 + (4 - 2 * progress) * progress;
              window.scrollTo(0, startY + (endY - startY) * ease);
              if (progress < 1) {
                requestAnimationFrame(scrollStep);
              }
            }
            requestAnimationFrame(scrollStep);
          }}
        >
          Development
        </a>
        <a
          href="#content-section"
          className="text-1xl sm:text-1xl cursor-pointer hover:underline"
          onClick={e => {
            e.preventDefault();
            const target = document.getElementById('content-section');
            if (!target) return;
            // Custom slow scroll
            const startY = window.scrollY;
            const endY = target.getBoundingClientRect().top + window.scrollY;
            const duration = 1200; // ms
            const startTime = performance.now();
            function scrollStep(now: number) {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const ease = progress < 0.5
                ? 2 * progress * progress
                : -1 + (4 - 2 * progress) * progress;
              window.scrollTo(0, startY + (endY - startY) * ease);
              if (progress < 1) {
                requestAnimationFrame(scrollStep);
              }
            }
            requestAnimationFrame(scrollStep);
          }}
        >
          Content
        </a>

        <span className="block w-16 h-16 sm:w-16 sm:h-16 relative">
          <LazyImage
            src="/images/HA.jpg"
            alt="Hera Logo"
            className="object-cover w-full h-full"
            width={32}
            height={32}
          />
        </span>
        <a
          href="#design-section"
          className="text-1xl sm:text-1xl cursor-pointer hover:underline"
          onClick={e => {
            e.preventDefault();
            const target = document.getElementById('design-section');
            if (!target) return;
            // Custom slow scroll
            const startY = window.scrollY;
            const endY = target.getBoundingClientRect().top + window.scrollY;
            const duration = 1200; // ms
            const startTime = performance.now();
            function scrollStep(now: number) {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const ease = progress < 0.5
                ? 2 * progress * progress
                : -1 + (4 - 2 * progress) * progress;
              window.scrollTo(0, startY + (endY - startY) * ease);
              if (progress < 1) {
                requestAnimationFrame(scrollStep);
              }
            }
            requestAnimationFrame(scrollStep);
          }}
        >
          Design
        </a>
        <a
          href="#strategy-section"
          className="text-1xl sm:text-1xl cursor-pointer hover:underline"
          onClick={e => {
            e.preventDefault();
            const target = document.getElementById('strategy-section');
            if (!target) return;
            // Custom slow scroll
            const startY = window.scrollY;
            const endY = target.getBoundingClientRect().top + window.scrollY;
            const duration = 1200; // ms
            const startTime = performance.now();
            function scrollStep(now: number) {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const ease = progress < 0.5
                ? 2 * progress * progress
                : -1 + (4 - 2 * progress) * progress;
              window.scrollTo(0, startY + (endY - startY) * ease);
              if (progress < 1) {
                requestAnimationFrame(scrollStep);
              }
            }
            requestAnimationFrame(scrollStep);
          }}
        >
          Strategy
        </a>
      </section>
      {/* Section 2: Mail icon, quote, Instagram icon */}
      <section className="w-full flex flex-row items-center justify-center gap-20 py-12">
        <span className="block w-10 h-10 sm:w-12 sm:h-12 relative">
          <LazyImage
            src="/icons/mail.svg"
            alt="Mail Icon"
            className="object-contain w-full h-full"
            width={32}
            height={32}
          />
        </span>
        <LazyText as="span" className="text-lg sm:text-3xl font-large text-center max-w-xl">
          &quot;I am Hera &ndash; A Multimedia Developer passionate about blending content, design, and technology to create meaningful digital experiences.&quot;
        </LazyText>
        <span className="block w-10 h-10 sm:w-12 sm:h-12 relative">
          <LazyImage
            src="/icons/ig.svg"
            alt="Instagram Icon"
            className="object-contain w-full h-full"
            width={32}
            height={32}
          />
        </span>
      </section>
      {/* Development Section (scroll target) */}
      <section id="development-section" className="w-full flex flex-col items-center justify-center py-24">
  <LazyText as="h2" className="text-2xl sm:text-5xl font-bold mb-8 text-center">HTML, CSS, JavaScript, Next.js, React and more</LazyText>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Handcrafted Haven */}
        <div className="flex flex-col items-center p-8 bg-white">
          <LazyImage src="/images/handcrafted.JPG" alt="Handcrafted Haven" width={600} height={340} className="mb-6 object-cover w-full h-72" />
          <LazyText
            as="h3"
            className="text-xl sm:text-3xl font-semibold mb-2 bg-black text-white px-4 py-2"
            style={{ backgroundColor: '#272727ff', color: '#fff', display: 'inline-block'}}
          >
            Handcrafted Haven
          </LazyText>
          <a href="https://hancraftedhaven.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Know More</a>
        </div>
        {/* GRANDYA */}
        <div className="flex flex-col items-center p-8 bg-white">
          <LazyImage src="/images/grandya.JPG" alt="GRANDYA" width={600} height={340} className="mb-6 object-cover w-full h-72" />
          <LazyText
            as="h3"
            className="text-xl font-semibold sm:text-3xl mb-2 bg-black text-white px-4 py-2"
            style={{ backgroundColor: '#272727ff', color: '#fff', display: 'inline-block' }}
          >
            GRANDYA
          </LazyText>
          <a href="https://www.grandyacoffee.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Know More</a>
        </div>
        {/* White line after first row */}
        <div className="col-span-2 w-full h-px bg-white my-2"></div>
        {/* FOYO */}
        <div className="flex flex-col items-center p-8 bg-white">
          <LazyImage src="/images/foyo.JPG" alt="FOYO" width={600} height={340} className="mb-6 object-cover w-full h-72" />
          <LazyText
            as="h3"
            className="text-xl font-semibold sm:text-3xl mb-2 bg-black text-white px-4 py-2"
            style={{ backgroundColor: '#272727ff', color: '#fff', display: 'inline-block' }}
          >
            FOYO
          </LazyText>
          <a href="https://www.foyo.world" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Know More</a>
        </div>
        {/* Samurai */}
        <div className="flex flex-col items-center p-8 bg-white">
          <LazyImage src="/images/samurai-kh.jpg" alt="Samurai" width={600} height={340} className="mb-6 object-cover w-full h-72" />
          <LazyText
            as="h3"
            className="text-xl font-semibold sm:text-3xl mb-2 bg-black text-white px-4 py-2"
            style={{ backgroundColor: '#272727ff', color: '#fff', display: 'inline-block' }}
          >
            Samurai
          </LazyText>
          <a href="https://www.samurai.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Know More</a>
        </div>
        {/* White line after second row */}
        <div className="col-span-2 w-full h-px bg-white my-2"></div>
        {/* Yume Kirako */}
        <div className="flex flex-col items-center p-8 bg-white">
          <LazyImage src="/images/yumekirako.jpg" alt="Yume Kirako" width={600} height={340} className="mb-6 object-cover w-full h-72" />
          <LazyText
            as="h3"
            className="text-xl font-semibold sm:text-3xl mb-2 bg-black text-white px-4 py-2"
            style={{ backgroundColor: '#272727ff', color: '#fff', display: 'inline-block' }}
          >
            Yume Kirako
          </LazyText>
          <a href="https://www.yumekirako.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Know More</a>
        </div>
        {/* La Brise */}
        <div className="flex flex-col items-center p-8 bg-white">
          <LazyImage src="/images/labrise.jpg" alt="La Brise" width={600} height={340} className="mb-6 object-cover w-full h-72" />
          <LazyText
            as="h3"
            className="text-xl font-semibold sm:text-3xl mb-2 bg-black text-white px-4 py-2"
            style={{ backgroundColor: '#272727ff', color: '#fff', display: 'inline-block' }}
          >
            La Brise
          </LazyText>
          <a href="https://www.labrise.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Know More</a>
        </div>
        </div>
      </section>

      {/* Content Section (scroll target, now at very bottom) */}
      <section id="content-section" className="w-full flex flex-col items-center justify-center px-8 py-24 bg-[#2e2e2e] mt-16">
        <LazyText as="h2" className="text-2xl sm:text-4xl text-white font-bold mb-8 text-center">
          Social Media Content, Photography, Blog, Infographic and more
        </LazyText>
        {/* Manual horizontal scrollable slider (drag/scroll, scrollbar hidden) */}
        <div className="w-full overflow-x-auto relative text-black scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`
            .scrollbar-hide::-webkit-scrollbar { display: none; }
          `}</style>
          <div className="flex gap-8 px-2 py-2 min-w-fit">
            <ContentPlate
              video="/videos/travel.mp4"
              title="Photography"
              desc="Capturing moments and stories through the lens."
              link="/content/photography"
            />
            <ContentPlate
              video="/videos/sunrise72.mp4"
              title="Social Media"
              desc="Engaging, creative, and strategic content for all platforms."
              link="/content/social-media"
            />
            <ContentPlate
              video="/videos/ireland72.mp4"
              title="Blog"
              desc="Inspiring articles and stories to inform and entertain."
              link="/content/blog"
            />
            <ContentPlate
              video="/videos/firewoods.mp4"
              title="Infographic"
              desc="Visual data and information, beautifully designed."
              link="/content/infographic"
            />
            <ContentPlate
              video="/videos/wolf.mp4"
              title="Video Editing"
              desc="Dynamic edits that bring your footage to life."
              link="/content/video-editing"
            />
            <ContentPlate
              video="/videos/waterfalls.mp4"
              title="Content Writing"
              desc="Words that connect, persuade, and inspire."
              link="/content/content-writing"
            />
          </div>
        </div>
      </section>

      {/* Hero Section at the bottom */}
        <section className="relative w-full h-[100vh] flex items-center justify-center">
          <Image
            src="/images/workout.jpg"
            alt="Hero Workout"
            fill
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ objectPosition: 'center 20%' }}
            priority
            sizes="100vw"
          />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40 pt-16">
            <LazyText as="h1" className="text-3xl sm:text-5xl text-white text-center drop-shadow-lg mb-4">
                Ready to create something<br />amazing together?
            </LazyText>
            <a
              href="/contact"
              className="mt-4 px-8 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition"
            >
              Contact Me
            </a>
          </div>
        </section>
    </main>
  );
}
