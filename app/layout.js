import Header from "@/components/header";
import "./globals.css";
import Head from "next/head";
export const metadata = {
  title: "Elijah Ogwo",
  description: "Elijah's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://db.onlinewebfonts.com/c/1dc8ecd8056a5ea7aa7de1db42b5b639?family=Gilroy-Regular"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
