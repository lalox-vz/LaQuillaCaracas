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
    title: "La Quilla | Propuesta de Digitalización - IronLith",
    description: "Arquitectura Alemana para el Mall del Nuevo Siglo. Propuesta de infraestructura digital premium por IronLith.",
    keywords: "La Quilla, Mall Digital, Arquitectura Premium, IronLith, Digitalización, Chacao, Venezuela",
    authors: [{ name: "IronLith" }],
    creator: "IronLith",
    publisher: "IronLith",
    robots: {
        index: false,
        follow: false,
    },
    openGraph: {
        title: "La Quilla | Propuesta Digital IronLith",
        description: "Arquitectura Alemana aplicada al desarrollo digital. Propuesta exclusiva de 3 fases.",
        type: "website",
        locale: "es_VE",
        siteName: "La Quilla - IronLith",
    },
    twitter: {
        card: "summary_large_image",
        title: "La Quilla | Propuesta Digital IronLith",
        description: "Arquitectura Alemana para el Mall del Nuevo Siglo",
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
