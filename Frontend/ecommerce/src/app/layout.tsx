import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./Components/Nav/nav";
import Footer from "./Components/Footer/footer";
import ReduxProvider from "@/app/store/providers";
import { store } from "./store";

const geistSans = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Poppins-Black.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-Mart",
  description: "E-commerce website",
  icons: { icon: "🛒" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider store={store}>
          <NavBar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
