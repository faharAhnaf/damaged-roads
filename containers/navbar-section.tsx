"use client";
import { useEffect, useState } from "react";

export default function NavbarSection() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`fixed w-full h-16 flex items-center px-44 ${
        isScrolled && "backdrop-blur-sm bg-white duration-700"
      }`}
    >
      <p className="font-bold text-2xl">RoadDetection</p>
    </section>
  );
}
