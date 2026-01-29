import React from 'react';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#e5e5e5]/10 h-16 flex items-center justify-between px-6 lg:px-12">
            <div className="font-bold text-xl tracking-wider text-[#C5A059]">
                IRONLITH
            </div>
            <div className="text-xs md:text-sm text-[#e5e5e5]/60 uppercase tracking-widest font-light">
                Propuesta Privada de Desarrollo: Fase 1
            </div>
        </header>
    );
}
