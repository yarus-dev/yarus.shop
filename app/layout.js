import { Rubik } from "next/font/google";
import "@/app/globals.css";

export const dynamic = "force-dynamic";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk-UA" className="size-full">
      <body
        className={`${rubik.variable} font-sans antialiased min-h-screen size-full relative overflow-y-scroll`}
      >
        {children}
      </body>
    </html>
  );
}
