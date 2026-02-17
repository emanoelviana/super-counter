import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Super Counter",
  description: "A simple counter to manage small tasks",
};

export default function RootLayout({ children }) {
  return (
    <html className="w-full h-full">
      <body
        className={`${openSans.className} w-full h-full bg-zinc-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
