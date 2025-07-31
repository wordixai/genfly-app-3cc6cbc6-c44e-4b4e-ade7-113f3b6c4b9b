import React from 'react';
import { ShoppingCart, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="relative z-50 bg-white border-b-4 border-black shadow-[0_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-pop-yellow border-4 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-2xl font-bold">🎨</span>
            </div>
            <h1 className="text-3xl font-bold text-black text-handwrite skew-text">
              PopArt Shop
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {['首页', '服饰', '艺术品', '配件', '关于'].map((item) => (
              <button 
                key={item}
                className="text-lg font-semibold text-black hover:text-pop-pink transition-colors duration-200 hover:animate-bounce-fun relative"
              >
                {item}
                <div className="absolute -bottom-1 left-0 w-0 h-1 bg-pop-pink transition-all duration-300 hover:w-full"></div>
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-pop-yellow/20">
              <Search className="h-6 w-6" />
            </Button>
            
            <Button className="btn-pop-pink relative">
              <ShoppingCart className="h-5 w-5 mr-2" />
              购物车
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-pop-yellow text-black text-xs font-bold rounded-full border-2 border-black flex items-center justify-center">
                3
              </span>
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;