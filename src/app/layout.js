import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { inter } from "@/styles/fonts";
import logo from "../../public/logo.svg";

export const metadata = {
  title: "IE&A",
  description: "INFLUENCE EXCHANGE CONFEX AND AWARDS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-foreground bg-background ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
