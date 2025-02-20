"use client";
import { motion } from "framer-motion"; // For animations
import { CodeBracketIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid"; // Icons for buttons
import CodeSnippet from "./CodeSnippet";


const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 md:py-32 overflow-hidden">
      {/* Container */}
      <div className="container mx-auto my-7 px-14 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Column - Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
          >
            👋 Hi, I&apos;m <span className="text-purple-600">Teboho Leroibaki</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-800"
          >
            Crafting Seamless Front-End Experiences & Scalable MERN Solutions
          </motion.h2>

          {/* SubHeadLine */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl"
          >
            I build responsive, dynamic, and user-friendly web applications using modern technologies like React, Node.js, Express, and MongoDB. Let&apos;s turn your ideas into reality with clean code and pixel-perfect design.
          </motion.p>

          {/* Tagline */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base text-gray-500 italic"
          >
            Passionate about delivering exceptional digital experiences.
          </motion.p> */}

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#work"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
            >
              <CodeBracketIcon className="w-5 h-5" />
              View My Work
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Right Column - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-md">
            {/* Cool Illustration */}
            {/* <img
              src="/images/cool-illustration.svg" // Replace with your illustration
              alt="Web Development Illustration"
              className="w-full h-auto"
            /> */}
            {/* Optional: Animated Code Snippet */}
            <div className=" bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
 
              <CodeSnippet />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Optional: Floating Shapes for Extra Flair */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-28 h-28 bg-purple-300 rounded-full opacity-20 -top-12 -left-12 animate-float"></div>
        <div className="absolute w-20 h-20 bg-blue-300 rounded-full opacity-20 top-1/4 right-8 animate-float-delay"></div>
        <div className="absolute w-24 h-24 bg-pink-300 rounded-full opacity-20 bottom-8 left-1/4 animate-float-delay-2"></div>
      </div>
    </section>
  );
};

export default HeroSection;