"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "360 resort cebu.jpg",
  "arasugawa.jpg",
  "baron5.jpg",
  "bicycle.jpg",
  "businesscard.jpg",
  "beach-in-dainyu-2.jpg",
  "baron6.jpg",
  "baron4.jpg",
  "baron3.jpg",
  "baron2.jpg",
  "baron1.jpg",
  "baron.jpg",
  "balcony.jpg",
  "cebu garden.jpg",
  "arasugawa-park.jpg",
  "arasugawa-jp.jpg",
  "cheesecake-by-light.jpg",
  "charity-dance-in-koenji-4.jpg",
  "charity-dance-in-koenji-3.jpg",
  "charity-dance-in-koenji-2.jpg",
  // ...add more as needed
];

function shuffle(arr: string[]) {
  return arr
    .map((v) => [Math.random(), v] as const)
    .sort((a, b) => a[0] - b[0])
    .map(([, v]) => v);
}
function CarouselRow({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  const rowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    let frame: number;
    let pos = 0;
    function animate() {
      if (!row) return;
  pos += reverse ? 0.5 : -0.5; // reverse: left, default: right
  row.style.transform = `translateX(${pos}px)`;
  if (Math.abs(pos) > row.scrollWidth / 2) pos = 0;
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [reverse]);
  return (
    <div className="overflow-hidden w-full">
      <div
        ref={rowRef}
        className="flex gap-4 w-max"
        style={{ willChange: "transform" }}
      >
        {[...images, ...images].map((img, i) => (
          <div key={i} className="w-32 h-32 flex-shrink-0 rounded-xl  overflow-hidden bg-gray-200">
            <Image
              src={`/images/${img}`}
              alt="carousel"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority={i < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ImageCarousel() {
  const [rows, setRows] = useState<string[][]>([[], []]);
  useEffect(() => {
    const shuffled = shuffle(IMAGES);
    setRows([
      shuffled.slice(0, 8),
      shuffled.slice(8, 16),
    ]);
  }, []);
  return (
    <div className="w-full py-8 flex flex-col gap-4">
      <CarouselRow images={rows[0]} reverse={false} />
      <CarouselRow images={rows[1]} reverse={true} />
    </div>
  );
}

export default ImageCarousel;
