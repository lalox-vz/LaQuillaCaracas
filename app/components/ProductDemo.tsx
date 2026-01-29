import React from 'react';
import { Zap, Monitor, Smartphone } from 'lucide-react';

export default function ProductDemo() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-neutral-900/50 border-t border-[#e5e5e5]/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual */}
                    <div className="relative aspect-video bg-[#0a0a0a] rounded-lg border border-[#e5e5e5]/10 shadow-2xl overflow-hidden flex items-center justify-center group">
                        <div className="absolute inset-0 bg-[#C5A059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {/* Simulated Map UI */}
                        <div className="w-3/4 h-3/4 border border-[#e5e5e5]/20 rounded flex items-center justify-center relative">
                            <span className="text-[#e5e5e5]/40 text-sm animate-pulse">Cargando Mapa de Alta Precisión...</span>
                            {/* Fake map elements */}
                            <div className="absolute top-4 left-4 w-8 h-8 rounded bg-[#C5A059] opacity-20"></div>
                            <div className="absolute bottom-8 right-12 w-12 h-12 rounded bg-[#C5A059] opacity-20"></div>
                            <div className="absolute top-1/2 left-1/3 w-24 h-16 rounded bg-[#e5e5e5] opacity-5 border border-[#e5e5e5]/20"></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#e5e5e5] mb-12">
                            Su Herramienta de Trabajo <span className="text-[#C5A059]">(El Mapa Vivo)</span>.
                        </h2>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded bg-[#0a0a0a] border border-[#e5e5e5]/10 flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-[#C5A059]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#e5e5e5] mb-2">Carga Instantánea</h3>
                                    <p className="text-[#e5e5e5]/70">"El mapa abre tan rápido como prender la luz. Su cliente no espera."</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded bg-[#0a0a0a] border border-[#e5e5e5]/10 flex items-center justify-center">
                                    <Monitor className="w-6 h-6 text-[#C5A059]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#e5e5e5] mb-2">Control Total</h3>
                                    <p className="text-[#e5e5e5]/70">"Usted podrá ver qué locales están ocupados y cuáles disponibles."</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded bg-[#0a0a0a] border border-[#e5e5e5]/10 flex items-center justify-center">
                                    <Smartphone className="w-6 h-6 text-[#C5A059]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#e5e5e5] mb-2">Calidad Visual</h3>
                                    <p className="text-[#e5e5e5]/70">"Se ve nítido en cualquier pantalla, desde un celular viejo hasta un TV 4K."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
