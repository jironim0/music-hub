import type { Metadata } from "next";
import { Navigation } from "@/shared/components/shared";

export const metadata: Metadata = {
  title: "Next Spotify | General",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode
}>) {
  return (
    <main className="mx-auto flex justify-start max-w-[1274px] h-[1000px] bg-[#101010] mt-[20px] rounded-t-[10px]">
        <Navigation />
      {children}
    </main>
  );
}