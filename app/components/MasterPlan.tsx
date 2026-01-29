"use client";

import { motion } from "framer-motion";
import { DraftingCompass, Wifi, ShoppingBag, Lock } from "lucide-react";

const phases = [
    {
        number: 1,
        title: "FASE 1 (HOY)",
        subtitle: "Cimientos & Marca",
        icon: DraftingCompass,
        content: "Construcción de la infraestructura base. Desarrollamos el mapa interactivo y definimos la identidad visual para asegurar que la plataforma tenga la estabilidad técnica necesaria para crecer.",
        status: "active",
        color: "from-iron-gold/20 to-iron-gold/5",
    },
    {
        number: 2,
        title: "FASE 2 (PRÓXIMA)",
        subtitle: "Wi-Fi & Publicidad",
        icon: Wifi,
        content: "Modelo de ingresos tipo 'Aeropuerto'. Implementamos acceso a internet controlado (15 min libres) que luego genera renta mediante publicidad digital de marcas aliadas o pases de pago.",
        status: "future",
        color: "from-gray-700/20 to-gray-800/5",
    },
    {
        number: 3,
        title: "FASE 3 (FUTURO)",
        subtitle: "Data & Fidelización",
        icon: ShoppingBag,
        content: "Transformamos visitas en datos. Creamos una base de clientes propia para medir el tráfico real del centro y enviar promociones directas que mantengan la esquina activa.",
        status: "future",
        color: "from-gray-700/20 to-gray-800/5",
    },
];

export default function MasterPlan() {
    return (
        <section className="py-24 px-6 bg-iron-black">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Visión de Futuro: <span className="text-gradient">La Economía Digital de La Quilla</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
                        Para convertir la esquina en un activo digital rentable, estructuramos el crecimiento en tres etapas lógicas.
                        <span className="text-white font-medium"> No se puede correr antes de caminar</span>; hoy cimentamos la infraestructura (Fase 1),
                        para luego activar ingresos por Wi-Fi (Fase 2) y finalmente capitalizar la data de sus visitantes (Fase 3).
                    </p>
                </motion.div>

                {/* Three-phase cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {phases.map((phase, index) => {
                        const Icon = phase.icon;
                        const isActive = phase.status === "active";

                        return (
                            <motion.div
                                key={phase.number}
                                className="relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                            >
                                {/* Card */}
                                <div
                                    className={`
                    h-full p-8 rounded-2xl border-2
                    ${isActive
                                            ? 'bg-gradient-to-br from-iron-stone to-iron-black border-iron-gold opacity-100'
                                            : 'bg-gradient-to-br from-iron-stone/40 to-iron-black/40 border-gray-700/50 opacity-70'
                                        }
                  `}
                                >
                                    {/* Phase number badge */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className={`text-6xl font-bold ${isActive ? 'text-iron-gold/30' : 'text-gray-700/30'}`}>
                                            0{phase.number}
                                        </div>
                                        <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center`}>
                                            <Icon className={`w-8 h-8 ${isActive ? 'text-iron-gold' : 'text-gray-500'}`} />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className={`text-xl font-bold ${isActive ? 'text-iron-gold' : 'text-gray-400'}`}>
                                            {phase.title}
                                        </h3>
                                        {!isActive && (
                                            <Lock className="w-4 h-4 text-gray-500" />
                                        )}
                                    </div>
                                    <p className={`text-sm font-semibold mb-4 ${isActive ? 'text-white' : 'text-gray-500'}`}>
                                        {phase.subtitle}
                                    </p>

                                    {/* Content */}
                                    <p className={`text-sm leading-relaxed ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                                        {phase.content}
                                    </p>

                                    {/* Status indicator for active phase */}
                                    {isActive && (
                                        <div className="mt-6 pt-6 border-t border-iron-gold/30">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-iron-gold rounded-full animate-pulse" />
                                                <span className="text-iron-gold text-xs font-semibold uppercase tracking-wide">
                                                    Disponible Ahora
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Requirement text for future phases */}
                                    {!isActive && (
                                        <div className="mt-6 pt-6 border-t border-gray-700/30">
                                            <p className="text-gray-600 text-xs italic flex items-center gap-2">
                                                <Lock className="w-3 h-3" />
                                                Requiere Fase {phase.number - 1}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom insight */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="inline-block bg-iron-stone/50 border border-iron-gold/30 rounded-lg px-6 py-4">
                        <p className="text-gray-400 text-sm">
                            <span className="text-iron-gold font-semibold">La Fase 1</span> construye el Activo.
                            <span className="text-iron-gold font-semibold"> Las Fases 2 y 3</span> activan el Retorno de Inversión.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
