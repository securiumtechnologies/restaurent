import React, { useState } from 'react';
import { PageId, MenuItem } from '../types';
import {
  FEATURED_SHOWCASE,
  CUSTOMER_TESTIMONIALS,
  MENU_ITEMS
} from '../data/restaurantData';
import {
  Sparkles,
  Flame,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  Clock,
  Award,
  Plus,
  Eye,
  CheckCircle2,
  UtensilsCrossed
} from 'lucide-react';

interface HomePageProps {
  setActivePage: (page: PageId) => void;
  onSelectDish: (dish: MenuItem) => void;
  onAddToCart: (dish: MenuItem) => void;
  onOpenReservation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActivePage,
  onSelectDish,
  onAddToCart,
  onOpenReservation,
}) => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % CUSTOMER_TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? CUSTOMER_TESTIMONIALS.length - 1 : prev - 1
    );
  };

  // Find dish items matching the featured showcase
  const pizzaDish = MENU_ITEMS.find((item) => item.id === FEATURED_SHOWCASE.column1.itemId) || MENU_ITEMS[0];
  const biryaniDish = MENU_ITEMS.find((item) => item.id === FEATURED_SHOWCASE.column2.itemId) || MENU_ITEMS[3];
  const chowmeinDish = MENU_ITEMS.find((item) => item.id === FEATURED_SHOWCASE.column3.itemId) || MENU_ITEMS[6];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background Overlay & High-Res Food Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80"
            alt="Artisanal Dining Table"
            className="w-full h-full object-cover object-center transform scale-105 animate-subtleZoom"
            referrerPolicy="no-referrer"
          />
          {/* Dark textured gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2126]/95 via-[#222D34]/85 to-[#1A2126]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#DAA520]/40 text-[#DAA520] text-xs font-semibold uppercase tracking-widest animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 text-[#E2725B]" />
            <span>A Global Culinary Journey</span>
            <Sparkles className="w-3.5 h-3.5 text-[#E2725B]" />
          </div>

          {/* Headline */}
          <h1 className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FFFDD0] leading-tight drop-shadow-lg">
            Savor the World, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2725B] via-[#DAA520] to-[#E2725B]">
              One Bite at a Time
            </span>
          </h1>

          {/* Tagline */}
          <p className="max-w-2xl mx-auto text-stone-300 text-base sm:text-xl font-light leading-relaxed">
            Where 900°F wood-fired Neapolitan dough, fragrant slow-steamed brass handi biryani, and high-flame wok hei noodles celebrate the craft of global comfort food.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                setActivePage('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#E2725B] to-[#c55742] text-white font-bold text-base shadow-2xl hover:shadow-[#E2725B]/30 hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>View Our Menu</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 text-[#FFFDD0] font-bold text-base border border-[#DAA520]/40 shadow-xl hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Clock className="w-5 h-5 text-[#DAA520]" />
              <span>Book a Table</span>
            </button>
          </div>

          {/* Quick Highlights Strip */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-white/10 text-xs text-stone-300">
            <div className="flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-[#DAA520]" />
              <span>72-Hr Sourdough</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Flame className="w-4 h-4 text-[#E2725B]" />
              <span>100% Dum Handi</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#DAA520]" />
              <span>Wok Hei Seared</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Star className="w-4 h-4 text-[#E2725B] fill-[#E2725B]" />
              <span>4.9★ (2,400+ Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED SHOWCASE (THE MIDDLE GRAPHICS - 3 COLUMNS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[#E2725B] font-bold text-xs uppercase tracking-widest bg-[#E2725B]/10 px-3 py-1 rounded-full border border-[#E2725B]/20">
            Signature Culinary Pillars
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#36454F] font-bold">
            The Middle Showcase: Three Global Masterpieces
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Every dish in our signature triad is crafted from zero shortcuts — authentic wood stone baking, sealed dum clay pots, and breath-of-the-wok heat.
          </p>
        </div>

        {/* 3-Column Middle Graphics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Wood-Fired Pizza */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-stone-200/80 flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <img
                src={FEATURED_SHOWCASE.column1.image}
                alt={FEATURED_SHOWCASE.column1.dishName}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute top-4 left-4 bg-[#E2725B] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {FEATURED_SHOWCASE.column1.badge}
              </span>
              <span className="absolute top-4 right-4 bg-[#222D34]/90 text-[#DAA520] font-bold text-sm px-3 py-1 rounded-full border border-[#DAA520]/30 shadow-md">
                ${pizzaDish.price.toFixed(2)}
              </span>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-widest text-[#DAA520] font-semibold block">
                  {FEATURED_SHOWCASE.column1.subtitle}
                </span>
                <h3 className="font-serif-heading text-2xl font-bold">
                  {FEATURED_SHOWCASE.column1.title}
                </h3>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-gradient-to-b from-white to-[#FAF7F2]">
              <p className="text-stone-600 text-sm leading-relaxed">
                {FEATURED_SHOWCASE.column1.description}
              </p>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectDish(pizzaDish)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#36454F] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#E2725B]" />
                  <span>Quick View</span>
                </button>
                <button
                  onClick={() => onAddToCart(pizzaDish)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#E2725B] hover:bg-[#c55742] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Royal Biryani */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-stone-200/80 flex flex-col transform lg:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <img
                src={FEATURED_SHOWCASE.column2.image}
                alt={FEATURED_SHOWCASE.column2.dishName}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute top-4 left-4 bg-[#DAA520] text-[#1A2126] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {FEATURED_SHOWCASE.column2.badge}
              </span>
              <span className="absolute top-4 right-4 bg-[#222D34]/90 text-[#DAA520] font-bold text-sm px-3 py-1 rounded-full border border-[#DAA520]/30 shadow-md">
                ${biryaniDish.price.toFixed(2)}
              </span>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-widest text-[#DAA520] font-semibold block">
                  {FEATURED_SHOWCASE.column2.subtitle}
                </span>
                <h3 className="font-serif-heading text-2xl font-bold">
                  {FEATURED_SHOWCASE.column2.title}
                </h3>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-gradient-to-b from-white to-[#FAF7F2]">
              <p className="text-stone-600 text-sm leading-relaxed">
                {FEATURED_SHOWCASE.column2.description}
              </p>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectDish(biryaniDish)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#36454F] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#DAA520]" />
                  <span>Quick View</span>
                </button>
                <button
                  onClick={() => onAddToCart(biryaniDish)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#222D34] hover:bg-[#1A2126] text-[#DAA520] font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer border border-[#DAA520]/30"
                >
                  <Plus className="w-4 h-4" />
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: Chowmein */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-stone-200/80 flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <img
                src={FEATURED_SHOWCASE.column3.image}
                alt={FEATURED_SHOWCASE.column3.dishName}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {FEATURED_SHOWCASE.column3.badge}
              </span>
              <span className="absolute top-4 right-4 bg-[#222D34]/90 text-[#DAA520] font-bold text-sm px-3 py-1 rounded-full border border-[#DAA520]/30 shadow-md">
                ${chowmeinDish.price.toFixed(2)}
              </span>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-widest text-[#DAA520] font-semibold block">
                  {FEATURED_SHOWCASE.column3.subtitle}
                </span>
                <h3 className="font-serif-heading text-2xl font-bold">
                  {FEATURED_SHOWCASE.column3.title}
                </h3>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-gradient-to-b from-white to-[#FAF7F2]">
              <p className="text-stone-600 text-sm leading-relaxed">
                {FEATURED_SHOWCASE.column3.description}
              </p>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectDish(chowmeinDish)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#36454F] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#E2725B]" />
                  <span>Quick View</span>
                </button>
                <button
                  onClick={() => onAddToCart(chowmeinDish)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#E2725B] hover:bg-[#c55742] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CULINARY PHILOSOPHY BANNER */}
      <section className="foodie-wood-overlay py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[#DAA520] font-semibold text-xs tracking-widest uppercase bg-black/40 px-3.5 py-1.5 rounded-full border border-[#DAA520]/30">
                The Foodie Philosophy
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#FFFDD0] leading-tight">
                No Shortcuts. Just Pure Fire, Spice & Time.
              </h2>
              <p className="text-stone-300 text-base leading-relaxed">
                At Savoria, we believe true flavor is unlocked through patient craftsmanship. We ferment our pizza dough for 72 hours, steam our biryanis in sealed clay handis with raw saffron, and sear noodles over high-heat blast burners.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#DAA520]" />
                  <span>San Marzano DOP Tomatoes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#DAA520]" />
                  <span>Organic Kashmiri Saffron</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#DAA520]" />
                  <span>Local Organic Vegetables</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#DAA520]" />
                  <span>Hand-Pulled Daily Pasta & Noodles</span>
                </div>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setActivePage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-xl bg-[#DAA520] hover:bg-[#c59319] text-[#1A2126] font-bold text-sm shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Read Our Founding Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DAA520]/30">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80"
                  alt="Head Chefs Cooking"
                  className="w-full h-[420px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white">
                  <p className="font-serif-heading font-bold text-lg text-[#DAA520]">
                    "Food is global, but respect for ingredient physics is universal."
                  </p>
                  <p className="text-xs text-stone-300 mt-1">
                    — Chef Marco Bellini & Chef Zaheer Khan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS CAROUSEL */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[#E2725B] font-bold text-xs uppercase tracking-widest bg-[#E2725B]/10 px-3 py-1 rounded-full">
            What Food Lovers Say
          </span>
          <h2 className="font-serif-heading text-3xl font-bold text-[#36454F]">
            Guest Testimonials & Reviews
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-200/80 relative text-center space-y-6">
          <div className="flex items-center justify-center gap-1 text-[#DAA520]">
            {[...Array(CUSTOMER_TESTIMONIALS[testimonialIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#DAA520]" />
            ))}
          </div>

          <blockquote className="font-serif-heading text-lg sm:text-2xl text-[#36454F] italic leading-relaxed max-w-3xl mx-auto">
            "{CUSTOMER_TESTIMONIALS[testimonialIndex].comment}"
          </blockquote>

          <div className="flex items-center justify-center gap-4 pt-4">
            <img
              src={CUSTOMER_TESTIMONIALS[testimonialIndex].avatar}
              alt={CUSTOMER_TESTIMONIALS[testimonialIndex].name}
              className="w-14 h-14 rounded-full object-cover border-2 border-[#E2725B]"
              referrerPolicy="no-referrer"
            />
            <div className="text-left">
              <h4 className="font-bold text-[#36454F] text-base">
                {CUSTOMER_TESTIMONIALS[testimonialIndex].name}
              </h4>
              <p className="text-xs text-stone-500">
                {CUSTOMER_TESTIMONIALS[testimonialIndex].role}
              </p>
              <span className="inline-block mt-1 text-[11px] font-medium text-[#E2725B] bg-[#E2725B]/10 px-2.5 py-0.5 rounded-full">
                Dish: {CUSTOMER_TESTIMONIALS[testimonialIndex].dishTried}
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-stone-100 hover:bg-[#E2725B] hover:text-white transition-colors cursor-pointer text-stone-700 shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {CUSTOMER_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestimonialIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    idx === testimonialIndex ? 'bg-[#E2725B] w-8' : 'bg-stone-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-stone-100 hover:bg-[#E2725B] hover:text-white transition-colors cursor-pointer text-stone-700 shadow-sm"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
