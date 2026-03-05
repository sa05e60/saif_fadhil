import type { Metadata } from "next";
import { Inter, Space_Grotesk, Cairo } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo" });

export const metadata: Metadata = {
    title: "Portfolio",
    description: "My portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${spaceGrotesk.variable} ${cairo.variable} bg-[#0A0505] overflow-y-scroll overflow-x-hidden max-w-[1855px] mx-auto`}
            >
                <Providers>
                    <StarsCanvas />
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
