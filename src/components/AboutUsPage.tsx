import React from 'react';
import { PageId } from '../types';
import { CHEF_TEAM } from '../data/restaurantData';
import {
  Flame,
  Globe,
  Wheat,
  Heart,
  Award,
  Users,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface AboutUsPageProps {
  setActivePage: (page: PageId) => void;
  onOpenReservation: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ setActivePage, onOpenReservation }) => {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden foodie-wood-overlay">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="inline-block text-[#DAA520] font-bold text-xs uppercase tracking-widest bg-black/40 px-4 py-1.5 rounded-full border border-[#DAA520]/30">
            Our Heritage & Story
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-extrabold text-[#FFFDD0]">
            Where Global Food Traditions Meet Under One Roof
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 text-lg font-light leading-relaxed">
            Founded in 2018 by three culinary friends from Naples, Delhi, and Guangzhou, Savoria Bistro was born from a simple passion: celebrating the elemental magic of fire, flour, and spices.
          </p>
        </div>
      </section>

      {/* The Story Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#E2725B] font-bold text-xs uppercase tracking-widest bg-[#E2725B]/10 px-3 py-1 rounded-full border border-[#E2725B]/20">
              The Genesis
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#36454F] font-bold leading-tight">
              A Shared Table for Pizza, Biryani & Wok Hei
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Why should a food enthusiast have to choose between a blistered sourdough Margherita pizza, an aromatic sealed brass-handi biryani, and high-flame wok noodles? At Savoria, we proved that when each discipline is held to its highest traditional standards, they harmonize beautifully.
            </p>
            <p className="text-stone-600 text-base leading-relaxed">
              We constructed three specialized kitchen stations: a 900°F lava stone oven imported from Vesuvius, an authentic clay tandoor and dum handi hearth, and a 100,000 BTU jet flame wok burner array.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-200 text-center">
              <div>
                <span className="font-serif-heading text-3xl font-bold text-[#E2725B] block">72 hrs</span>
                <span className="text-xs text-stone-500 font-medium">Sourdough Fermentation</span>
              </div>
              <div>
                <span className="font-serif-heading text-3xl font-bold text-[#DAA520] block">100%</span>
                <span className="text-xs text-stone-500 font-medium">Raw Saffron & Whole Spices</span>
              </div>
              <div>
                <span className="font-serif-heading text-3xl font-bold text-[#36454F] block">18+</span>
                <span className="text-xs text-stone-500 font-medium">Culinary Awards</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="Chef preparing food"
                className="w-full h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#222D34] text-white p-6 rounded-2xl shadow-xl max-w-xs border border-[#DAA520]/30 hidden sm:block">
              <Award className="w-8 h-8 text-[#DAA520] mb-2" />
              <p className="font-serif-heading font-bold text-sm text-[#FFFDD0]">
                Voted NYC’s #1 Global Fusion Bistro 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Practices */}
      <section className="bg-white py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[#DAA520] font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Ethical Sourcing & Ingredients
            </span>
            <h2 className="font-serif-heading text-3xl font-bold text-[#36454F]">
              From Heritage Farms to Your Plate
            </h2>
            <p className="text-stone-600 text-sm">
              We travel directly to origin sources to select raw commodities that deliver unmatched flavor depth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E2725B]/10 text-[#E2725B] flex items-center justify-center">
                <Wheat className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-[#36454F]">
                Caputo Tipo 00 Flour
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Milled in Naples from select wheat grains for elastic, high-hydration dough that yields airy, digestible crusts.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#DAA520]/10 text-[#DAA520] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-[#36454F]">
                Grade A Kashmiri Saffron
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Hand-picked crimson threads from Pampore valley infused into organic whole milk for our royal dum biryanis.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-[#36454F]">
                Hudson Valley Local Farms
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Fresh daily harvests of baby bok choy, wild chanterelle mushrooms, basil leaves, and free-range organic eggs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[#E2725B] font-bold text-xs uppercase tracking-widest bg-[#E2725B]/10 px-3 py-1 rounded-full border border-[#E2725B]/20">
            Master Craftspeople
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#36454F]">
            Meet Our Culinary Leaders
          </h2>
          <p className="text-stone-600 text-sm">
            Each section of Savoria is led by a master artisan devoted exclusively to their discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CHEF_TEAM.map((chef, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-widest text-[#DAA520] font-bold block">
                      {chef.role}
                    </span>
                    <h3 className="font-serif-heading text-2xl font-bold">
                      {chef.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {chef.bio}
                  </p>
                  <div className="pt-2 border-t border-stone-100 text-xs">
                    <span className="text-stone-400 block font-medium">Signature Creation:</span>
                    <span className="font-bold text-[#E2725B] text-sm block mt-0.5">
                      {chef.signatureDish}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="bg-[#FAF7F2] p-3 rounded-xl text-center text-xs font-semibold text-stone-700">
                  {chef.experienceYears}+ Years Mastering Culinary Arts
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-[#222D34] to-[#1A2126] text-white p-10 sm:p-14 rounded-3xl shadow-2xl border border-[#DAA520]/30 space-y-6">
          <h3 className="font-serif-heading text-3xl font-bold text-[#FFFDD0]">
            Ready to Experience Savoria First-Hand?
          </h3>
          <p className="text-stone-300 text-sm max-w-xl mx-auto">
            Book your table today for lunch or dinner and taste the difference authentic passion makes.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onOpenReservation}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#E2725B] to-[#DAA520] text-white font-bold text-sm shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              Book a Table Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
