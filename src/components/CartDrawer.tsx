import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Utensils } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (dishId: string, quantity: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [diningOption, setDiningOption] = useState<'dine-in' | 'takeout'>('dine-in');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.item.price * item.quantity, 0);
  const tax = subtotal * 0.08875; // NYC tax rate
  const tipAmount = subtotal * (tipPercentage / 100);
  const total = subtotal + tax + tipAmount;

  const handleCheckout = () => {
    setOrderPlaced(true);
  };

  const handleReset = () => {
    setOrderPlaced(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="w-full max-w-md bg-[#1A2126] text-white h-full shadow-2xl flex flex-col border-l border-[#DAA520]/20">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E2725B] flex items-center justify-center text-white">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-heading text-xl font-bold text-[#FFFDD0]">Your Order</h2>
              <p className="text-xs text-stone-400">{cart.length} unique items</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderPlaced ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-6 animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-emerald-900/60 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif-heading text-2xl font-bold text-[#FFFDD0]">
                Order Sent to Kitchen!
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Our head chefs have received your order ({diningOption === 'dine-in' ? 'Table Order' : 'Takeout Pick-Up'}). Preparing fresh now!
              </p>
            </div>

            <div className="w-full bg-black/40 p-4 rounded-2xl border border-white/10 text-xs space-y-2 text-left">
              <div className="flex justify-between text-stone-400">
                <span>Estimated Prep Time:</span>
                <span className="font-bold text-emerald-400">18–25 mins</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Order Total:</span>
                <span className="font-bold text-[#DAA520]">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 rounded-xl bg-[#DAA520] text-[#1A2126] font-bold text-sm shadow cursor-pointer hover:bg-[#c59319]"
            >
              Done & Close
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
            <Utensils className="w-12 h-12 text-stone-600" />
            <h3 className="font-serif-heading text-lg font-bold text-stone-300">
              Your Order Basket is Empty
            </h3>
            <p className="text-xs text-stone-500">
              Browse our wood-fired pizzas, royal biryanis, and wok noodles to add items to your basket.
            </p>
          </div>
        ) : (
          <>
            {/* Order Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-white/10">
              {cart.map(({ item, quantity, specialInstructions }) => (
                <div key={item.id} className="pt-4 first:pt-0 flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start justify-between">
                      <h4 className="font-bold text-sm text-stone-200">{item.name}</h4>
                      <span className="font-bold text-xs text-[#DAA520]">
                        ${(item.price * quantity).toFixed(2)}
                      </span>
                    </div>

                    {specialInstructions && (
                      <p className="text-[11px] text-stone-400 italic">
                        Note: {specialInstructions}
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2 bg-black/40 rounded-lg p-1 border border-stone-800">
                        <button
                          onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                          className="p-1 hover:bg-white/10 rounded text-stone-300 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold px-2">{quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                          className="p-1 hover:bg-white/10 rounded text-stone-300 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onUpdateQuantity(item.id, 0)}
                        className="text-red-400 hover:text-red-300 text-xs p-1 cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Summary & Checkout */}
            <div className="p-6 border-t border-white/10 bg-[#141A1E] space-y-4">
              {/* Dining Option Toggle */}
              <div className="grid grid-cols-2 gap-2 bg-black/40 p-1 rounded-xl border border-stone-800 text-xs">
                <button
                  onClick={() => setDiningOption('dine-in')}
                  className={`py-2 rounded-lg font-bold transition-all cursor-pointer ${
                    diningOption === 'dine-in' ? 'bg-[#E2725B] text-white shadow' : 'text-stone-400'
                  }`}
                >
                  Dine-In / Table
                </button>
                <button
                  onClick={() => setDiningOption('takeout')}
                  className={`py-2 rounded-lg font-bold transition-all cursor-pointer ${
                    diningOption === 'takeout' ? 'bg-[#E2725B] text-white shadow' : 'text-stone-400'
                  }`}
                >
                  Takeout Pick-Up
                </button>
              </div>

              {/* Tip Selection */}
              <div className="flex items-center justify-between text-xs text-stone-300">
                <span>Chef & Staff Tip:</span>
                <div className="flex gap-1">
                  {[10, 15, 18, 20].map((pct) => (
                    <button
                      key={pct}
                      onClick={() => setTipPercentage(pct)}
                      className={`px-2.5 py-1 rounded-lg border text-xs font-bold transition-colors cursor-pointer ${
                        tipPercentage === pct
                          ? 'bg-[#DAA520] text-[#1A2126] border-[#DAA520]'
                          : 'bg-black/20 text-stone-400 border-stone-700'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Math breakdown */}
              <div className="space-y-1.5 text-xs text-stone-400 border-t border-white/5 pt-3">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>NYC Sales Tax (8.875%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Gratuity ({tipPercentage}%):</span>
                  <span>${tipAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-extrabold text-base text-[#FFFDD0] pt-2 border-t border-white/10">
                  <span>Total Amount:</span>
                  <span className="text-[#DAA520]">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#E2725B] to-[#DAA520] text-white font-bold text-sm shadow-xl hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Submit Order To Kitchen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
