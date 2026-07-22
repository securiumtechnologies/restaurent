/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, MenuItem, CartItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { MenuPage } from './components/MenuPage';
import { GalleryPage } from './components/GalleryPage';
import { AboutUsPage } from './components/AboutUsPage';
import { LocationPage } from './components/LocationPage';
import { ReservationModal } from './components/ReservationModal';
import { DishDetailModal } from './components/DishDetailModal';
import { CartDrawer } from './components/CartDrawer';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (dish: MenuItem, quantity = 1, specialInstructions = '') => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.item.id === dish.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        if (specialInstructions) {
          updated[existingIndex].specialInstructions = specialInstructions;
        }
        return updated;
      } else {
        return [...prevCart, { item: dish, quantity, specialInstructions }];
      }
    });
  };

  const handleUpdateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.item.id !== dishId));
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.item.id === dishId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#36454F] font-sans selection:bg-[#E2725B] selection:text-white">
      {/* Navigation Header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        cartItemCount={cartItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Page View Renderer */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onSelectDish={(dish) => setSelectedDish(dish)}
            onAddToCart={(dish) => handleAddToCart(dish)}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}

        {activePage === 'menu' && (
          <MenuPage
            onSelectDish={(dish) => setSelectedDish(dish)}
            onAddToCart={(dish) => handleAddToCart(dish)}
          />
        )}

        {activePage === 'gallery' && <GalleryPage />}

        {activePage === 'about' && (
          <AboutUsPage
            setActivePage={setActivePage}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}

        {activePage === 'location' && <LocationPage />}
      </main>

      {/* Enhanced Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Modals & Drawers */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={handleAddToCart}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
