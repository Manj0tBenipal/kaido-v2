import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kaido- Watch Free anime",
  description:
    "Kaido is a free anime streaming website, you can watch anime, explore genres, rankings and enjoy movies all at zero cost.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
