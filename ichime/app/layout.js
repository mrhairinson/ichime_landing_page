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
        <div >
          <Banner />
          {/* Banner */}
          {children}
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
