import { roboto } from "./ui/fonts";
import "./globals.css";
import Header from "./ui/app-header";
import Banner from "./ui/app-banner";
import Footer from "./ui/app-footer";
import Script from "next/script";

export const metadata = {
  title: "Ichime",
  description: "Product of Ichime project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* Header */}
        <Header />
        <div className="mt-[60px] md:mt-[100px] lg:mt-[120px]">
          <Banner />
          {/* Banner */}
          {children}
          {/* Footer */}
          <Footer />
        </div>
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        />
        <Script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        />
      </body>
    </html>
  );
}
