"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[90vh] bg-cover bg-center flex flex-col items-center justify-center text-center text-[#F7E8D0]"
      style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
    >
      
      <div className="absolute inset-0 bg-black/45 mix-blend-multiply"></div>

     
      <div className="relative z-10 bg-[#1f352c]/85 p-10 rounded-2xl backdrop-blur-sm shadow-xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4 text-[#F7E8D0]"
        >
          Brewed with Passion & Code with Coffee
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg mb-6 font-medium text-[#F7E8D0]/90 max-w-lg mx-auto"
        >
          Redefining the Starbucks experience with Starbrew ☕
        </motion.p>

        <motion.a
          href="#menu"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className="bg-[#F7E8D0] text-[#2E4E3F] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#C6A982] hover:scale-105 transition-all"
        >
          Explore Menu
        </motion.a>
      </div>
    </section>
  );
}
