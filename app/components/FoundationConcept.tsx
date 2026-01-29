import React from 'react';
import { Ruler, Layout } from 'lucide-react';

export default function FoundationConcept() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#e5e5e5]/10">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 flex items-center justify-center border border-[#C5A059]/30">
                        <Ruler className="w-8 h-8 text-[#C5A059]" />
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[#e5e5e5] mb-8">
                    Primero los Cimientos, luego el Rascacielos.
                </h2>

                <div className="text-xl text-[#e5e5e5]/80 leading-relaxed space-y-6">
                    <p>
                        "Sabemos que su visión final es grande: Wi-Fi que genere dinero, vallas publicitarias digitales y ventas en línea. Es un plan brillante. Pero, al igual que en la construcción, no podemos colocar el techo sin tener las columnas.
                    </p>
                    <p className="font-semibold text-[#C5A059]">
                        Esta propuesta es exclusivamente para la Fase 1: Los Cimientos.
                    </p>
                    <p>
                        Vamos a construir el Plano Digital (Mapa) y definir la Imagen (Marca). Sin esto, las ideas futuras no se sostendrán."
                    </p>
                </div>
            </div>
        </section>
    );
}
