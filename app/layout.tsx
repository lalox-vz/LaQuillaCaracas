import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ['400', '600', '700'],
    variable: '--font-inter',
    display: 'swap',
    preload: true,
});

export const metadata: Metadata = {
    metadataBase: new URL('https://la-quilla-caracas.vercel.app'),
    title: "La Quilla Caracas",
    description: "Propuesta de Arquitectura Digital por IronLith — Digitalización de Legado (Fase 1).",
    keywords: "La Quilla, Mall Digital, Arquitectura Premium, IronLith, Digitalización, Chacao, Venezuela",
    authors: [{ name: "IronLith" }],
    creator: "IronLith",
    publisher: "IronLith",
    robots: {
        index: false,
        follow: false,
    },
    openGraph: {
        title: "La Quilla Caracas",
        description: "Propuesta de Arquitectura Digital por IronLith — Digitalización de Legado (Fase 1).",
        type: "website",
        url: "/",
        siteName: "La Quilla - IronLith",
        locale: "es_VE",
        images: [
            {
                url: "/og/la-quilla-propuesta-og.png",
                width: 1200,
                height: 630,
                alt: "La Quilla Caracas — Propuesta IronLith",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "La Quilla Caracas",
        description: "Propuesta de Arquitectura Digital por IronLith — Digitalización de Legado (Fase 1).",
        images: ["/og/la-quilla-propuesta-og.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className={inter.variable}>
            <body className="font-sans">
                {children}
            </body>
        </html>
    );
}
