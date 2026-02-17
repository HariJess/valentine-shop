// global.d.ts
import type React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // typage simple mais utile pour autocomplétion + sécurité
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        'camera-controls'?: boolean | string;
        'auto-rotate'?: boolean | string;
        exposure?: number | string;
        'shadow-intensity'?: number | string;
        ar?: boolean | string;
        poster?: string;
      };
    }
  }
}

export {};
