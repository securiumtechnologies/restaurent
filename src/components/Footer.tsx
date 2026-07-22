import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Utensils,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Instagram,
  Facebook,
  Twitter,
  Award,
  Heart
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  setActivePage: (page: PageId) => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenReservation }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const navigateTo = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1A2126] text-stone-300 pt-16 pb-8 border-t border-[#DAA520]/20 overflow-hidden">
      {/* Blurred Atmospheric Background Image */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none filter blur-sm scale-105">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80"
          alt="Kitchen Atmosphere"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2126] via-[#1A2126]/80 to-[#1A2126]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Callout Banner */}
        <div className="bg-gradient-to-r from-[#E2725B]/90 via-[#36454F] to-[#222D34] rounded-3xl p-8 mb-16 shadow-2xl border border-[#DAA520]/30 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="inline-block text-[#DAA520] font-semibold text-xs tracking-widest uppercase bg-black/30 px-3 py-1 rounded-full border border-[#DAA520]/20">
                Join The Savoria Tasting Club
              </span>
              <h3 className="font-serif-heading text-2xl sm:text-3xl text-white font-bold">
                Get Secret Off-Menu Tastings & Chef Invites
              </h3>
              <p className="text-stone-300 text-sm max-w-xl">
                Subscribe for seasonal menu launches, private wine tasting events, and exclusive 15% off your first online table reservation.
              </p>
            </div>
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-emerald-900/60 text-emerald-200 border border-emerald-500/30 p-4 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Welcome to the Club!</p>
                    <p className="text-xs text-emerald-300">Check your inbox for your secret welcome voucher.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="px-4 py-3 rounded-xl bg-black/40 border border-stone-600 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-[#DAA520] flex-1"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#DAA520] hover:bg-[#c59319] text-[#1A2126] font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main 4-Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E2725B] flex items-center justify-center text-white shadow-lg">
                <Utensils className="w-5 h-5 text-[#FFFDD0]" />
              </div>
              <span className="font-serif-heading text-2xl font-bold text-white tracking-wider">
                SAVORIA
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Where centuries of culinary craftsmanship converge. From 900°F wood-fired sourdough pizzas to slow-steamed brass handi biryanis and smoky wok-fired noodles.
            </p>
            <div className="flex items-center gap-3 text-sm text-[#DAA520] pt-2">
              <Award className="w-5 h-5 text-[#E2725B]" />
              <span>Michelin Recommended 2025</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-serif-heading text-lg font-bold text-white mb-4 border-b border-[#E2725B]/40 pb-2 inline-block">
              Explore Savoria
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="hover:text-[#DAA520] transition-colors cursor-pointer text-left"
                >
                  Home & Featured Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('menu')}
                  className="hover:text-[#DAA520] transition-colors cursor-pointer text-left"
                >
                  Full Artisanal Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('gallery')}
                  className="hover:text-[#DAA520] transition-colors cursor-pointer text-left"
                >
                  Photo Gallery & Plating
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#DAA520] transition-colors cursor-pointer text-left"
                >
                  Chef Team & Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('location')}
                  className="hover:text-[#DAA520] transition-colors cursor-pointer text-left"
                >
                  Location, Map & Reservations
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Operating Hours */}
          <div className="space-y-3">
            <h4 className="font-serif-heading text-lg font-bold text-white mb-4 border-b border-[#E2725B]/40 pb-2 inline-block">
              Visit Us
            </h4>
            <div className="flex items-start gap-3 text-sm text-stone-300">
              <MapPin className="w-5 h-5 text-[#E2725B] shrink-0 mt-0.5" />
              <span>{RESTAURANT_INFO.address}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-stone-300">
              <Phone className="w-4 h-4 text-[#DAA520] shrink-0" />
              <span>{RESTAURANT_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-stone-300">
              <Mail className="w-4 h-4 text-[#DAA520] shrink-0" />
              <span>{RESTAURANT_INFO.email}</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-stone-300 pt-2">
              <Clock className="w-4 h-4 text-[#E2725B] shrink-0 mt-1" />
              <div className="text-xs space-y-1 text-stone-400">
                <p>Mon - Thu: 4:00 PM – 10:30 PM</p>
                <p>Fri - Sun: 11:00 AM – 11:30 PM</p>
              </div>
            </div>
          </div>

          {/* Col 4: Socials & Instant Book */}
          <div className="space-y-4">
            <h4 className="font-serif-heading text-lg font-bold text-white mb-4 border-b border-[#E2725B]/40 pb-2 inline-block">
              Connect & Reserve
            </h4>
            <p className="text-xs text-stone-400">
              Follow our culinary journey on Instagram & Facebook for behind-the-scenes plating and daily chef specials.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#E2725B] text-white flex items-center justify-center transition-all cursor-pointer border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#E2725B] text-white flex items-center justify-center transition-all cursor-pointer border border-white/10"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#E2725B] text-white flex items-center justify-center transition-all cursor-pointer border border-white/10"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={onOpenReservation}
              className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#E2725B] to-[#DAA520] text-white font-bold text-sm shadow-xl hover:brightness-110 transition-all cursor-pointer"
            >
              Reserve A Table Now
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Savoria Bistro. All Rights Reserved. Crafted for food lovers worldwide.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-stone-300 cursor-pointer flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-[#E2725B] fill-[#E2725B]" /> for Foodies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
