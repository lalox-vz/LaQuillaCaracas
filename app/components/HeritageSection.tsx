"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock } from "lucide-react";

export default function HeritageSection() {
    return (
        <section className="relative py-24 px-6 bg-iron-black overflow-hidden">
            {/* Watermark year */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                    className="text-[20rem] md:text-[30rem] font-bold opacity-[0.03] select-none"
                    style={{ fontFamily: 'serif' }}
                >
                    1937
                </span>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <span className="inline-block bg-iron-gold/10 border border-iron-gold/30 text-iron-gold text-xs font-bold px-4 py-2 rounded-full tracking-[0.2em] uppercase">
                        Legado y Visión
                    </span>
                </motion.div>

                {/* Main Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-center mb-16"
                    style={{ fontFamily: 'serif' }}
                >
                    <span className="text-iron-gold">1937:</span>{" "}
                    <span className="text-white">El ADN de esta Esquina</span>
                </motion.h2>

                {/* Split Layout */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Vintage Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        {/* Historical Image Container */}
                        <div className="relative aspect-square rounded-lg overflow-hidden border border-iron-gold/20">
                            {/* Historical Photo */}
                            <Image
                                src="/quilla-1937.jpg"
                                alt="La Quilla de Caracas en 1937"
                                fill
                                className="object-cover sepia"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority={false}
                                quality={85}
                            />

                            {/* Bottom gradient overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-iron-black/80 to-transparent z-10" />

                            {/* Date label */}
                            <div className="absolute bottom-4 left-4 z-10">
                                <span className="text-iron-gold text-sm font-light tracking-wider">
                                    Chacao, 1937
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Narrative Text */}
                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-gray-300 leading-relaxed text-justify"
                        >
                            Mucho antes de ser un centro comercial, este suelo ya conocía el significado de la excelencia. En 1937, bajo el techo de un hogar alemán, el idioma que se hablaba era la disciplina. Aquí, en dos modestos puestos de mecánica, se reparaban motores con una precisión obsesiva, mientras el viejo Tranvía de los Valles del Tuy marcaba el ritmo de un Chacao que apenas despertaba entre haciendas de algodón.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-gray-300 leading-relaxed text-justify"
                        >
                            El paisaje cambió. El asfalto cubrió la tierra y la casa familiar evolucionó hasta convertirse en los 14 locales que vemos hoy. Pero los cimientos invisibles nunca se movieron. Esa vocación de servicio, rectitud y esfuerzo europeo quedó sembrada en esta esquina, esperando el momento de florecer de nuevo con mayor fuerza.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="text-gray-300 leading-relaxed text-justify"
                        >
                            Hoy, el proyecto <span className="text-iron-gold font-medium">'La Quilla de Caracas'</span> recoge ese legado. Lo que comenzó como un servicio en dos puestos de estacionamiento se ha transformado en un punto de encuentro vibrante donde la ciudad converge día a día. La escala ha crecido, pero la ambición es la misma: honrar el esfuerzo de quienes llegaron primero, convirtiendo este espacio transitado en la referencia de calidad y modernidad más importante de toda Caracas.
                        </motion.p>

                        {/* Closing Quote */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="pt-6 border-t border-iron-gold/20"
                        >
                            <blockquote className="text-iron-gold text-lg md:text-xl font-light italic leading-relaxed">
                                &quot;Queremos que esta esquina siga siendo un punto de referencia por otros 90 años.&quot;
                            </blockquote>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-iron-gold/30 to-transparent" />
        </section>
    );
}
