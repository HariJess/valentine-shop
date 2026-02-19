import React, { useState } from 'react';
import { Book, BookOpen, ShoppingCart, HandHeart } from 'lucide-react';

type TabKey = 'details' | 'catalogue' | 'add' | 'favorite';

type Props = {
  active?: TabKey;
  defaultActive?: TabKey;
  onChange?: (tab: TabKey) => void;
  cartCount?: number;
  className?: string;
  fixed?: boolean;
};

export default function BottomNavBar({
  active: controlledActive,
  defaultActive,
  onChange,
  cartCount = 0,
  className = '',
  fixed = true,
}: Props) {
  const [internalActive, setInternalActive] = useState<TabKey | undefined>(defaultActive);
  const active = controlledActive ?? internalActive;

  function handleSelect(tab: TabKey) {
    if (!controlledActive) setInternalActive(tab);
    onChange?.(tab);
  }

  const baseBar = `w-full max-w-3xl mx-auto flex gap-1 items-center justify-between px-3 py-2 shadow-xl ${className}`;

  return (
    <nav
      aria-label="Bottom navigation"
      className={`${fixed ? 'fixed bottom-4 left-1/2 transform -translate-x-1/2' : ''}`}
      style={{ zIndex: 60 }}
    >
      <div
        className={`text-white ${baseBar}`}
        // blue bar similar to the example image
      >
        {/* Details */}
        <button
          type="button"
          aria-pressed={active === 'details'}
          aria-label="Details"
          onClick={() => handleSelect('details')}
          className="relative flex items-center justify-center"
        >
          {active === 'details' ? (
            <span className="flex items-center gap-2 bg-white text-red-950 px-3 py-2 rounded-full shadow-sm">
              <Book size={15} />
              <span className="text-[8px] font-semibold uppercase">Details</span>
            </span>
          ) : (
            <span className="p-2 rounded-full bg-red-950/70 transition-colors">
              <Book size={15} />
            </span>
          )}
        </button>

        {/* Catalogue */}
        <button
          type="button"
          aria-pressed={active === 'catalogue'}
          aria-label="Catalogue"
          onClick={() => handleSelect('catalogue')}
          className="relative flex items-center justify-center"
        >
          {active === 'catalogue' ? (
            <span className="flex items-center gap-2 bg-white text-red-950 px-3 py-2 rounded-full shadow-sm">
              <BookOpen size={15} />
              <span className="text-[8px] font-semibold uppercase">Catalogue</span>
            </span>
          ) : (
            <span className="p-2 rounded-full bg-red-950/70 transition-colors">
              <BookOpen size={15} />
            </span>
          )}
        </button>

        {/* Favorite */}
        <button
          type="button"
          aria-pressed={active === 'favorite'}
          aria-label="Favorite"
          onClick={() => handleSelect('favorite')}
          className="relative flex items-center justify-center"
        >
          {active === 'favorite' ? (
            <span className="flex items-center gap-2 bg-white text-red-950 px-3 py-2 rounded-full shadow-sm">
              <HandHeart size={15} />
              <span className="text-[8px] font-semibold uppercase">Favorite</span>
            </span>
          ) : (
            <span className="p-2 rounded-full bg-red-950/70 transition-colors relative">
              <HandHeart size={15} />
            </span>
          )}
        </button>
        
        {/* Add to cart */}
        <button
          type="button"
          aria-pressed={active === 'add'}
          aria-label="Add to cart"
          onClick={() => handleSelect('add')}
          className="relative flex items-center justify-center"
        >
          {active === 'add' ? (
            <span className="flex items-center gap-2 bg-white text-red-950 px-3 py-2 rounded-full shadow-sm">
              <ShoppingCart size={15} />
              <span className="text-[8px] font-semibold uppercase">Add to cart</span>
            </span>
          ) : (
            <span className="p-2 rounded-full bg-red-950/70 transition-colors relative">
              <ShoppingCart size={15} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-4 text-[11px] leading-4 px-1 rounded-full bg-red-600 text-white flex items-center justify-center">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
