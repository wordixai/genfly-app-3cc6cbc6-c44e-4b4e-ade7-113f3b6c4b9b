import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Palette, Trending } from 'lucide-react';

const PopArtSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="speech-bubble">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-handwrite">
                🎨 为什么选择我们？
              </h2>
              <p className="text-lg text-gray-700">
                我们不只是卖衣服，我们卖的是艺术、态度和个性！每一件商品都经过精心设计，融合了最前沿的波普艺术元素。
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-16 h-16 bg-pop-yellow border-4 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:animate-spin transition-all">
                  <Palette className="h-8 w-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">原创设计</h3>
                  <p className="text-white">每一件都是独一无二的艺术品</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-16 h-16 bg-pop-pink border-4 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:animate-bounce transition-all">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">明星同款</h3>
                  <p className="text-white">潮流达人都在穿的爆款单品</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-16 h-16 bg-pop-blue border-4 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:animate-pulse transition-all">
                  <Trending className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">潮流前沿</h3>
                  <p className="text-white">紧跟国际时尚趋势</p>
                </div>
              </div>
            </div>

            <Button className="btn-pop-pink text-xl px-8 py-4">
              了解更多 →
            </Button>
          </div>

          {/* Right Side - Visual Elements */}
          <div className="relative">
            {/* Main Image */}
            <div className="comic-frame bg-white p-8">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=600&fit=crop&crop=center"
                alt="Pop Art Fashion"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-pop-yellow border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce-fun">
              <span className="text-2xl font-bold text-black">50%</span>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-20 bg-pop-purple border-4 border-black rounded-xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-12">
              <span className="text-lg font-bold text-white text-handwrite">Limited!</span>
            </div>

            <div className="absolute top-1/2 -right-12 w-16 h-16 bg-pop-orange border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-pulse">
              <span className="text-2xl">⭐</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block comic-frame bg-white p-8">
            <h3 className="text-3xl font-bold text-black mb-4 text-handwrite">
              🎉 立即加入波普艺术潮流！
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              新用户注册即享8折优惠，限时特价商品等你来抢！
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="btn-pop-orange text-xl px-8 py-4">
                立即注册
              </Button>
              <Button className="btn-pop-yellow text-xl px-8 py-4">
                浏览特价
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopArtSection;
