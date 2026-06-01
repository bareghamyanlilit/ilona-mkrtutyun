import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Իլոնա",
  description: "Իլոնա",
  openGraph: {
    title: "Իլոնայի սուրբ մկրտության հրավիրատոմս",
    description: "Հրավիրատոմս",
    url: "https://ilona-mkrtutyun.vercel.app",
    siteName: "Իլոնա",
    images: [
      {
        url: "/img2.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}
      >
        {children}
      </body>
    </html>
  );
}
