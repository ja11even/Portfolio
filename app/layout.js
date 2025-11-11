import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";

const gilroy = localFont({
  src: "./../public/fonts/Gilroy-Regular.woff2",
  display: "swap",
  variable: "--font-gilroy",
});
export const metadata = {
  title: "Elijah Ogwo",
  description: "Elijah's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={gilroy.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
