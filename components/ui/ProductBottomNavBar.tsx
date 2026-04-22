import React, { useState } from "react";
import { Book, BookOpen, ShoppingCart, Heart, Sparkles } from "lucide-react";

type TabKey = "details" | "catalogue" | "add" | "favorite";

type Props = {
  active?: TabKey;
  defaultActive?: TabKey;
  onChange?: (tab: TabKey) => void;
  cartCount?: number;
  className?: string;
  fixed?: boolean;
};

export default function ProductBottomNavBar({
  active: controlledActive,
  defaultActive = "catalogue",
  onChange,
  cartCount = 0,
  className = "",
  fixed = true,
}: Props) {
  const [internalActive, setInternalActive] = useState<TabKey>(defaultActive);
  const active = controlledActive ?? internalActive;

  function handleSelect(tab: TabKey) {
    if (controlledActive === undefined) setInternalActive(tab);
    onChange?.(tab);
  }

  const items = [
    {
      key: "details" as const,
      label: "Details",
      short: "Info",
      icon: Book,
    },
    {
      key: "catalogue" as const,
      label: "Catalogue",
      short: "Browse",
      icon: BookOpen,
    },
    {
      key: "favorite" as const,
      label: "Favorite",
      short: "Like",
      icon: Heart,
    },
    {
      key: "add" as const,
      label: "Add to cart",
      short: "Buy now",
      icon: ShoppingCart,
    },
  ];

  return (
    <nav
      aria-label="Bottom navigation"
      className={`${fixed ? "fixed bottom-4 left-1/2 -translate-x-1/2" : ""} z-50 w-full px-4`}
    >
      <div
        className={`mx-auto w-full max-w-xl border border-[#F4D0A4]/80 bg-white/20 px-3 py-3 shadow-[0_18px_60px_rgba(255,105,180,0.14)] backdrop-blur-xl ${className}`}
      >
        <div className="grid grid-cols-4 gap-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.key;
            const isAdd = item.key === "add";

            return (
              <button
                key={item.key}
                type="button"
                aria-pressed={isActive}
                aria-label={item.label}
                onClick={() => handleSelect(item.key)}
                className={[
                  "group relative flex items-center justify-center overflow-hidden rounded-[22px] px-3 py-3 text-left transition-all duration-300",
                  isActive
                    ? "bg-[#F4D0A4]/30 shadow-[0_10px_30px_rgba(255,105,180,0.16)]"
                    : "bg-white/20 bg-[#F4D0A4]/10 hover:bg-white/30",
                  isAdd ? "ring-1 ring-pink-200/50" : "",
                ].join(" ")}
              >

                {/* Icon and Text */}
                <div className="flex items-center gap-2">
                  <span
                    className={[
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                      isActive
                        ? "bg-gradient-to-br from-[#720B15] to-[#720B15] text-white shadow-[0_10px_25px_rgba(236,72,153,0.35)]"
                        : "bg-slate-100 text-slate-500 group-hover:bg-[#720B15]/20 group-hover:text-[#720B15]",
                    ].join(" ")}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </span>

                  <div className="min-w-0">
                    <span
                      className={[
                        "block truncate text-[11px] font-semibold tracking-wide",
                        isActive ? "text-slate-900" : "text-slate-600",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>
                    <span className="block text-[9px] uppercase tracking-[0.22em] text-[#F4D0A4]">
                      {item.short}
                    </span>
                  </div>
                </div>
                {/* Cart Count */}
                {item.key === "add" && cartCount > 0 && (
                  <span className="absolute right-2 top-2 min-w-[18px] rounded-full bg-gradient-to-br from-pink-500 to-rose-500 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-white shadow-md">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}