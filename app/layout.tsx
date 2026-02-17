import type { Metadata } from "next";
import "./globals.css";
import ScrollCarouselProvider from "@/components/ScrollCarousel";
import { LoadingProvider } from "@/components/LoadingProvider";

export const metadata: Metadata = {
  title: "Valentine's Day Shop",
  description: "Discover unique gifts and romantic presents for Valentine's Day",
  openGraph: {
    title: "Valentine's Day Shop",
    description: "Discover unique gifts and romantic presents for Valentine's Day",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const totalSections = 5;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <script type="importmap">{`
          {
            "imports": {
              "three": "https://cdn.jsdelivr.net/npm/three@r128/build/three.module.js",
              "three/addons/": "https://cdn.jsdelivr.net/npm/three@r128/examples/jsm/"
            }
          }
        `}</script>
        <script async src="https://cdn.jsdelivr.net/npm/@google/model-viewer/dist/model-viewer.min.js"></script>
      </head>
      <body className="antialiased">
        <LoadingProvider>
          <ScrollCarouselProvider totalSections={totalSections}>
            {children}
          </ScrollCarouselProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
