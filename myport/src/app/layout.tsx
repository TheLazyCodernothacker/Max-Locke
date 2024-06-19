import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Max Locke - Creator of Subatomic.js",
  description:
    "Hi I'm Max Locke, creator of Subatomic.js, a fullstack framework for building web apps. I'm a fullstack developer, YouTuber, Musician, and much more. I'm 14 and love learning and I'm always looking to learn more skills. My skills range from HTML, CSS, JS, React, Next.js, Node.js, Express.js, MongoDB, Python, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
