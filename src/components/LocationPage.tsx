import React, { useState } from 'react';
import { ReservationData } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Users,
  CheckCircle2,
  Navigation,
  Sparkles,
  Info
} from 'lucide-react';

interface LocationPageProps {
  initialReservation?: boolean;
}

export const LocationPage: React.FC<LocationPageProps> = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-block text-[#E2725B] font-bold text-xs uppercase tracking-widest bg-[#E2725B]/10 px-4 py-1.5 rounded-full border border-[#E2725B]/20">
          Find Us & Book A Table
        </span>
        <h1 className="font-serif-heading text-4xl sm:text-5xl font-extrabold text-[#36454F]">
          Location, Hours & Reservations
        </h1>
        <p className="text-stone-600 text-base leading-relaxed">
          Situated in the heart of the Gourmet Quarter. Join us for intimate dinners, family gatherings, or chef's table tasting sessions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Col: Contact Details, Map & Hours (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Contact & Address Cards */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200/80 space-y-6">
            <h2 className="font-serif-heading text-2xl font-bold text-[#36454F] border-b border-stone-100 pb-3">
              Contact & Address
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200">
                <div className="w-10 h-10 rounded-xl bg-[#E2725B] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#36454F]">Our Address</h4>
                  <p className="text-stone-600 mt-1">{RESTAURANT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200">
                <div className="w-10 h-10 rounded-xl bg-[#DAA520] text-[#1A2126] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#36454F]">Direct Phone</h4>
                  <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-[#E2725B] hover:underline mt-1 block">
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200">
                <div className="w-10 h-10 rounded-xl bg-[#36454F] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#36454F]">Email Enquiries</h4>
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-[#E2725B] hover:underline mt-1 block">
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#36454F]">Valet & Parking</h4>
                  <p className="text-stone-600 mt-1">Complimentary valet parking available at our main entrance after 5:00 PM.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-stone-900 rounded-3xl overflow-hidden shadow-xl border border-stone-800 relative h-72">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
              alt="Map View"
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2126] via-transparent to-transparent" />

            {/* Custom Pin Card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#222D34]/95 backdrop-blur-md p-4 rounded-2xl border border-[#DAA520]/40 text-white text-center shadow-2xl space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#E2725B] text-white mx-auto flex items-center justify-center animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="font-serif-heading font-bold text-sm text-[#FFFDD0]">Savoria Bistro</p>
              <p className="text-[11px] text-stone-300">428 Culinary Ave, Gourmet Quarter</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1 px-3 py-1 rounded-lg bg-[#DAA520] text-[#1A2126] font-bold text-xs"
              >
                Open Directions in Google Maps
              </a>
            </div>
          </div>

          {/* Operating Hours Table */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200/80 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h2 className="font-serif-heading text-2xl font-bold text-[#36454F] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#E2725B]" />
                <span>Operating Hours</span>
              </h2>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open Today
              </span>
            </div>

            <div className="divide-y divide-stone-100 text-sm">
              {RESTAURANT_INFO.hours.map((h, i) => (
                <div key={i} className="py-2.5 flex items-center justify-between">
                  <span className={`font-medium ${h.day === 'Wednesday' ? 'text-[#E2725B] font-bold' : 'text-stone-700'}`}>
                    {h.day}
                  </span>
                  <span className="text-stone-600 font-mono text-xs">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Reservation Form (5 cols) */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 bg-white rounded-3xl p-8 shadow-2xl border-2 border-[#DAA520]/30 space-y-6">
            <div className="space-y-2 border-b border-stone-100 pb-4">
              <span className="text-[#DAA520] font-bold text-xs uppercase tracking-widest block">
                Instant Online Booking
              </span>
              <h2 className="font-serif-heading text-2xl font-bold text-[#36454F]">
                Reserve Your Table
              </h2>
              <p className="text-xs text-stone-500">
                Guaranteed seating confirmation. No booking fees required.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 text-emerald-900 border border-emerald-200 p-6 rounded-2xl space-y-4 text-center animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-serif-heading text-xl font-bold text-emerald-950">
                  Reservation Confirmed!
                </h3>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Thank you <span className="font-bold">{formData.name}</span>. We look forward to welcoming your party of <span className="font-bold">{formData.guests}</span> on <span className="font-bold">{formData.date}</span> at <span className="font-bold">{formData.time}</span>.
                </p>
                <div className="bg-white p-3 rounded-xl border border-emerald-200 text-left text-xs text-stone-600 space-y-1">
                  <p><strong>Seating:</strong> {formData.seatingPreference}</p>
                  <p><strong>Confirmation SMS sent to:</strong> {formData.phone}</p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer shadow"
                >
                  Book Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div>
                  <label className="block font-semibold text-stone-700 text-xs mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-[#E2725B]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-700 text-xs mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="eleanor@example.com"
                      className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-[#E2725B]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 text-xs mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-[#E2725B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-700 text-xs mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-2 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs focus:outline-none focus:border-[#E2725B]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 text-xs mb-1">
                      Time *
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-2 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs focus:outline-none focus:border-[#E2725B]"
                    >
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 text-xs mb-1">
                      Guests *
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full px-2 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs focus:outline-none focus:border-[#E2725B]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 text-xs mb-1">
                    Seating Area Preference
                  </label>
                  <select
                    value={formData.seatingPreference}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        seatingPreference: e.target.value as any,
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs focus:outline-none focus:border-[#E2725B]"
                  >
                    <option value="indoor">Main Dining Hall (Warm Terracotta)</option>
                    <option value="patio">Lush Garden Patio (Heated Outdoors)</option>
                    <option value="chefs-counter">Chef's Open Counter (Wood Oven View)</option>
                    <option value="private-booth">Private Velvet Booth</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 text-xs mb-1">
                    Special Requests & Dietary Notes
                  </label>
                  <textarea
                    rows={2}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="Anniversary, birthday, food allergies..."
                    className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs focus:outline-none focus:border-[#E2725B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E2725B] to-[#DAA520] text-white font-bold text-sm shadow-xl hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Reservation</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
