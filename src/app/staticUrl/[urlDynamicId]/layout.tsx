import { Edu_NSW_ACT_Foundation } from "next/font/google";
import "./style.css";

const edu_NSW_ACT_Foundation = Edu_NSW_ACT_Foundation({//nice one
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={edu_NSW_ACT_Foundation.className}>{children}</body>
    </html>
  );
}
