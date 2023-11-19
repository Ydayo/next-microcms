import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import styles from "@/styles/global.module.css";

export const metadata: Metadata = {
  title: "YYY-Blog",
  description: "プログラミング情報を発信",
  icons: [{ rel: "icon", url: "/icon/next-js.png" }],
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${styles.sanitalize} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
