

import LazyImage from "../components/LazyImage";
import LazyText from "../components/LazyText";
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
          <LazyImage
            src="/images/iamhera.jpg"
            alt="Hera profile"
            width={120}
            height={120}
            className="rounded-full object-cover border-none"
          />
          <LazyText as="h2" className="text-3xl font-bold text-white mb-2">About Me</LazyText>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl">
            I’m Hera, a passionate multimedia developer and creative technologist. I love building beautiful, interactive experiences on the web, blending design, code, and storytelling. Whether it’s a website, animation, or digital art, I bring ideas to life with a unique blend of creativity and technical skill.
          </p>
        </div>
      </section>
       */}
      {/* Image Carousel Section */}
      <div className="max-w-5xl mx-auto w-full py-8">
          <div className="max-w-5xl mx-auto w-full flex items-center justify-center py-12 min-h-[400px] p-4">
            <ImageCarousel />
          </div>
      </div>
      {/* Video and Quote Section */}
      <section className="w-screen flex flex-col md:flex-row gap-0 items-stretch pl-8 pr-4 pb-20">
        {/* Video column (7/10) */}
        <div className="w-full md:w-7/10 flex items-stretch px-2">
          <video
            src="/videos/kikouan.mp4"
            controls
            controlsList="nofullscreen nodownload noremoteplayback"
            disablePictureInPicture
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
          <LazyText as="blockquote" className="text-xl italic text-gray-800 dark:text-gray-100 text-center">
              &quot;Creativity is intelligence having fun.&quot;
          </LazyText>
          <span className="mt-4 text-sm text-gray-500">– Albert Einstein</span>
        </div>
      </section>
      {/* Featured Projects Section */}
    <section className="w-full flex flex-col gap-0 p-0 m-0">
        {/* Row 1: GRANDYA COFFEE */}
      <div className="w-screen bg-white">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0       max-w-5xl pl-8 pr-4 py-12">
          <div className="w-full md:w-1/2 flex justify-center ">
            <a href="https://www.grandyacoffee.com" target="_blank" rel="noopener noreferrer">
              <LazyImage
                src="/images/grandya.JPG"
                alt="GRANDYA COFFEE"
                width={400}
                height={300}
                className="rounded-xl object-cover w-full max-w-xs md:max-w-none"
              />
            </a>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start pl-8 pr-4">
            <LazyText as="a" href="https://www.grandyacoffee.com" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#303030] via-[#615D5D] to-[#C7C7C7] bg-clip-text text-transparent transition-all duration-300 hover:from-[#7A7A7A] hover:via-[#C0C0C0] hover:to-[#f8f8f8] hover:bg-gradient-to-l">
            GRANDYA COFFEE
          </LazyText>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block align-middle">
              <img src="/icons/location.svg" alt="Location" className="w-5 h-5 inline-block" />
            </span>
            <span className="text-base text-gray-600 dark:text-gray-300">Siem Reap, Cambodia</span>
          </div>
          <LazyText as="p" className="text-gray-700 dark:text-gray mb-2">A specialty coffee shop in the heart of Siem Reap, Cambodia, GRANDYA COFFEE is dedicated to serving ethically sourced beans and creating a welcoming space for locals and travelers alike. Experience the taste of Cambodia in every cup.</LazyText>
          </div>
      </div>
    </div>
        {/* Row 2: FOYO WORLD */}
        <div className="w-screen">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 max-w-5xl mx-auto pl-8 pr-4 py-12">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start pl-8 pr-4">
            <LazyText as="a" href="https://www.foyo.world" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#C0C0C0] via-[#f8f8f8] to-[#888888] bg-clip-text text-transparent transition-all duration-300 hover:from-[#f8f8f8] hover:via-[#C0C0C0] hover:to-[#7A7A7A] hover:bg-gradient-to-l">
            FOYO WORLD</LazyText>
            <div className="flex items-center gap-2 mb-2">
            <span className="inline-block align-middle">
              <img src="/icons/locate.svg" alt="Location" className="w-5 h-5 inline-block" />
            </span>
            <span className="text-base text-gray-600 dark:text-gray-500">NY, USA</span>
          </div>
          <LazyText as="p" className="text-gray-700 dark:text-gray-200 mb-2">A global platform connecting people, ideas, and opportunities. FOYO WORLD empowers users to share, discover, and grow in a vibrant online community.</LazyText>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <a href="https://www.foyo.world" target="_blank" rel="noopener noreferrer">
          <LazyImage
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
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 max-w-5xl mx-auto  pl-8 pr-4 py-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <a href="https://hancraftedhaven.vercel.app/" target="_blank" rel="noopener noreferrer">
              <LazyImage
                src="/images/vintage-ceramics.jpg"
                alt="Handcrafted Haven"
                width={400}
                height={300}
                className="rounded-xl object-cover w-full max-w-xs md:max-w-none"
              />
            </a>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start pl-8 pr-4">
            <LazyText as="a" href="https://hancraftedhaven.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#303030] via-[#615D5D] to-[#C7C7C7] bg-clip-text text-transparent transition-all duration-300 hover:from-[#7A7A7A] hover:via-[#C0C0C0] hover:to-[#f8f8f8] hover:bg-gradient-to-l">HANDCRAFTED HAVEN</LazyText>
            <LazyText as="p" className="text-gray-700 dark:text-gray mb-2">Discover unique, artisan-made treasures at Handcrafted Haven. Each piece is thoughtfully created by skilled makers, bringing warmth and character to your home and lifestyle.</LazyText>
          </div>
        </div>
      </div>
      </section>
    {/* Create with Me */}
      <CreateWithMe />
    </>
  );
}
