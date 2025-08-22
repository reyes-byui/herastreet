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
    <div className="flex flex-col bg-black min-w-[320px] max-w-md">
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        controls
        controlsList="nofullscreen nodownload noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-64 sm:h-80 object-cover mb-3 shadow bg-black"
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
  <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white max-w-full pt-[100px] sm:pt-[200px] pl-2 pr-8">
      {/* Section 1: Development, Content, Design, Strategy */}
  <section className="flex flex-col sm:flex-row items-start">
    <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-18">
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
      <a href="#content-section" className="text-1xl cursor-pointer hover:underline"
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
        className="object-cover border-1 border-white"
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
        href="#workwithme-section"
        className="text-1xl cursor-pointer hover:underline"
        onClick={e => {
          e.preventDefault();
          const target = document.getElementById('workwithme-section');
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
        Work With Me
      </a>
    </div>
  </section>
  {/* Section 2: Mail icon, quote, Instagram icon */}
  <section className="w-full flex flex-col sm:flex-row items-center justify-center gap-12 py-8 sm:py-12">
        <span className="block w-10 h-10 sm:w-12 sm:h-12 relative">
          <LazyImage
            src="/icons/mail.svg"
            alt="Mail Icon"
            className="object-contain w-full h-full"
            width={32}
            height={32}
          />
        </span>
      <LazyText as="span" className="text-lg sm:text-3xl font-large text-center max-w-3xl px-4">
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
      <section id="development-section" className="w-full flex flex-col items-center justify-center py-24 pl-2 pr-4">
      <LazyText as="h2" className="text-2xl sm:text-4xl font-bold text-center my-8 sm:px-32 py-4">HTML, CSS, JavaScript, Next.js, React and more
      </LazyText>
      <div className="w-25 h-1 font-bold bg-white mb-10"></div>
      <div className="sm:grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Handcrafted Haven */}
       <div className="flex flex-col items-stretched m-4">
          <LazyImage src="/images/handcrafted.JPG" alt="Handcrafted Haven" width={600} height={340} className="mb-6 object-cover w-full h-72" />
          <div className="w-5 h-1 bg-white my-5"></div>
          <LazyText
            as="h3"
            className="text-xl sm:text-3xl font-semibold text-white p-0"
          >
            Handcrafted Haven
          </LazyText>
          <a href="https://hancraftedhaven.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline pb-4">Know More</a>
        </div>
          {/* GRANDYA */}
          <div className="flex flex-col items-stretched m-4">
            <LazyImage src="/images/grandya.JPG" alt="GRANDYA" width={600} height={340} className="mb-6 object-cover w-full h-72" />
            <div className="w-5 h-1 bg-white my-5"></div>
            <LazyText
              as="h3"
              className="text-xl font-semibold sm:text-3xl text-white"
            >
              GRANDYA COFFEE
            </LazyText>
            <a href="https://www.grandyacoffee.com" target="_blank" rel="noopener noreferrer" className="text-white  lack hover:underline  pb-4">Know More</a>
          </div>
          {/* FOYO */}
          <div className="flex flex-col items-stretched m-4">
            <LazyImage src="/images/foyo.JPG" alt="FOYO" width={600} height={340} className="mb-6 object-cover w-full h-72" />
            <div className="w-5 h-1 bg-white my-5"></div>
            <LazyText
              as="h3"
              className="text-xl font-semibold sm:text-3xl text-white"
            >
              FOYO
            </LazyText>
            <a href="https://www.foyo.world" target="_blank" rel="noopener noreferrer" className="text-white hover:underline  pb-4">Know More</a>
          </div>
          {/* Samurai */}
          <div className="flex flex-col items-stretched m-4">
            <LazyImage src="/images/samurai-kh.jpg" alt="Samurai" width={600} height={340} className="mb-6 object-cover w-full h-72" />
            <div className="w-5 h-1 bg-white my-5"></div>
            <LazyText
              as="h3"
              className="text-xl font-semibold sm:text-3xl text-white"
            >
              Samurai
            </LazyText>
            <a href="https://www.samurai.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline  pb-4">Know More</a>
          </div>
          {/* Yume Kirako */}
          <div className="flex flex-col items-stretched m-4">
            <LazyImage src="/images/yumekirako.jpg" alt="Yume Kirako" width={600} height={340} className="mb-6 object-cover w-full h-72" />
            <div className="w-5 h-1 bg-white my-5"></div>
            <LazyText
              as="h3"
              className="text-xl font-semibold sm:text-3xl mb-2 bg-black text-white"
            >
              Yume Kirako
            </LazyText>
            <a href="https://www.yumekirako.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline  pb-4">Know More</a>
          </div>
          {/* La Brise - now inside the grid and styled the same as others */}
          <div className="flex flex-col items-stretched m-4">
            <LazyImage src="/images/labrise.jpg" alt="La Brise" width={600} height={340} className="mb-6 object-cover w-full h-72" />
            <div className="w-5 h-1 bg-white my-5"></div>
            <LazyText
              as="h3"
              className="text-xl font-semibold sm:text-3xl text-white"
            >
              La Brise
            </LazyText>
            <a href="https://www.labrise.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline  pb-4">Know More</a>
          </div>
      </div> 
      {/* Close grid container for Development section */}
      {/* Social Media Content, Photogiraphy, Blog, Infographic and more */}
      <LazyText as="h3" className="text-xl sm:text-3xl font-semibold bg-black text-white my-8 px-8 sm:px-32 py-4 text-center">
        Social Media Content, Photography, Blog, Infographic and more
      </LazyText>
      <div className="w-25 h-1 font-bold bg-white mb-10"></div>
      {/* Manual horizontal scrollable slider (drag/scroll, scrollbar hidden) */}
      <div id="content-section" className="w-full overflow-x-auto relative text-black scrollbar-hide px-26 py-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40 pt-16 pl-8 pr-4">
            <LazyText as="h1" className="text-2xl sm:text-5xl text-white text-center drop-shadow-lg mb-4">
                Ready to create something amazing<br />for your brand?
            </LazyText>
            <a
              href="/contact"
              className="mt-4 px-8 py-3 bg-white text-black font-semibold rounded-full bg-gradient-to-r from-[#888888] via-[#C0C0C0] to-[#f8f8f8] text-white font-semibold text-lg shadow transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#f8f8f8] hover:via-[#C0C0C0] hover:to-[#888888] hover:text-[#7A7A7A]"
            >
              Contact Me
            </a>
          </div>
        </section>
        {/* Design Section */}
        <section id="design-section" className="w-full flex flex-col items-center justify-center py-24 px-8">
          <LazyText as="h2" className="text-2xl sm:text-3xl font-bold mb-8 text-center py-4">
            Front-End, UI/UX, Motion Graphics, Brand Identity, Social Media Design and more
          </LazyText>
          <div className="w-25 h-1 font-bold bg-white mb-10"></div>
          {/* Responsive Image Grid: 2 columns, classic .row/.column style */}
          <div className="row flex flex-wrap w-full max-w-6xl px-1">
            <div className="column flex flex-col w-1/2 max-w-1/2 px-1">
              <LazyImage src="/images/herancat.jpg" alt="Design 1" width={1200} height={800} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
              <LazyImage src="/images/flyer.jpg" alt="Design 2" width={800} height={1200} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
              <LazyImage src="/images/businesscard.JPG" alt="Design 3" width={1200} height={800} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
              <LazyImage src="/images/grandya.JPG" alt="Design 4" width={800} height={1200} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
              <LazyImage src="/images/samurai-kh.jpg" alt="Design 5" width={1200} height={800} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
              <LazyImage src="/images/foyo.jpg" alt="Design 6" width={800} height={1200} className="w-full h-auto mt-2" onContextMenu={e => e.preventDefault()} />
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
              /* Removed 600px media query so columns always stay at 50% width */
              .column img, .column .w-full { margin-top: 8px; vertical-align: middle; width: 100%; }
              .row { padding: 0 4px; }
              .column { padding: 0 4px; }
            `}</style>
          </div>
        </section>
        {/* work with me */}
        <section id="workwithme-section" className="w-full flex flex-col justify-center px-8 py-4 sm:py-8 ">
          <LazyText as="h2" className="text-2xl sm:text-3xl mb-8 text-left px-2 py-4">
              • WHAT I CAN DO FOR YOU
         </LazyText>
         {/* work with me */}
        <div className="col-span-2 w-full h-px bg-white block m-2"></div>
        <section className="w-full flex flex-col items-center justify-center py-12 px-2">
          <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
            {/* CREATIVE */}
            <div className="flex-1 bg-black/80 p-6 rounded-lg flex flex-col items-start">
              <LazyText as="h4" className="text-xl font-bold mb-3 text-white tracking-widest text-left w-full">CREATIVE</LazyText>
              {/* add a white divider */}
              <div className="w-5 h-1 bg-white my-5"></div>
              <ul className="text-white text-base space-y-2 text-left w-full">
                <li>Digital UI/UX</li>
                <li>Web Design + Build</li>
                <li>Digital Illustration</li>
                <li>Motion Graphics</li>
              </ul>
            </div>
            {/* BRAND */}
            <div className="flex-1 bg-black/80 p-6 rounded-lg flex flex-col items-start">
              <LazyText as="h4" className="text-xl font-bold mb-3 text-white tracking-widest text-left w-full">BRAND</LazyText>
              <div className="w-5 h-1 bg-white my-5"></div>
              <ul className="text-white text-base space-y-2 text-left w-full">
                <li>Brand Strategy</li>
                <li>Brand Positioning</li>
                <li>Brand Storytelling</li>
                <li>Brand Identity</li>
              </ul>
            </div>
            {/* CONTENT */}
            <div className="flex-1 bg-black/80 p-6 rounded-lg flex flex-col items-start">
              <LazyText as="h4" className="text-xl font-bold mb-3 text-white tracking-widest text-left w-full">CONTENT</LazyText>
              <div className="w-5 h-1 bg-white my-5"></div>
              <ul className="text-white text-base space-y-2 text-left w-full">
                <li>Photography</li>
                <li>Video + Editing</li>
                <li>Social Assets</li>
                <li>Content Writing</li>
              </ul>
            </div>
            {/* ADVERTISING */}
            <div className="flex-1 bg-black/80 p-6 rounded-lg flex flex-col items-start">
              <LazyText as="h4" className="text-xl font-bold mb-3 text-white tracking-widest text-left w-full">ADVERTISING</LazyText>
              <div className="w-5 h-1 bg-white my-5"></div>
              <ul className="text-white text-base space-y-2 text-left w-full">
                <li>Social Media Management</li>
                <li>Ad Strategy & Planning</li>
                <li>SEO</li>
                <li>Analytics</li>
              </ul>
            </div>
          </div>
        </section>
        </section>
        {/* clients & collaborators */}
        <section className="w-full flex flex-col justify-center py-8 sm:py-12 px-8">
        <LazyText as="h2" className="text-2xl sm:text-3xl mb-8 text-left px-2 py-4">
            • WHO I&apos;VE WORKED WITH
        </LazyText>
        <div className="col-span-2 w-full h-px bg-white block m-2 mb-12"></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full max-w-3xl mx-auto items-center justify-items-center">
        <a href="https://foyo.world" target="_blank" rel="noopener noreferrer">  
          <LazyImage src="/icons/foyo.png" alt="Foyo" width={120} height={120} className="mx-auto filter grayscale brightness-150" />
        </a>
        <a href="https://grandlavogue.com" target="_blank" rel="noopener noreferrer">
          <LazyImage src="/icons/glv.png" alt="GLV" width={120} height={120} className="mx-auto filter grayscale brightness-250"  />
        </a>
        <a href="https://grandyacoffee.com" target="_blank" rel="noopener noreferrer">
          <LazyImage src="/icons/grandya.png" alt="Grandya" width={120} height={120} className="mx-auto filter grayscale brightness-150" />
        </a>
        <a href="https://labrise-cambodia.github.io/lodging/" target="_blank" rel="noopener noreferrer">
          <LazyImage src="/icons/labrise.png" alt="La Brise" width={120} height={120} className="mx-auto filter grayscale brightness-250" />
        </a>
        <a href="https://lavoguehotel.com/" target="_blank" rel="noopener noreferrer">
          <LazyImage src="/icons/lv.png" alt="LV" width={120} height={120} className="mx-auto filter invert brightness-250" />
        </a>
        <a href="https://samurai-sihanoukville.github.io/japanesedining/" target="_blank" rel="noopener noreferrer">
          <LazyImage src="/icons/samurai.png" alt="Samurai" width={120} height={120} className="mx-auto filter grayscale brightness-150" />
        </a>
        <a href="https://hancraftedhaven.vercel.app/" target="_blank" rel="noopener noreferrer">
          <LazyImage src="/icons/handcraftedhaven.png" alt="Handcrafted Haven" width={120} height={120} className="mx-auto filter invert" />
        </a>
        </div>
      </section>
      {/* experience */}
      <section className="w-full flex flex-col justify-center py-8 sm:py-12 px-8">
        <LazyText as="h2" className="text-2xl sm:text-3xl mb-8 text-left px-2 py-4">
            • EXPERIENCE
        </LazyText>
        <div className="col-span-2 w-full h-px bg-white block m-2 mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-7xl mx-auto min-w-0 px-4">
          <div className="bg-black/80 p-6 rounded-lg flex flex-col items-start">
            {/* <LazyText as="h4" className="text-xl font-bold mb-3 text-white tracking-widest text-left w-full">Experience</LazyText> */}
            <LazyText as="h3" className="text-3xl mb-2 text-white tracking-widest text-left w-full">2017 - 2025</LazyText>
            <div className="w-5 h-1 bg-white my-5"></div>
            <LazyText as="p" className="text-white text-base space-y-2 text-left w-full">
              I started my journey in the digital world in 2017, focusing on digital marketing and content creation. During this time, I have worked on over 300+ creative projects. Over the years, I have expanded my skills to include web development, UI/UX design, and motion graphics. My passion for creating engaging digital experiences has driven me to continuously learn and adapt to new technologies and trends, aiming to make user experiences more seamless. With formal education from Brigham Young University - Idaho and hands-on experience, I have acquired the necessary abilities to deliver quality work that meets the needs of my clients and collaborators, all together with my passion and creativity.
            </LazyText>
          </div>
          <div className="bg-black/80 p-6 rounded-lg flex flex-col items-start">
            <LazyText as="h3" className="text-3xl mb-2 text-white tracking-widest text-left w-full">Skills</LazyText>
            <div className="w-5 h-1 bg-white my-5"></div>
            <ul className="text-white text-base space-y-2 text-left w-full">
              <li>HTML, CSS, JavaScript, React, Next.js, Python, C#, MySQL</li>
              <li>Adobe Creative Suite, UI/UX Design, Motion Graphics</li>
              <li>SEO, Analytics, Google Ads, Facebook Ads, Content Strategy, Social Media Management</li>
              <li>Photography, Video Editing</li>
              <li>Project Management, Team Collaboration, Event Planning</li>
              <li>Creative Problem Solving, Adaptability, Communication</li>
              <li>Attention to Detail, Time Management, Critical Thinking</li>
              <li>Communication in English, Japanese, Filipino</li>
            </ul>
          </div>
          <div className="bg-black/80 p-6 rounded-lg flex flex-col items-start">
            <LazyText as="h3" className="text-3xl mb-2 text-white tracking-widest text-left w-full">Get In Touch</LazyText>
            <div className="w-5 h-1 bg-white my-5"></div>
            <LazyImage src="/images/red.jpg" alt="Hera" width={150} height={150} className="mx-auto rounded-full object-cover" />
            <LazyText as="p" className="text-white text-base space-y-2 text-left w-full mt-4">
              Whether you are looking to book a project, interested in collaborating, or have any questions, feel free to reach out. I am open for freelance work, collaborations, and other opportunities. Let&apos;s create something amazing together!
            </LazyText>
            <div className="col-span-2 w-full h-px bg-white block mx-0 my-6"></div>
            <p className="text-white text-base text-left w-full">
              <a href="/contact" target="_blank" rel="noopener noreferrer" className="hover:underline m-0 p-0">Message Me</a>
              <span className="block">KH+85581589267</span>
              <a href="mailto:hello-hera@outlook.com" target="_blank" rel="noopener noreferrer" className="hover:underline m-0 p-0">hello-hera@outlook.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}