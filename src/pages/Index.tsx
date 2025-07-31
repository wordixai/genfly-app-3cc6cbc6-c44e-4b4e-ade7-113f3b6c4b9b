import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import PopArtSection from '@/components/PopArtSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pop-orange via-pop-pink to-pop-orange">
      {/* Dot Pattern Overlay */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <Header />
      <Hero />
      <PopArtSection />
      <ProductGrid />
      
      {/* Footer */}
      <footer className="bg-black text-white p-8 mt-16">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-pop-yellow mb-4 text-handwrite">
            Pop Art Style Store ✨
          </h3>
          <p className="text-pop-pink">© 2024 - 让艺术点燃生活！</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;