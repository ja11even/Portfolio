import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";

const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gilroy",
});

export const metadata = {
  title: "Elijah Ogwo",
  description: "Elijah's portfolio",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={gilroy.variable}>
      <body className={gilroy.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
