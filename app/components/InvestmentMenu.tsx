import React from 'react';
import { Check } from 'lucide-react';

export default function InvestmentMenu() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-neutral-900/30 border-t border-[#e5e5e5]/10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#e5e5e5] mb-16 text-center">
                    La Inversión
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* OPTION A */}
                    <div className="bg-[#0a0a0a] border border-[#e5e5e5]/10 p-8 rounded-lg flex flex-col hover:border-[#e5e5e5]/30 transition-colors">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-[#e5e5e5]">Opción A: Lo Funcional</h3>
                            <div className="text-[#C5A059] text-3xl font-bold mt-2">$3,000 USD</div>
                        </div>
                        <p className="text-[#e5e5e5]/70 italic mb-8 border-l-2 border-[#C5A059]/50 pl-4">
                            "El motor funciona perfecto, pero la pintura es la vieja."
                        </p>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-[#e5e5e5]/80">
                                <Check className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                                <span>Mapa Digital + Web Básica.</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#e5e5e5]/60 text-sm">
                                <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center">•</span>
                                <span>Nota: "Usamos su logo actual tal cual está."</span>
                            </li>
                        </ul>
                    </div>

                    {/* OPTION B - Highlighted */}
                    <div className="bg-[#121212] border border-[#C5A059] p-8 rounded-lg flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-[#C5A059]/10">
                        <div className="absolute top-0 right-0 bg-[#C5A059] text-[#0a0a0a] text-xs font-bold px-3 py-1 rounded-bl uppercase">
                            Recomendada
                        </div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-[#e5e5e5]">Opción B: Lo Profesional</h3>
                            <div className="text-[#C5A059] text-3xl font-bold mt-2">$4,500 USD</div>
                        </div>
                        <p className="text-[#e5e5e5]/70 italic mb-8 border-l-2 border-[#C5A059] pl-4">
                            "Motor nuevo y pintura nueva. El estándar de hoy."
                        </p>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-[#e5e5e5]">
                                <Check className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                                <span className="font-semibold">Todo lo de la A + Modernización de Logo (Refining).</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#e5e5e5]/80">
                                <Check className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                                <span>Beneficio: "Prepara el terreno para vender publicidad futura."</span>
                            </li>
                        </ul>
                    </div>

                    {/* OPTION C */}
                    <div className="bg-[#0a0a0a] border border-[#e5e5e5]/10 p-8 rounded-lg flex flex-col hover:border-[#C5A059]/50 transition-colors">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-[#C5A059]">Opción C: El Legado</h3>
                            <div className="text-[#e5e5e5] text-3xl font-bold mt-2">$8,500 USD</div>
                            <span className="text-[#e5e5e5]/40 text-sm">Founders' Vision</span>
                        </div>
                        <p className="text-[#e5e5e5]/70 italic mb-8 border-l-2 border-[#C5A059]/50 pl-4">
                            "Restauración de colección. Hacemos historia."
                        </p>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-[#e5e5e5]/80">
                                <Check className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                                <span>Mapa Avanzado + Reconstrucción Total de Marca + Manual de Identidad.</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#e5e5e5]">
                                <Check className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                                <span><strong className="text-[#C5A059]">Feature Exclusivo:</strong> "Galería 1937" (Sección web para exhibir fotos históricas de la familia y Chacao).</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
