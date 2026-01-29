import React from 'react';
import { ArrowRight, Wifi, ShoppingCart } from 'lucide-react';

export default function MasterPlanSimple() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-[#0a0a0a]">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#e5e5e5] mb-6 text-center">
                    ¿Qué viene después? <span className="text-[#C5A059]">(Fases Futuras)</span>
                </h2>

                <p className="text-xl text-[#e5e5e5]/80 text-center mb-16 max-w-3xl mx-auto">
                    "Una vez terminemos los cimientos (Fase 1), el edificio digital estará listo para crecer:"
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Phase 2 */}
                    <div className="border border-[#e5e5e5]/10 rounded-lg p-8 bg-neutral-900/30 opacity-60 hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-[#e5e5e5]/10 flex items-center justify-center">
                                <span className="font-bold text-[#e5e5e5]">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#e5e5e5]">Fase 2: Monetización</h3>
                        </div>
                        <div className="flex items-start gap-3 pl-14">
                            <Wifi className="w-5 h-5 text-[#C5A059] mt-1" />
                            <p className="text-[#e5e5e5]/60">Wi-Fi inteligente y Vallas Digitales.</p>
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="border border-[#e5e5e5]/10 rounded-lg p-8 bg-neutral-900/30 opacity-60 hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-[#e5e5e5]/10 flex items-center justify-center">
                                <span className="font-bold text-[#e5e5e5]">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#e5e5e5]">Fase 3: Mercado</h3>
                        </div>
                        <div className="flex items-start gap-3 pl-14">
                            <ShoppingCart className="w-5 h-5 text-[#C5A059] mt-1" />
                            <p className="text-[#e5e5e5]/60">Ventas en línea y Delivery.</p>
                        </div>
                    </div>
                </div>

                <p className="text-center text-[#e5e5e5]/40 text-sm mt-12 italic border-t border-[#e5e5e5]/10 pt-8 w-max mx-auto px-12">
                    "Se cotizan por separado al terminar los cimientos."
                </p>
            </div>
        </section>
    );
}
