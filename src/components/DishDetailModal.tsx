import React, { useState } from 'react';
import { MenuItem } from '../types';
import { X, Flame, Crown, Leaf, Plus, Minus, Sparkles, Check, Heart } from 'lucide-react';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onAddToCart: (dish: MenuItem, quantity: number, instructions: string) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [added, setAdded] = useState(false);

  if (!dish) return null;

  const handleAdd = () => {
    onAddToCart(dish, quantity, specialInstructions);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#1A2126] text-white rounded-3xl overflow-hidden shadow-2xl border border-[#DAA520]/30 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-[#E2725B] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-72 sm:h-80 overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2126] via-transparent to-transparent" />

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="text-xs font-bold text-[#DAA520] uppercase tracking-widest block">
                {dish.origin || 'Signature Dish'}
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#FFFDD0]">
                {dish.name}
              </h2>
            </div>
            <span className="text-2xl font-extrabold text-[#DAA520] bg-black/60 px-4 py-1.5 rounded-2xl border border-[#DAA520]/40 shadow-lg">
              ${dish.price.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 text-xs">
            {dish.tags.isChefsSpecial && (
              <span className="bg-[#DAA520] text-[#1A2126] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                <Crown className="w-3.5 h-3.5" /> Chef's Special
              </span>
            )}
            {dish.tags.isVegetarian && (
              <span className="bg-emerald-600 text-white font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                <Leaf className="w-3.5 h-3.5" /> Vegetarian
              </span>
            )}
            {dish.tags.isSpicy && (
              <span className="bg-[#E2725B] text-white font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                <Flame className="w-3.5 h-3.5" /> Spicy
              </span>
            )}
            {dish.calories && (
              <span className="bg-white/10 text-stone-300 font-medium px-3 py-1 rounded-full border border-white/10">
                {dish.calories}
              </span>
            )}
          </div>

          <p className="text-stone-300 text-sm leading-relaxed">
            {dish.description}
          </p>

          {dish.pairing && (
            <div className="bg-white/5 border border-[#DAA520]/20 p-4 rounded-2xl text-xs space-y-1">
              <span className="text-[#DAA520] font-bold block">Sommelier Pairing Recommendation</span>
              <p className="text-stone-300">{dish.pairing}</p>
            </div>
          )}

          {/* Customization Note */}
          <div className="space-y-2">
            <label className="block text-stone-300 font-semibold text-xs">
              Special Prep Instructions / Allergies (Optional)
            </label>
            <input
              type="text"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g. Extra spicy, sauce on the side..."
              className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#DAA520]"
            />
          </div>

          {/* Quantity & Add Button */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-3 bg-black/40 border border-stone-700 rounded-xl p-1.5">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold text-sm min-w-6 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              disabled={added}
              className={`flex-1 py-3.5 rounded-xl font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-r from-[#E2725B] to-[#DAA520] text-white hover:brightness-110'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5 animate-scaleIn" />
                  <span>Added to Order!</span>
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  <span>Add {quantity} to Order • ${(dish.price * quantity).toFixed(2)}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
