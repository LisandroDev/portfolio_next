import "./globals.css";
import { ScrollTo } from "./utils/ScrollTo";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google"
const font = Roboto({
  subsets: ["latin"],
  weight: ["500", "700"],
});
export const metadata = {
  title: "Lisandro Rubianes",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}

      </body>

    </html>
  );
}
