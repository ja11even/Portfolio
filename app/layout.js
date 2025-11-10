import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "Elijah Ogwo",
  description: "Elijah's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
