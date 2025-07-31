import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Zap } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "波普艺术T恤",
    price: "¥299",
    originalPrice: "¥399",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=center",
    tag: "HOT",
    color: "pop-orange"
  },
  {
    id: 2,
    name: "涂鸦风牛仔裤",
    price: "¥599",
    originalPrice: "¥799",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop&crop=center",
    tag: "NEW",
    color: "pop-pink"
  },
  {
    id: 3,
    name: "漫画风帆布包",
    price: "¥199",
    originalPrice: "¥299",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center",
    tag: "SALE",
    color: "pop-yellow"
  },
  {
    id: 4,
    name: "复古波点连衣裙",
    price: "¥899",
    originalPrice: "¥1199",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop&crop=center",
    tag: "LIMITED",
    color: "pop-blue"
  },
  {
    id: 5,
    name: "霓虹色运动鞋",
    price: "¥1299",
    originalPrice: "¥1599",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop&crop=center",
    tag: "HOT",
    color: "pop-purple"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-black text-handwrite">
            🔥 热门单品 🔥
          </h2>
          <p className="text-xl text-white font-semibold">
            每一件都是艺术品，让你成为街头焦点！
          </p>
        </div>

        {/* Product Grid */}
        <div className="pop-grid">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`comic-frame bg-white p-6 group hover:scale-105 transition-all duration-300 hover:rotate-1 animate-bounce-in`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Product Tag */}
              <div className={`absolute -top-3 -left-3 px-3 py-1 bg-${product.color} border-3 border-black rounded-lg font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform rotate-12 z-10`}>
                {product.tag}
              </div>

              {/* Product Image */}
              <div className="relative overflow-hidden rounded-xl mb-4 border-3 border-black">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-comic-dots opacity-20"></div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="icon" className="btn-pop-pink">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="icon" className="btn-pop-yellow">
                    <Zap className="h-5 w-5 text-black" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-black group-hover:text-pop-pink transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-pop-pink">
                    {product.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                </div>

                <Button className="w-full btn-pop-orange group">
                  <ShoppingCart className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  加入购物车
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <Button className="btn-pop-blue text-xl px-12 py-4">
            查看更多商品 ✨
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;