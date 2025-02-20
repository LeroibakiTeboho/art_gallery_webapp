'use client'
import React from 'react'

const Logo = () => {
    return (
      <div className="flex items-center space-x-3 group cursor-pointer">
        {/* Symbol incorporating initials */}
        <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center transition-all duration-300 group-hover:rotate-12">
          {/* T shape */}
          <div className="absolute h-1 w-6 bg-white top-4"></div>
          <div className="absolute h-6 w-1 bg-white left-1/2 -translate-x-1/2"></div>
          
          {/* L element (rotated) */}
          <div className="absolute h-6 w-1 bg-white bottom-2 left-3 -rotate-45 opacity-75"></div>
          <div className="absolute h-1 w-4 bg-white bottom-3 right-2 rotate-45 opacity-75"></div>
          
          {/* I dot (animated) */}
          <div className="absolute h-2 w-2 bg-white rounded-full top-2 right-2 group-hover:scale-125 transition-all"></div>
        </div>
  
        {/* Text logo with animated elements */}
        <div className="flex flex-col font-bold">
          <span className="text-2xl tracking-tighter text-gray-800 group-hover:text-black transition-colors">
            TEBOHO
            <span className="inline-block ml-1 text-purple-600 group-hover:translate-x-1 transition-transform">
              L
            </span>
          </span>
          <span className="text-xs tracking-widest text-gray-500 group-hover:text-gray-700 transition-colors">
            <span className="text-pink-500">I</span>SHMAEL
            <span className="ml-1 text-blue-500 animate-pulse">✦</span>
          </span>
        </div>
      </div>
    );
  };

export default Logo