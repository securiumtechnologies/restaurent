import React, { useState } from 'react';
import { ReservationData } from '../types';
import { X, Calendar, CheckCircle2, Clock, Users, Sparkles } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    guests: 2,
    seatingPreference: 'indoor',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#1A2126] text-white rounded-3xl overflow-hidden shadow-2xl border border-[#DAA520]/40 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-stone-300 hover:text-white hover:bg-[#E2725B] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 pr-6">
          <span className="text-[#DAA520] font-semibold text-xs uppercase tracking-widest flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Table Booking
          </span>
          <h2 className="font-serif-heading text-2xl font-bold text-[#FFFDD0]">
            Reserve Your Dining Experience
          </h2>
        </div>

        {submitted ? (
          <div className="bg-emerald-950/80 border border-emerald-500/40 p-6 rounded-2xl space-y-4 text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="font-serif-heading text-xl font-bold text-emerald-200">
              Table Reserved!
            </h3>
            <p className="text-xs text-emerald-300 leading-relaxed">
              Thank you, <span className="font-bold text-white">{formData.name}</span>! We’ve reserved a table for <span className="font-bold text-white">{formData.guests} guests</span> on <span className="font-bold text-white">{formData.date}</span> at <span className="font-bold text-white">{formData.time}</span>.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-[#DAA520] text-[#1A2126] font-bold text-xs shadow cursor-pointer hover:bg-[#c59319]"
            >
              Close & Return to Browsing
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-stone-300 font-semibold mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Eleanor Vance"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-[#DAA520]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-300 font-semibold mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="eleanor@example.com"
                  className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-[#DAA520]"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-semibold mb-1">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-[#DAA520]"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-stone-300 font-semibold mb-1">Date *</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-2 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-[#DAA520]"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-semibold mb-1">Time *</label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-2 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-[#DAA520]"
                >
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-300 font-semibold mb-1">Guests *</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                  className="w-full px-2 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-[#DAA520]"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} Guests
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-stone-300 font-semibold mb-1">Seating Area</label>
              <select
                value={formData.seatingPreference}
                onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value as any })}
                className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-[#DAA520]"
              >
                <option value="indoor">Main Dining Hall (Warm Terracotta)</option>
                <option value="patio">Lush Garden Patio (Heated Outdoors)</option>
                <option value="chefs-counter">Chef's Open Counter (Wood Oven View)</option>
                <option value="private-booth">Private Velvet Booth</option>
              </select>
            </div>

            <div>
              <label className="block text-stone-300 font-semibold mb-1">Special Requests</label>
              <textarea
                rows={2}
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                placeholder="Anniversary, dietary restrictions..."
                className="w-full px-3 py-2 rounded-xl bg-black/40 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-[#DAA520]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E2725B] to-[#DAA520] text-white font-bold text-sm shadow-xl hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Confirm Table Reservation</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
