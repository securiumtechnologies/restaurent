import React, { useState } from 'react';
import { PageId } from '../types';
import { Utensils, ShoppingBag, Calendar, Menu, X, Phone, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  cartItemCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  cartItemCount,
  onOpenCart,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'location', label: 'Location & Hours' },
  ];

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#222D34]/95 backdrop-blur-md border-b border-[#DAA520]/20 text-[#FFFDD0] shadow-xl">
      {/* Top Banner Info Bar */}
      <div className="bg-[#1A2126] text-xs py-1.5 px-4 text-center border-b border-white/5 flex items-center justify-between max-w-7xl mx-auto">
        <div className="hidden sm:flex items-center gap-4 text-[#DAA520]/90">
          <span className="flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-[#E2725B]" />
            Wood-Fired Pizza • Dum Biryani • Wok Hei
          </span>
          <span className="text-white/30">•</span>
          <span>Hours: Mon-Sun 11AM - 11:30PM</span>
        </div>
        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 ml-auto">
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-[#E2725B] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#E2725B]" />
            <span>{RESTAURANT_INFO.phone}</span>
          </a>
          <span className="text-white/30">|</span>
          <span className="text-emerald-400 font-medium flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Open Now
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#E2725B] to-[#DAA520] p-0.5 shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#222D34] rounded-[10px] flex items-center justify-center">
              <Utensils className="w-6 h-6 text-[#DAA520]" />
            </div>
          </div>
          <div>
            <span className="font-serif-heading text-2xl font-bold tracking-tight text-white block leading-none">
              SAVORIA
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#DAA520] font-semibold block mt-1">
              Spice & Stone Bistro
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#DAA520] bg-white/10 shadow-inner border-b-2 border-[#E2725B]'
                    : 'text-stone-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#FFFDD0] transition-colors border border-white/10 cursor-pointer focus:outline-none"
            title="View Order"
          >
            <ShoppingBag className="w-5 h-5 text-[#DAA520]" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#E2725B] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Book Table Button */}
          <button
            onClick={onOpenReservation}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#E2725B] to-[#c55742] text-white font-semibold text-sm shadow-md hover:shadow-lg hover:from-[#c55742] hover:to-[#a84431] transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Table</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A2126] border-b border-[#DAA520]/20 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium cursor-pointer ${
                  activePage === item.id
                    ? 'bg-[#E2725B] text-white font-semibold'
                    : 'text-stone-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#E2725B] to-[#DAA520] text-white font-semibold shadow-md cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Table Online</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
