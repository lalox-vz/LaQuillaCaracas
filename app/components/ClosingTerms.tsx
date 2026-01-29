import React from 'react';
import { Clock, Banknote } from 'lucide-react';

export default function ClosingTerms() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-neutral-900 border-t border-[#e5e5e5]/10">
            <div className="max-w-4xl mx-auto text-center">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-[#0a0a0a] p-6 rounded border border-[#e5e5e5]/10 flex flex-col items-center">
                        <Clock className="w-8 h-8 text-[#C5A059] mb-4" />
                        <h4 className="text-[#e5e5e5] font-bold mb-2">Tiempo de Construcción</h4>
                        <p className="text-[#e5e5e5]/60">4 Semanas exactas</p>
                    </div>
                    <div className="bg-[#0a0a0a] p-6 rounded border border-[#e5e5e5]/10 flex flex-col items-center">
                        <Banknote className="w-8 h-8 text-[#C5A059] mb-4" />
                        <h4 className="text-[#e5e5e5] font-bold mb-2">Forma de Pago</h4>
                        <p className="text-[#e5e5e5]/60">50% Arranque, 50% Contra Entrega</p>
                    </div>
                </div>

                <a
                    href="https://wa.me/34650969466?text=Hola%2C%20estoy%20listo%20para%20iniciar%20la%20construcci%C3%B3n%20de%20la%20Fase%201%20de%20La%20Quilla."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#C5A059] hover:bg-[#b08d4b] text-[#0a0a0a] font-bold text-lg px-12 py-5 rounded-lg shadow-lg hover:shadow-[#C5A059]/20 transition-all transform hover:-translate-y-1"
                >
                    Iniciar Construcción de Fase 1
                </a>

                <p className="text-[#e5e5e5]/30 text-xs mt-8">
                    Propuesta válida por 7 días. IronLith Development.
                </p>
            </div>
        </section>
    );
}
