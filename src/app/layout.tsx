import "./globals.css";
import { Providers } from "../providers/Queryprovider";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://taskify-workin-taskify.vercel.app/"),
  title: "taskify — 칸반 보드 기반 협업 ",
  description: "협업에 관한 모든 건 taskify로 끝내세요.",
  openGraph: {
    title: "taskify",
    description: "협업에 관한 모든 건 taskify로 끝내세요.",
    images: {
      url: "/meta_data_image.png",
      width: 1200,
      height: 630,
      alt: "taskify 서비스 소개 이미지",
    },
  },
  icons: {
    icon: "/logo.svg",
  },
};
export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-background custom-scrollbar">
        <Providers>
          {children}
          {modal}
        </Providers>
      </body>
    </html>
  );
}
