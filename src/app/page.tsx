

import Image from "next/image";
import HeroParallax from "../components/HeroParallax";
import CreateWithMe from "../components/CreateWithMe";

import ImageCarousel from "../components/ImageCarousel";


export default function Home() {
  return (
    <>

  <HeroParallax />
      {/* About Me Section
      <section className="max-w-3xl mx-auto py-16 px-4 sm:px-8 text-justify">
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/images/iamhera.jpg"
            alt="Hera profile"
            width={120}
            height={120}
            className="rounded-full object-cover border-none"
          />
          <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl">
            I’m Hera, a passionate multimedia developer and creative technologist. I love building beautiful, interactive experiences on the web, blending design, code, and storytelling. Whether it’s a website, animation, or digital art, I bring ideas to life with a unique blend of creativity and technical skill.
          </p>
        </div>
      </section>
       */}
      {/* Image Carousel Section */}
      <div className="max-w-5xl mx-auto w-full py-8">
          <div className="max-w-5xl mx-auto w-full flex items-center justify-center py-12 min-h-[400px]">
            <ImageCarousel />
          </div>
      </div>
      {/* Video and Quote Section */}
      <section className="w-screen flex flex-col md:flex-row gap-0 items-stretch px-4 pb-20 md:px-20">
        {/* Video column (7/10) */}
        <div className="w-full md:w-7/10 flex items-stretch p-0 m-0">
          <video
            src="/videos/kikouan.mp4"
            controls
            autoPlay
            muted
            loop
            className="w-full h-full object-cover rounded-none shadow-none"
            poster="/images/video-poster.jpg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Quote column (3/10) */}
        <div className="w-full md:w-3/10 flex flex-col justify-center items-center bg-white/80 dark:bg-black/60 rounded-none p-4 shadow-none min-h-[240px]">
          <blockquote className="text-xl italic text-gray-800 dark:text-gray-100 text-center">
              &quot;Creativity is intelligence having fun.&quot;
          </blockquote>
          <span className="mt-4 text-sm text-gray-500">– Albert Einstein</span>
        </div>
      </section>
      {/* Featured Projects Section */}
  <section className="w-full flex flex-col gap-0 p-0 m-0">
        {/* Row 1: GRANDYA COFFEE */}
  <div className="w-screen bg-white">
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 max-w-5xl mx-auto px-4 py-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <a href="https://www.grandyacoffee.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/grandya.JPG"
                alt="GRANDYA COFFEE"
                width={400}
                height={300}
                className="rounded-xl object-cover w-full max-w-xs md:max-w-none"
              />
            </a>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-4">
            <a href="https://www.grandyacoffee.com" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#303030] via-[#615D5D] to-[#C7C7C7] bg-clip-text text-transparent transition-all duration-300 hover:from-[#7A7A7A] hover:via-[#C0C0C0] hover:to-[#f8f8f8] hover:bg-gradient-to-l">GRANDYA COFFEE - Siem Reap, Cambodia</a>
            <p className="text-gray-700 dark:text-gray mb-2">A specialty coffee shop in the heart of Siem Reap, Cambodia, GRANDYA COFFEE is dedicated to serving ethically sourced beans and creating a welcoming space for locals and travelers alike. Experience the taste of Cambodia in every cup.</p>
          </div>
    </div>
  </div>
        {/* Row 2: FOYO WORLD */}
  <div className="w-screen">
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 max-w-5xl mx-auto px-4 py-8">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-4">
        <a href="https://www.foyo.world" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#C0C0C0] via-[#f8f8f8] to-[#888888] bg-clip-text text-transparent transition-all duration-300 hover:from-[#f8f8f8] hover:via-[#C0C0C0] hover:to-[#7A7A7A] hover:bg-gradient-to-l">FOYO WORLD - USA</a>
        <p className="text-gray-700 dark:text-gray-200 mb-2">A global platform connecting people, ideas, and opportunities. FOYO WORLD empowers users to share, discover, and grow in a vibrant online community.</p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <a href="https://www.foyo.world" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/foyo.JPG"
            alt="FOYO WORLD"
            width={400}
            height={300}
            className="rounded-xl object-cover w-full max-w-xs md:max-w-none"
          />
        </a>
      </div>
    </div>
  </div>
        {/* Row 3: Handcrafted Haven */}
        <div className="w-screen bg-white">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 max-w-5xl mx-auto px-4 py-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <a href="https://hancraftedhaven.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/vintage-ceramics.jpg"
                alt="Handcrafted Haven"
                width={400}
                height={300}
                className="rounded-xl object-cover w-full max-w-xs md:max-w-none"
              />
            </a>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-4">
            <a href="https://hancraftedhaven.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#303030] via-[#615D5D] to-[#C7C7C7] bg-clip-text text-transparent transition-all duration-300 hover:from-[#7A7A7A] hover:via-[#C0C0C0] hover:to-[#f8f8f8] hover:bg-gradient-to-l">HANDCRAFTED HAVEN</a>
            <p className="text-gray-700 dark:text-gray mb-2">Discover unique, artisan-made treasures at Handcrafted Haven. Each piece is thoughtfully created by skilled makers, bringing warmth and character to your home and lifestyle.</p>
          </div>
        </div>
      </div>
      </section>
    {/* Create with Me */}
      <CreateWithMe />
    </>
  );
}
