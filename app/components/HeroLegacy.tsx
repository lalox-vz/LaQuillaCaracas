import React from 'react';

export default function HeroLegacy() {
    return (
        <section className="relative min-h-screen flex flex-col pt-16">
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Left: Old Photo / Heritage */}
                <div className="relative h-[50vh] lg:h-auto bg-neutral-900 border-b lg:border-b-0 lg:border-r border-[#e5e5e5]/10 overflow-hidden group">
                    <div className="absolute inset-0 bg-stone-900 flex items-center justify-center">
                        <span className="text-[#e5e5e5]/20 font-serif italic text-2xl">1937: Taller Mecánico Original</span>
                    </div>
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 lg:opacity-60" />
                    <div className="absolute bottom-8 left-8 right-8 text-[#e5e5e5]">
                        <p className="text-[#C5A059] text-sm uppercase tracking-widest mb-2 font-bold">1937 - 2026</p>
                        <h2 className="text-2xl md:text-3xl font-serif leading-tight">Honrando el trabajo de los fundadores con la tecnología del futuro.</h2>
                    </div>
                </div>

                {/* Right: Modern Map / Vision */}
                <div className="relative h-[50vh] lg:h-auto bg-[#0a0a0a] flex items-center justify-center p-8 lg:p-16">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e5e5e5] mb-8 leading-tight">
                            1937: El ADN de esta <span className="text-[#C5A059]">Esquina</span>.
                        </h1>
                        <div className="space-y-6 text-lg text-[#e5e5e5]/80 leading-relaxed text-justify font-light">
                            <p>
                                Mucho antes de ser un centro comercial, este suelo ya conocía el significado de la excelencia. En 1937, bajo el techo de un hogar alemán, el idioma que se hablaba era la disciplina. Aquí, en dos modestos puestos de mecánica, se reparaban motores con una precisión obsesiva, mientras el viejo Tranvía de los Valles del Tuy marcaba el ritmo de un Chacao que apenas despertaba entre haciendas de algodón.
                            </p>
                            <p>
                                El paisaje cambió. El asfalto cubrió la tierra y la casa familiar evolucionó hasta convertirse en los 14 locales que vemos hoy. Pero los cimientos invisibles nunca se movieron. Esa vocación de servicio, rectitud y esfuerzo europeo quedó sembrada en esta esquina, esperando el momento de florecer de nuevo con mayor fuerza.
                            </p>
                            <p>
                                Hoy, el proyecto <span className="text-white font-medium">'La Quilla de Caracas'</span> recoge ese legado. Lo que comenzó como un servicio en dos puestos de estacionamiento se ha transformado en un punto de encuentro vibrante donde la ciudad converge día a día. La escala ha crecido, pero la ambición es la misma: honrar el esfuerzo de quienes llegaron primero, convirtiendo este espacio transitado en la referencia de calidad y modernidad más importante de toda Caracas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
