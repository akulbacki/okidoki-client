import type { Metadata } from "next";
import "@/app/globals.css";

import { Header } from "@/app/components/layout/Header";

export const metadata: Metadata = {
  title: "Docs - OkiDoki",
  description: "Open source knowledge base",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <div className="grow">
            <div className="flex flex-col h-full w-full">
              <Header />
              <div className="flex flex-row h-full relative">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
