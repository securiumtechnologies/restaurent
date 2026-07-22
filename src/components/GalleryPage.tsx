import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { Camera, Maximize2, X, Sparkles } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'dishes', label: 'Signature Dishes' },
    { id: 'plating', label: 'Plating Process' },
    { id: 'kitchen', label: 'Chefs & Kitchen' },
    { id: 'ambiance', label: 'Dining Ambiance' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-block text-[#DAA520] font-bold text-xs uppercase tracking-widest bg-[#DAA520]/10 px-4 py-1.5 rounded-full border border-[#DAA520]/20">
          Visual Culinary Journey
        </span>
        <h1 className="font-serif-heading text-4xl sm:text-5xl font-extrabold text-[#36454F]">
          The Savoria Photo Gallery
        </h1>
        <p className="text-stone-600 text-base leading-relaxed">
          Step behind the scenes. From hand-tossing sourdough dough and high-heat wok flames to the elegant copper lighting in our dining room.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-[#E2725B] text-white shadow-lg scale-105'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group relative h-80 rounded-3xl overflow-hidden shadow-lg border border-stone-200 cursor-pointer bg-stone-900"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Hover Icon */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-5 h-5" />
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <span className="text-[10px] uppercase tracking-widest text-[#DAA520] font-bold">
                {item.category}
              </span>
              <h3 className="font-serif-heading text-xl font-bold">
                {item.title}
              </h3>
              <p className="text-xs text-stone-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-[#1A2126] rounded-3xl overflow-hidden shadow-2xl border border-[#DAA520]/30 text-white">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#E2725B] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-8 bg-black flex items-center justify-center max-h-[70vh]">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-contain max-h-[70vh]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:col-span-4 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="inline-block text-[#DAA520] text-xs uppercase tracking-widest font-bold bg-[#DAA520]/10 px-3 py-1 rounded-full border border-[#DAA520]/20">
                    {activeItem.category}
                  </span>
                  <h3 className="font-serif-heading text-2xl font-bold">
                    {activeItem.title}
                  </h3>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    {activeItem.caption}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 text-xs text-stone-400 flex items-center gap-2">
                  <Camera className="w-4 h-4 text-[#E2725B]" />
                  <span>Captured at Savoria Bistro, NYC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
