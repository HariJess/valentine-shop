'use client';

import React from 'react';

export function LoadingDiamonds() {
  const diamonds = Array.from({ length: 7 });

  return (
    <div className="flex items-center justify-center gap-2">
      {diamonds.map((_, i) => (
        <span
          key={i}
          className="diamond"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}

      <style jsx>{`
        .diamond {
          width: 10px;
          height: 10px;
          display: inline-block;
          transform: rotate(45deg);
          border-radius: 2px;
          background: linear-gradient(135deg, #ffb3d9 0%, #ff4fa3 45%, #b1005a 100%);
          box-shadow:
            0 0 8px rgba(255, 79, 163, 0.35),
            0 0 18px rgba(255, 79, 163, 0.18);
          animation: pulse 1.1s ease-in-out infinite;
        }

        .diamond:nth-child(2n) {
          opacity: 0.8;
          transform: rotate(45deg) scale(0.9);
        }

        @keyframes pulse {
          0%,
          100% {
            transform: rotate(45deg) scale(0.75);
            opacity: 0.45;
          }
          50% {
            transform: rotate(45deg) scale(1.15);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '32px',
        background: 'linear-gradient(135deg, #fce4ec 0%, #fdf0f5 40%, #fce8f0 70%, #f8d7e8 100%)',
        width: '100%',
        height: '100%',
        minHeight: '100vh',
      }}
      className='Z-50'
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');

        @keyframes diamond-pulse {
          0%, 100% { transform: scale(1) rotate(45deg); opacity: 0.6; }
          50% { transform: scale(1.35) rotate(45deg); opacity: 1; }
        }

        .loading-text {
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-weight: 300;
          font-size: 18px;
          letter-spacing: 0.55em;
          color: #c9819e;
          text-transform: uppercase;
        }

        .diamonds-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .diamond {
          width: 12px;
          height: 12px;
          transform: rotate(45deg);
          animation: diamond-pulse 1.4s ease-in-out infinite;
          border-radius: 2px;
        }

        /* sizes */
        .diamond-sm { width: 9px; height: 9px; }
        .diamond-md { width: 13px; height: 13px; }
        .diamond-lg { width: 17px; height: 17px; }

        /* colors — alternating pinks */
        .diamond-light { background: #f4b8cc; }
        .diamond-mid   { background: #e8799e; }
        .diamond-deep  { background: #d94f7e; }

        /* staggered delays */
        .d1 { animation-delay: 0.00s; }
        .d2 { animation-delay: 0.18s; }
        .d3 { animation-delay: 0.36s; }
        .d4 { animation-delay: 0.54s; }
        .d5 { animation-delay: 0.72s; }
        .d6 { animation-delay: 0.90s; }
        .d7 { animation-delay: 1.08s; }
      `}</style>

      {/* "LOADING" text */}
      <span className="loading-text">L O A D I N G</span>

      {/* Diamond row — 7 gems matching the image */}
      <LoadingDiamonds />
    </div>
  );
}