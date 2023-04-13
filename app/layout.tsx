import "./globals.css";
import { ScrollTo } from "./utils/ScrollTo";
import { Poppins } from "next/font/google";
const font = Poppins({
    subsets: ["latin"],
    weight: ["500", "600"],
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
      <div className="flex justify-center fixed bottom-0 inset-x-0 mb-12"><ScrollTo id="content" label="Go to content" /></div> 
      </body>
      
    </html>
  );
}
