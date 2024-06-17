import { roboto } from "./ui/fonts";
import "./globals.css";
import Header from "./ui/app-header";
import Banner from "./ui/app-banner";
import Footer from "./ui/app-footer";

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
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </body>
    </html>
  );
}
