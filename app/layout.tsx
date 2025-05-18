import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Coolex link limeted company",
  description: "Best place to get cars, bikes and home appliances from Japan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
