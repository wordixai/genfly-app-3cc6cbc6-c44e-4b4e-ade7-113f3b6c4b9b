import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pop-yellow rounded-full border-4 border-black animate-bounce-fun shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pop-blue transform rotate-45 border-4 border-black animate-pulse shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-pop-purple rounded-full border-4 border-black animate-spin-slow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
        <div className="absolute bottom-20 right-10 w-32 h-20 bg-pop-pink transform -rotate-12 border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Speech Bubble */}
        <div className="speech-bubble inline-block mb-8 animate-bounce-in">
          <p className="text-lg font-semibold text-black">
            💫 欢迎来到最酷的潮流世界！
          </p>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-black">
          <span className="text-handwrite skew-text inline-block transform hover:scale-110 transition-transform duration-300">
            POP
          </span>
          <span className="text-white text-outline inline-block transform hover:scale-110 transition-transform duration-300 ml-4">
            ART
          </span>
          <span className="text-handwrite skew-text inline-block transform hover:scale-110 transition-transform duration-300 ml-4">
            STORE
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl font-semibold text-white mb-8 text-handwrite">
          让艺术点燃你的时尚灵魂 ✨
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button className="btn-pop-yellow text-xl px-8 py-4 group">
            <Sparkles className="mr-2 h-6 w-6 group-hover:animate-spin" />
            开始购物
          </Button>
          
          <Button className="btn-pop-blue text-xl px-8 py-4 group">
            <Heart className="mr-2 h-6 w-6 group-hover:animate-pulse" />
            查看艺术品
          </Button>
        </div>

        {/* Feature Icons */}
        <div className="flex items-center justify-center space-x-8 text-white">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-pop-yellow rounded-full border-2 border-black flex items-center justify-center">
              <Zap className="h-4 w-4 text-black" />
            </div>
            <span className="font-semibold">快速配送</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-pop-pink rounded-full border-2 border-black flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold">原创设计</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-pop-purple rounded-full border-2 border-black flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold">限量版</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;