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
    <div className="flex flex-col bg-black min-w-[320px] max-w-xs">
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        controls
        controlsList="nofullscreen nodownload noremoteplayback"
        disablePictureInPicture
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
  <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white max-w-full pt-[100px] sm:pt-[200px]">
      {/* Section 1: Development, Content, Design, Strategy */}
  <section className="flex flex-col sm:flex-row items-start">
    <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-18 pr-8">
      <a
        href="#development-section"
    className="text-1xl cursor-pointer hover:underline"
        onClick={e => {
          e.preventDefault();
          const target = document.getElementById('development-section');
          if (!target) return;
          const startY = window.scrollY;
          const endY = target.getBoundingClientRect().top + window.scrollY;
          const duration = 1200;
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
  className="text-1xl cursor-pointer hover:underline"
        onClick={e => {
          e.preventDefault();
          const target = document.getElementById('content-section');
          if (!target) return;
          const startY = window.scrollY;
          const endY = target.getBoundingClientRect().top + window.scrollY;
          const duration = 1200;
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
      <Image
        src="/images/HA.jpg"
        alt="Hera Logo"
        width={56}
        height={56}
        className="object-cover ml-4 border-1 border-white"
        priority
      />
      <a
        href="#design-section"
        className="text-1xl cursor-pointer hover:underline"
        onClick={e => {
          e.preventDefault();
          const target = document.getElementById('design-section');
          if (!target) return;
          const startY = window.scrollY;
          const endY = target.getBoundingClientRect().top + window.scrollY;
          const duration = 1200;
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
        className="text-1xl cursor-pointer hover:underline"
        onClick={e => {
          e.preventDefault();
          const target = document.getElementById('strategy-section');
          if (!target) return;
          const startY = window.scrollY;
          const endY = target.getBoundingClientRect().top + window.scrollY;
          const duration = 1200;
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
    </div>
  </section>
  {/* Section 2: Mail icon, quote, Instagram icon */}
  <section className="w-full flex flex-col sm:flex-row items-center justify-center gap-12 py-8 sm:py-12">
        <span className="block w-10 h-10 mr-8 sm:w-12 sm:h-12 relative">
          <LazyImage
            src="/icons/mail.svg"
            alt="Mail Icon"
            className="object-contain w-full h-full"
            width={32}
            height={32}
          />
        </span>
      <LazyText as="span" className="text-lg sm:text-3xl font-large text-center max-w-3xl pl-2 pr-6">
                &quot;I am Hera &ndash; A Multimedia Developer passionate about blending content, design, and technology to create meaningful digital experiences.&quot;
        </LazyText>
        <span className="block w-10 h-10 mr-8 sm:w-12 sm:h-12 relative">
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
      <section id="development-section" className="w-full flex flex-col items-center justify-center py-24 pr-4">
      <LazyText as="h2" className="text-2xl sm:text-5xl font-bold mb-8 text-center py-4">HTML, CSS, JavaScript, Next.js, React and more
      </LazyText>
      <div className="sm:grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Handcrafted Haven */}
       <div className="flex flex-col items-center bg-white m-4">
          <LazyImage src="/images/handcrafted.JPG" alt="Handcrafted Haven" width={600} height={340} className="mb-6 object-cover w-full h-72" />
          <LazyText
            as="h3"
            className="text-xl sm:text-3xl font-semibold mb-2 bg-black text-white p-4"
            style={{ backgroundColor: '#272727ff', color: '#fff', display: 'inline-block'}}
          >
            Handcrafted Haven
          </LazyText>
          <a href="https://hancraftedhaven.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline p-4">Know More</a>
        </div>
          {/* GRANDYA */}
          <div className="flex flex-col items-center bg-white m-4">
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
          <div className="col-span-2 w-full h-px bg-white hidden sm:block my-2"></div>
          {/* FOYO */}
          <div className="flex flex-col items-center bg-white m-4">
            <LazyImage src="/images/foyo.JPG" alt="FOYO" width={600} height={340} className="mb-6 object-cover w-full h-72" />
            <LazyText
              as="h3"
              className="text-xl font-semibold sm:text-3xl mb-2 bg-black text-white p-4"
              style={{ backgroundColor: '#272727ff', color: '#fff', display: 'inline-block' }}
            >
              FOYO
            </LazyText>
            <a href="https://www.foyo.world" target="_blank" rel="noopener noreferrer" className="text-black hover:underline p-4">Know More</a>
          </div>
          {/* Samurai */}
          <div className="flex flex-col items-center bg-white m-4">
            <LazyImage src="/images/samurai-kh.jpg" alt="Samurai" width={600} height={340} className="mb-6 object-cover w-full h-72" />
            <LazyText
              as="h3"
              className="text-xl font-semibold sm:text-3xl mb-2 bg-black text-white p-4"
              style={{ backgroundColor: '#272727ff', color: '#fff', display: 'inline-block' }}
            >
              Samurai
            </LazyText>
            <a href="https://www.samurai.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline p-4">Know More</a>
          </div>
          {/* White line after second row */}
          <div className="col-span-2 w-full h-px bg-white hidden sm:block my-2"></div>
          {/* Yume Kirako */}
          <div className="flex flex-col items-center bg-white m-4">
            <LazyImage src="/images/yumekirako.jpg" alt="Yume Kirako" width={600} height={340} className="mb-6 object-cover w-full h-72" />
            <LazyText
              as="h3"
              className="text-xl font-semibold sm:text-3xl mb-2 bg-black text-white p-4"
              style={{ backgroundColor: '#272727ff', color: '#fff', display: 'inline-block' }}
            >
              Yume Kirako
            </LazyText>
            <a href="https://www.yumekirako.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline p-4">Know More</a>
          </div>
          {/* La Brise - now inside the grid and styled the same as others */}
          <div className="flex flex-col items-center bg-white m-4">
            <LazyImage src="/images/labrise.jpg" alt="La Brise" width={600} height={340} className="mb-6 object-cover w-full h-72" />
            <LazyText
              as="h3"
              className="text-xl font-semibold sm:text-3xl mb-2 bg-black text-white p-4"
              style={{ backgroundColor: '#272727ff', color: '#fff', display: 'inline-block' }}
            >
              La Brise
            </LazyText>
            <a href="https://www.labrise.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline p-4">Know More</a>
          </div>
      </div> 
      {/* Close grid container for Development section */}
      {/* Social Media Content, Photogiraphy, Blog, Infographic and more */}
      <LazyText as="h3" className="text-xl sm:text-3xl font-semibold mb-2 bg-black text-white p-4 mt-8 text-center">
        Social Media Content, Photography, Blog, Infographic and more
      </LazyText>
      {/* Manual horizontal scrollable slider (drag/scroll, scrollbar hidden) */}
      <div id="content-section" className="w-full overflow-x-auto relative text-black scrollbar-hide p-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style>{`
            .scrollbar-hide::-webkit-scrollbar { display: none; }
          `}</style>
          <div className="flex gap-8 py-2 min-w-fit">
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
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40 pt-16 pl-4 pr-12">
            <LazyText as="h1" className="text-3xl sm:text-5xl text-white text-center drop-shadow-lg mb-4 pl-4 pr-12">
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
        {/* Design Section */}
        <section id="design-section" className="w-full flex flex-col items-center justify-center py-24 pr-4">
          <LazyText as="h2" className="text-2xl sm:text-5xl font-bold mb-8 text-center py-4">
            Front-End, UI/UX, Motion Graphics, Brand Identity, Social Media Design and more
          </LazyText>
          {/* Responsive Image Grid: 2 columns, classic .row/.column style */}
          <div className="row flex flex-wrap w-full max-w-6xl px-1">
            <div className="column flex flex-col w-1/2 max-w-1/2 px-1">
              <LazyImage src="/images/herancat.jpg" alt="Design 1" width={1200} height={800} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
              <LazyImage src="/images/foyo.JPG" alt="Design 2" width={800} height={1200} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
              <LazyImage src="/images/businesscard.JPG" alt="Design 3" width={1200} height={800} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
              <LazyImage src="/images/grandya.JPG" alt="Design 4" width={800} height={1200} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
              <LazyImage src="/images/samurai-kh.jpg" alt="Design 5" width={1200} height={800} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
              <LazyImage src="/images/ireland.jpg" alt="Design 6" width={800} height={1200} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
            </div>
            <div className="column flex flex-col w-1/2 max-w-1/2 px-1">
              <LazyImage src="/images/prints.png" alt="Design 7" width={800} height={1200} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
              <LazyImage src="/images/matsuri.jpg" alt="Design 8" width={1200} height={800} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
              <LazyImage src="/images/lvdining7.jpg" alt="Design 9" width={800} height={1200} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
              <LazyImage src="/images/karatsu.jpg" alt="Design 10" width={1200} height={800} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
              <LazyImage src="/images/poster.jpg" alt="Design 11" width={800} height={1200} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
              <LazyImage src="/images/bicycle.jpg" alt="Design 12" width={1200} height={800} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
            </div>
            <style>{`
              @media (max-width: 800px) {
                .column { flex: 50%; max-width: 50%; }
              }
              @media (max-width: 600px) {
                .column { flex: 100%; max-width: 100%; }
              }
              .column img, .column .w-full { margin-top: 8px; vertical-align: middle; width: 100%; }
              .row { padding: 0 4px; }
              .column { padding: 0 4px; }
            `}</style>
          </div>
          
        </section>

    </main>
  );
}
