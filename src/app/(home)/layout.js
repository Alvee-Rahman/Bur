import { Barlow_Condensed} from "next/font/google";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import "../globals.css"
const inter = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className="">
          <header>
            <Navbar />
          </header>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
