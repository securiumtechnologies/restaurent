import React, { useState } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/restaurantData';
import {
  Flame,
  Crown,
  Leaf,
  Wheat,
  Plus,
  Eye,
  Search,
  SlidersHorizontal,
  Sparkles,
  Utensils
} from 'lucide-react';

interface MenuPageProps {
  onSelectDish: (dish: MenuItem) => void;
  onAddToCart: (dish: MenuItem) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onSelectDish, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [tagFilter, setTagFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Full Menu' },
    { id: 'starters', label: 'Starters & Small Plates' },
    { id: 'italian', label: 'Italian Wood-Fired' },
    { id: 'indian', label: 'Indian Royal Dum' },
    { id: 'asian', label: 'Asian Wok Hei' },
    { id: 'desserts', label: 'Artisanal Desserts' },
    { id: 'drinks', label: 'Craft Cocktails & Elixirs' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    // Category match
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    // Tag match
    if (tagFilter === 'spicy' && !item.tags.isSpicy) return false;
    if (tagFilter === 'vegetarian' && !item.tags.isVegetarian) return false;
    if (tagFilter === 'chef' && !item.tags.isChefsSpecial) return false;
    if (tagFilter === 'glutenFree' && !item.tags.isGlutenFree) return false;

    // Search query match
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      if (!matchName && !matchDesc) return false;
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-block text-[#E2725B] font-bold text-xs uppercase tracking-widest bg-[#E2725B]/10 px-4 py-1.5 rounded-full border border-[#E2725B]/20">
          Handcrafted Daily
        </span>
        <h1 className="font-serif-heading text-4xl sm:text-5xl font-extrabold text-[#36454F]">
          Our Artisanal Menu
        </h1>
        <p className="text-stone-600 text-base leading-relaxed">
          From 72-hour sourdough pizza crusts to fragrant saffron biryani handis and wok-seared noodles. Prepared fresh to order with organic, ethically sourced ingredients.
        </p>
      </div>

      {/* Controls Bar: Search & Tag Filters */}
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-stone-200/80 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, spices, crusts..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#E2725B] transition-colors"
            />
          </div>

          {/* Quick Tag Badges */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-bold text-stone-500 mr-2 flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Filter By:
            </span>
            <button
              onClick={() => setTagFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                tagFilter === 'all'
                  ? 'bg-[#36454F] text-white shadow-md'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              All Tags
            </button>
            <button
              onClick={() => setTagFilter('vegetarian')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                tagFilter === 'vegetarian'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-500" />
              <span>Vegetarian 🥬</span>
            </button>
            <button
              onClick={() => setTagFilter('spicy')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                tagFilter === 'spicy'
                  ? 'bg-[#E2725B] text-white shadow-md'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-red-500" />
              <span>Spicy 🌶️</span>
            </button>
            <button
              onClick={() => setTagFilter('chef')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                tagFilter === 'chef'
                  ? 'bg-[#DAA520] text-white shadow-md'
                  : 'bg-amber-50 text-amber-900 border border-amber-200'
              }`}
            >
              <Crown className="w-3.5 h-3.5 text-amber-500" />
              <span>Chef's Special 👑</span>
            </button>
            <button
              onClick={() => setTagFilter('glutenFree')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                tagFilter === 'glutenFree'
                  ? 'bg-amber-700 text-white shadow-md'
                  : 'bg-stone-100 text-stone-700'
              }`}
            >
              <Wheat className="w-3.5 h-3.5" />
              <span>Gluten-Free 🌾</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-t border-stone-100 pt-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#E2725B] to-[#c55742] text-white shadow-lg scale-105'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Grid */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center space-y-4 border border-stone-200">
          <Utensils className="w-12 h-12 text-[#E2725B] mx-auto opacity-50" />
          <h3 className="font-serif-heading text-xl font-bold text-[#36454F]">
            No Dishes Found
          </h3>
          <p className="text-stone-500 text-sm">
            Try resetting your search query or tag filters to explore our full offerings.
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setTagFilter('all');
              setSearchQuery('');
            }}
            className="px-6 py-2.5 bg-[#E2725B] text-white rounded-xl text-xs font-bold shadow-md cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-stone-200/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Dish Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Price Tag */}
                  <span className="absolute top-4 right-4 bg-[#222D34]/95 text-[#DAA520] font-extrabold text-sm px-3 py-1.5 rounded-xl border border-[#DAA520]/30 shadow-md">
                    ${dish.price.toFixed(2)}
                  </span>

                  {/* Tags Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 max-w-[70%]">
                    {dish.tags.isChefsSpecial && (
                      <span className="bg-[#DAA520] text-[#1A2126] text-[10px] font-bold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                        <Crown className="w-3 h-3" /> Chef's Special
                      </span>
                    )}
                    {dish.tags.isVegetarian && (
                      <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                        <Leaf className="w-3 h-3" /> Veg
                      </span>
                    )}
                    {dish.tags.isSpicy && (
                      <span className="bg-[#E2725B] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                        <Flame className="w-3 h-3" /> Spicy
                      </span>
                    )}
                  </div>

                  {/* Origin */}
                  {dish.origin && (
                    <span className="absolute bottom-3 left-4 text-xs font-semibold text-stone-200 flex items-center gap-1 drop-shadow">
                      <Sparkles className="w-3 h-3 text-[#DAA520]" />
                      <span>{dish.origin}</span>
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif-heading text-xl font-bold text-[#36454F] group-hover:text-[#E2725B] transition-colors">
                      {dish.name}
                    </h3>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">
                    {dish.description}
                  </p>
                  {dish.pairing && (
                    <p className="text-xs text-[#DAA520] font-medium pt-1">
                      🍷 Recommended Pairing: {dish.pairing}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-2">
                <button
                  onClick={() => onSelectDish(dish)}
                  className="flex-1 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#36454F] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#E2725B]" />
                  <span>Details</span>
                </button>
                <button
                  onClick={() => onAddToCart(dish)}
                  className="flex-1 py-3 rounded-xl bg-[#E2725B] hover:bg-[#c55742] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Decorative Food Texture Divider Banner */}
      <div className="foodie-spice-overlay rounded-3xl p-10 text-center text-white space-y-4 border border-[#DAA520]/30 shadow-2xl">
        <Sparkles className="w-8 h-8 text-[#DAA520] mx-auto animate-pulse" />
        <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#FFFDD0]">
          "Good food is the shortest distance between two people."
        </h3>
        <p className="text-stone-300 text-sm max-w-xl mx-auto">
          Need custom dietary accommodations or private banquet catering? Talk to our kitchen staff anytime.
        </p>
      </div>
    </div>
  );
};
