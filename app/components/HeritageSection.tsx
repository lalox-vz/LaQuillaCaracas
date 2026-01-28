"use client";

import { motion } from "framer-motion";
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
                        The Founders&apos; Legacy
                    </span>
                </motion.div>

                {/* Main Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-center mb-4"
                    style={{ fontFamily: 'serif' }}
                >
                    <span className="text-iron-gold">1937:</span>{" "}
                    <span className="text-white">El Origen de la Precisión</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl md:text-2xl text-gray-400 text-center mb-16 font-light italic"
                >
                    Donde antes se reparaban motores, hoy construimos el futuro digital.
                </motion.p>

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
                        {/* Sepia overlay container */}
                        <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-iron-stone via-iron-black to-iron-stone border border-iron-gold/20">
                            {/* Abstract vintage pattern */}
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage: `
                    repeating-linear-gradient(
                      90deg,
                      rgba(197, 160, 89, 0.1) 0px,
                      transparent 2px,
                      transparent 4px
                    ),
                    repeating-linear-gradient(
                      0deg,
                      rgba(197, 160, 89, 0.1) 0px,
                      transparent 2px,
                      transparent 4px
                    )
                  `,
                                }}
                            />

                            {/* Center icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Clock className="w-24 h-24 text-iron-gold/30" />
                            </div>

                            {/* Bottom gradient overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-iron-black/80 to-transparent" />

                            {/* Date label */}
                            <div className="absolute bottom-4 left-4">
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
                            className="text-gray-300 leading-relaxed"
                        >
                            Cuando los fundadores llegaron de Alemania en 1937, esta esquina no era un centro comercial; era una casa con dos puestos donde se hacía mecánica honesta, justo antes de que el mundo cambiara.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-gray-300 leading-relaxed"
                        >
                            Chacao pasó de ser hacienda de algodón a urbanización moderna. El tranvía de los Valles del Tuy dio paso al Metro, y el taller dio paso a los locales. Todo cambió, menos una cosa:{" "}
                            <span className="text-iron-gold font-semibold">el espíritu de trabajo</span>.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="text-gray-300 leading-relaxed"
                        >
                            Hoy, IronLith honra ese origen. Ya no usamos llaves inglesas, usamos código. Pero la misión es la misma que la del abuelo en sus dos puestos de estacionamiento:{" "}
                            <span className="text-white font-semibold">hacer que las cosas funcionen con excelencia técnica</span>.
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
