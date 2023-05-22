import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.scss";
import Link from "next/link";

export const metadata = {
  title: "My Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto px-2">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
