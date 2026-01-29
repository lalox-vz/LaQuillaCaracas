import React from 'react';
import { CalendarClock, ShieldCheck, PaintBucket, Key } from 'lucide-react';

export default function ConstructionTimeline() {
    const weeks = [
        {
            week: "Semana 1",
            title: "Preparación del Terreno",
            desc: "Configuración y Seguridad",
            icon: <CalendarClock className="w-6 h-6 text-[#0a0a0a]" />
        },
        {
            week: "Semana 2",
            title: "Levantar Muros",
            desc: "Dibujo Digital del Mapa",
            icon: <PaintBucket className="w-6 h-6 text-[#0a0a0a]" />
        },
        {
            week: "Semana 3",
            title: "Control de Calidad",
            desc: "The Perfection Protocol - Pruebas extremas",
            icon: <ShieldCheck className="w-6 h-6 text-[#0a0a0a]" />
        },
        {
            week: "Semana 4",
            title: "Entrega de Llaves",
            desc: "Lanzamiento y Control",
            icon: <Key className="w-6 h-6 text-[#0a0a0a]" />
        }
    ];

    return (
        <section className="py-24 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#e5e5e5]/10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#e5e5e5] mb-16 text-center">
                    Plan de Trabajo: <span className="text-[#C5A059]">30 Días de Ingeniería</span>.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {weeks.map((item, index) => (
                        <div key={index} className="relative group">
                            {/* Connector Line (Desktop) */}
                            {index < weeks.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-[#e5e5e5]/20 z-0"></div>
                            )}

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${index === 3 ? 'bg-[#C5A059] ring-4 ring-[#C5A059]/20' : 'bg-[#e5e5e5] group-hover:bg-[#C5A059]'}`}>
                                    {item.icon}
                                </div>
                                <span className="text-[#C5A059] font-bold tracking-wider uppercase text-sm mb-2">{item.week}</span>
                                <h3 className="text-xl font-bold text-[#e5e5e5] mb-2">{item.title}</h3>
                                <p className="text-[#e5e5e5]/60 text-sm max-w-[200px]">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
