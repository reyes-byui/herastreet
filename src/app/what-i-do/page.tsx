
export default function WhatIDoPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-gray-100 p-0 m-0">
      {/* Section 1: Content, Design, Logo, Services, Strategy */}
      <section className="w-full flex flex-row items-center justify-center gap-12 py-16">
        <span className="text-1xl sm:text-1xl">Content</span>
        <span className="text-1xl sm:text-1xl">Design</span>
        <span className="block w-16 h-16 sm:w-24 sm:h-24 relative">
          <img
            src="/images/HA.jpg"
            alt="Hera Logo"
            className="object-cover w-full h-full"
            width={32}
            height={32}
          />
        </span>
        <span className="text-1xl sm:text-1xl">Services</span>
        <span className="text-1xl sm:text-1xl">Strategy</span>
      </section>

      {/* Section 2: Mail icon, quote, Instagram icon */}
      <section className="w-full flex flex-row items-center justify-center gap-20 py-12">
        <span className="block w-10 h-10 sm:w-12 sm:h-12 relative">
          <img
            src="/icons/mail.svg"
            alt="Mail Icon"
            className="object-contain w-full h-full"
            width={32}
            height={32}
          />
        </span>
        <span className="text-lg sm:text-3xl font-large text-center max-w-xl">
          "I am Hera – A Multimedia Developer passionate about blending content, design, and technology to create meaningful digital experiences."
        </span>
        <span className="block w-10 h-10 sm:w-12 sm:h-12 relative">
          <img
            src="/icons/ig.svg"
            alt="Instagram Icon"
            className="object-contain w-full h-full"
            width={32}
            height={32}
          />
        </span>
      </section>
    </main>
  );
}
