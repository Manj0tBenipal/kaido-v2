import type { Metadata } from "next";

import "@/styles/globals.css";
import Navbar from "@/components/client/Navbar";
import Actions from "@/components/server/Actions";
import SocialLinks from "@/components/server/SocialLinks";

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
      <body>
        <Navbar>
          <Actions isInSidebar={false} />
          <SocialLinks />
        </Navbar>

        {children}
      </body>
    </html>
  );
}
