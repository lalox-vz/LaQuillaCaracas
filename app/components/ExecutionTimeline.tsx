"use client";

import { motion } from "framer-motion";
import { MessageSquare, Hammer, Target, Rocket } from "lucide-react";

const weeks = [
    {
        number: 1,
        title: "Arquitectura & Cimientos",
        description: "Configuración de servidor, estrategia de contenido y definición de alcance técnico",
        icon: MessageSquare,
        color: "from-iron-gold/20 to-iron-gold/5",
    },
    {
        number: 2,
        title: "Ingeniería Visual",
        description: "Desarrollo del Blue-Print SVG interactivo y lógica de estados de locales",
        icon: Hammer,
        color: "from-iron-gold/20 to-iron-gold/5",
    },
    {
        number: 3,
        title: "The Perfection Protocol",
        description: "QA intensivo, stress-tests de performance y optimización Lighthouse 100",
        icon: Target,
        color: "from-iron-gold/20 to-iron-gold/5",
    },
    {
        number: 4,
        title: "Lanzamiento & Entrega",
        description: "Despliegue en producción, transferencia de conocimiento y documentación completa",
        icon: Rocket,
        color: "from-iron-gold/20 to-iron-gold/5",
    },
];

export default function ExecutionTimeline() {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-iron-black to-iron-stone">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Roadmap de <span className="text-gradient">Despliegue</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Fase 1: Ejecución estratégica en 4 semanas
                    </p>
                </motion.div>

                {/* Timeline grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {weeks.map((week, index) => {
                        const Icon = week.icon;
                        return (
                            <motion.div
                                key={week.number}
                                className="relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Card */}
                                <div className="bg-iron-black border border-iron-stone hover:border-iron-gold transition-colors duration-300 rounded-xl p-6 h-full">
                                    {/* Week number badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-5xl font-bold text-iron-gold/20">
                                            0{week.number}
                                        </div>
                                        <div className={`w-12 h-12 bg-gradient-to-br ${week.color} rounded-lg flex items-center justify-center`}>
                                            <Icon className="w-6 h-6 text-iron-gold" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-3 text-white">
                                        {week.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {week.description}
                                    </p>
                                </div>

                                {/* Connector line (desktop only) */}
                                {index < weeks.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-gradient-to-r from-iron-gold to-transparent" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Legal notice */}
                <motion.div
                    className="text-center pt-8 border-t border-iron-stone"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <p className="text-gray-500 text-sm">
                        <span className="text-iron-gold">*</span> El cronograma corre a partir de la recepción del anticipo y aprobación final del brief estratégico.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
