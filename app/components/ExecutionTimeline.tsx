"use client";

import { motion } from "framer-motion";
import { MessageSquare, Hammer, Target, Rocket, Clock } from "lucide-react";

const phases = [
    {
        number: 1,
        title: "Arquitectura & Cimientos",
        description: "Configuración de servidores seguros y preparación del terreno digital.",
        icon: MessageSquare,
        duration: "Semana 1",
        weeks: 1,
        color: "from-iron-gold/20 to-iron-gold/5",
    },
    {
        number: 2,
        title: "Ingeniería Visual",
        description: "Construcción del mapa interactivo y programación de movimiento fluido.",
        icon: Hammer,
        duration: "Semanas 2-3",
        weeks: 2,
        color: "from-iron-gold/20 to-iron-gold/5",
    },
    {
        number: 3,
        title: "The Perfection Protocol",
        description: "Pruebas de velocidad extrema y auditoría de calidad 'Cero Fallos'.",
        icon: Target,
        duration: "Semana 4",
        weeks: 1,
        color: "from-iron-gold/20 to-iron-gold/5",
    },
    {
        number: 4,
        title: "Lanzamiento & Entrega",
        description: "Activación oficial y entrega del control total de la plataforma.",
        icon: Rocket,
        duration: "Semana 5 (Opcional)",
        weeks: 1,
        color: "from-iron-gold/20 to-iron-gold/5",
        optional: true,
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
                    <p className="text-gray-400 text-lg mb-3">
                        Fase 1: Ejecución estratégica
                    </p>
                    {/* Timeline badge */}
                    <div className="inline-flex items-center gap-2 bg-iron-gold/10 border border-iron-gold/30 px-4 py-2 rounded-full">
                        <Clock className="w-4 h-4 text-iron-gold" />
                        <span className="text-iron-gold text-sm font-semibold">3 a 5 semanas</span>
                    </div>
                </motion.div>

                {/* Visual Timeline Bar - Desktop/Tablet */}
                <motion.div
                    className="mb-12 max-w-4xl mx-auto hidden md:block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative">
                        {/* Week markers */}
                        <div className="flex justify-between mb-2 text-xs text-gray-500">
                            <span>Inicio</span>
                            <span>Semana 1</span>
                            <span>Semana 2</span>
                            <span>Semana 3</span>
                            <span>Semana 4</span>
                            <span className="opacity-50">Semana 5</span>
                        </div>

                        {/* Timeline bar */}
                        <div className="relative h-3 bg-iron-black rounded-full overflow-hidden border border-iron-stone">
                            {/* Phase 1 - Week 1 */}
                            <div className="absolute h-full w-[20%] bg-gradient-to-r from-iron-gold/60 to-iron-gold/40 border-r border-iron-stone/50"></div>

                            {/* Phase 2 - Weeks 2-3 */}
                            <div className="absolute h-full w-[40%] left-[20%] bg-gradient-to-r from-iron-gold/50 to-iron-gold/30 border-r border-iron-stone/50"></div>

                            {/* Phase 3 - Week 4 */}
                            <div className="absolute h-full w-[20%] left-[60%] bg-gradient-to-r from-iron-gold/40 to-iron-gold/20 border-r border-iron-stone/50"></div>

                            {/* Phase 4 - Week 5 (Optional) */}
                            <div className="absolute h-full w-[20%] left-[80%] bg-gradient-to-r from-iron-gold/20 to-iron-gold/10 opacity-50"></div>
                        </div>

                        {/* Range indicator */}
                        <div className="flex justify-between mt-2">
                            <div className="text-center">
                                <div className="w-1 h-4 bg-iron-gold mx-auto mb-1"></div>
                                <p className="text-xs text-iron-gold font-semibold">Mínimo: 3 semanas</p>
                            </div>
                            <div className="text-center opacity-50">
                                <div className="w-1 h-4 bg-iron-gold mx-auto mb-1"></div>
                                <p className="text-xs text-iron-gold font-semibold">Máximo: 5 semanas</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Timeline Bar - Mobile Optimized */}
                <motion.div
                    className="mb-8 md:hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative">
                        {/* Week labels - Mobile compact */}
                        <div className="flex justify-between mb-2 text-[10px] text-gray-500 px-1">
                            <span>S1</span>
                            <span>S2</span>
                            <span>S3</span>
                            <span>S4</span>
                            <span className="opacity-50">S5</span>
                        </div>

                        {/* Timeline bar with phase labels */}
                        <div className="relative h-14 bg-iron-black rounded-lg overflow-hidden border border-iron-stone">
                            {/* Phase 1 - Week 1 (20%) */}
                            <div className="absolute h-full w-[20%] bg-gradient-to-r from-iron-gold/60 to-iron-gold/40 border-r border-iron-stone flex flex-col items-center justify-center">
                                <span className="text-[10px] font-bold text-iron-black">F1</span>
                                <span className="text-[8px] text-iron-black/70">1sem</span>
                            </div>

                            {/* Phase 2 - Weeks 2-3 (40%) */}
                            <div className="absolute h-full w-[40%] left-[20%] bg-gradient-to-r from-iron-gold/50 to-iron-gold/30 border-r border-iron-stone flex flex-col items-center justify-center">
                                <span className="text-[10px] font-bold text-white">FASE 2</span>
                                <span className="text-[8px] text-gray-300">2 semanas</span>
                            </div>

                            {/* Phase 3 - Week 4 (20%) */}
                            <div className="absolute h-full w-[20%] left-[60%] bg-gradient-to-r from-iron-gold/40 to-iron-gold/20 border-r border-iron-stone flex flex-col items-center justify-center">
                                <span className="text-[10px] font-bold text-white">F3</span>
                                <span className="text-[8px] text-gray-300">1sem</span>
                            </div>

                            {/* Phase 4 - Week 5 (20% - Optional) */}
                            <div className="absolute h-full w-[20%] left-[80%] bg-gradient-to-r from-iron-gold/20 to-iron-gold/10 opacity-40 flex flex-col items-center justify-center">
                                <span className="text-[10px] font-bold text-gray-400">F4*</span>
                                <span className="text-[8px] text-gray-500">opt</span>
                            </div>
                        </div>

                        {/* Range indicators - Mobile */}
                        <div className="flex justify-between mt-3 px-1">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-iron-gold rounded-full"></div>
                                <p className="text-[10px] text-iron-gold font-semibold">Mín: 3 sem</p>
                            </div>
                            <div className="flex items-center gap-1 opacity-50">
                                <div className="w-2 h-2 bg-iron-gold rounded-full"></div>
                                <p className="text-[10px] text-iron-gold font-semibold">Máx: 5 sem</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mobile Timeline Vertical */}
                <motion.div
                    className="mb-12 md:hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="space-y-4">
                        {phases.map((phase, index) => {
                            const Icon = phase.icon;
                            return (
                                <div key={phase.number} className="flex items-center gap-3">
                                    {/* Timeline indicator */}
                                    <div className="flex flex-col items-center">
                                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center ${phase.optional ? 'opacity-50' : ''}`}>
                                            <Icon className="w-5 h-5 text-iron-gold" />
                                        </div>
                                        {index < phases.length - 1 && (
                                            <div className={`w-px h-12 bg-gradient-to-b from-iron-gold/30 to-transparent mt-2 ${phase.weeks === 2 ? 'h-24' : ''}`}></div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-iron-black/50 border border-iron-stone rounded-lg p-3">
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-iron-gold text-xs font-bold">FASE {phase.number}</span>
                                            <span className={`text-xs ${phase.optional ? 'text-gray-500' : 'text-gray-400'}`}>
                                                {phase.duration}
                                            </span>
                                        </div>
                                        <h4 className={`text-sm font-bold mb-1 ${phase.optional ? 'text-gray-400' : 'text-white'}`}>
                                            {phase.title}
                                        </h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">
                                            {phase.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Timeline grid - Desktop/Tablet layout */}
                <div className="hidden md:grid md:grid-cols-5 gap-6 mb-12">
                    {phases.map((phase, index) => {
                        const Icon = phase.icon;
                        const colSpan = phase.weeks === 2 ? 'md:col-span-2' : 'md:col-span-1';

                        return (
                            <motion.div
                                key={phase.number}
                                className={`relative ${colSpan} ${phase.optional ? 'opacity-70' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Card */}
                                <div className={`bg-iron-black border ${phase.optional ? 'border-iron-stone/50 border-dashed' : 'border-iron-stone'} hover:border-iron-gold transition-colors duration-300 rounded-xl p-6 h-full`}>
                                    {/* Phase number badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-5xl font-bold text-iron-gold/20">
                                            0{phase.number}
                                        </div>
                                        <div className={`w-12 h-12 bg-gradient-to-br ${phase.color} rounded-lg flex items-center justify-center`}>
                                            <Icon className="w-6 h-6 text-iron-gold" />
                                        </div>
                                    </div>

                                    {/* Duration badge */}
                                    <div className="mb-3">
                                        <span className={`inline-block text-xs font-semibold ${phase.optional ? 'text-iron-gold/50' : 'text-iron-gold/70'} bg-iron-gold/5 px-3 py-1 rounded-full border border-iron-gold/20`}>
                                            {phase.duration}
                                            {phase.optional && <span className="ml-1 italic">*</span>}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-3 text-white">
                                        {phase.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {phase.description}
                                    </p>
                                </div>

                                {/* Connector line (desktop only) - skip for last item */}
                                {index < phases.length - 1 && (
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
                    <p className="text-gray-500 text-sm mb-2">
                        <span className="text-iron-gold">*</span> El cronograma corre a partir de la recepción del anticipo y aprobación final del brief estratégico. La duración final depende de la complejidad de ajustes y disponibilidad de contenidos del cliente.
                    </p>
                    <p className="text-gray-600 text-xs">
                        <span className="text-iron-gold/50">**</span> La Semana 5 es opcional y se activa solo si se requieren ajustes finales adicionales o validaciones extendidas del cliente.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
