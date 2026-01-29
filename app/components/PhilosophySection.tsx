"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function PhilosophySection() {
    return (
        <section className="py-24 px-6 bg-iron-black relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-iron-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-iron-gold/5 rounded-full blur-3xl" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 bg-iron-gold/10 rounded-full flex items-center justify-center">
                            <Quote className="w-8 h-8 text-iron-gold" />
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-iron-gold">
                        Filosofía de Precisión
                    </h2>

                    {/* Quote text */}
                    <blockquote className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-200 font-light mb-12">
                        <p className="mb-6">
                            Las grandes obras no se improvisan. La evolución de esta esquina, desde sus inicios en 1937 hasta el hito comercial que es hoy, es el resultado de la constancia y el tiempo.
                        </p>
                        <p className="mb-6">
                            Esta propuesta obedece estrictamente a la <span className="text-iron-gold font-normal">Fase 1</span>. La lógica de ingeniería dicta que, antes de automatizar o decorar, debemos consolidar la base. Necesitamos que el mapa cargue en milisegundos y que la marca proyecte autoridad.
                        </p>
                        <p className="mb-6">
                            En <span className="text-iron-gold font-normal">IronLith</span>, entendemos que sin una arquitectura técnica blindada, cualquier tecnología futura sería frágil.
                        </p>
                        <p className="text-iron-gold font-normal">
                            Estamos colocando la primera piedra firme para el futuro digital de La Quilla.
                        </p>
                    </blockquote>

                    {/* Signature line */}
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-iron-gold" />
                        <span className="text-gray-500 text-sm tracking-wider uppercase">
                            Arquitectura de Élite
                        </span>
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-iron-gold" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
