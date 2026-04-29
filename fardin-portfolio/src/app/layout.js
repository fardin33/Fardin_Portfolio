import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Fardin Hassan | Portfolio",
  description: "Personal portfolio of Fardin Hassan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="fardinTheme">
      <body className={`${poppins.className} bg-base-100 text-neutral`}>
        <Navbar />
        {children}
        <Footer />
        <ToastContainer position="top-right" autoClose={2500} />
      </body>
    </html>
  );
}
