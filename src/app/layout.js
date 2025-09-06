import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./globals.css"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
