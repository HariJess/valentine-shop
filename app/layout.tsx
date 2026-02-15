import type { Metadata } from "next";
import "./globals.css";
import ScrollCarouselProvider from "@/components/ScrollCarousel";

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
      </head>
      <body className="antialiased">
        <ScrollCarouselProvider totalSections={totalSections}>
          {children}
        </ScrollCarouselProvider>
      </body>
    </html>
  );
}
