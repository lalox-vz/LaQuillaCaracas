"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, Crown, MessageCircle } from "lucide-react";

type PlanId = 'ESSENTIAL' | 'PRO' | 'ELITE';

const tiers = [
    {
        id: 'ESSENTIAL' as PlanId,
        name: "OPCIÓN A: ESSENTIAL",
        price: "$1,950",
        subtitle: "El \"Sí\" Inmediato",
        description: "Infraestructura Base",
        features: [
            "Mapa Interactivo Rápido",
            "Logo Actual (Sin cambios)",
            "1 Ronda de Ajustes",
            "Entrega en 4 Semanas",
        ],
        tagline: "Ideal para iniciar obra ya.",
        highlighted: false,
        icon: null,
    },
    {
        id: 'PRO' as PlanId,
        name: "OPCIÓN B: PRO",
        price: "$2,850",
        subtitle: "El Estándar IronLith",
        description: "Infraestructura + Marca",
        badge: "RECOMENDADO",
        features: [
            "Mapa Interactivo Rápido",
            "Modernización de Logo",
            "3 Rondas de Ajustes",
            "Soporte Prioritario",
        ],
        tagline: "Ideal para renovar imagen.",
        highlighted: true,
        icon: Star,
    },
    {
        id: 'ELITE' as PlanId,
        name: "OPCIÓN C: FOUNDERS' LEGACY",
        price: "$5,000",
        subtitle: "La Visión Completa",
        description: "Dominio Total",
        features: [
            "Mapa Interactivo Avanzado",
            "Rebranding Completo",
            "Galería Histórica \"1937\"",
            "Manual de Identidad",
        ],
        tagline: "Ideal para hacer historia.",
        highlighted: false,
        icon: Crown,
        badge: "ELITE",
    },
];

// WhatsApp URL generator based on selected plan
function getWhatsAppUrl(planId: PlanId): string {
    const baseUrl = "https://wa.me/584241234567?text=";

    const messages = {
        ESSENTIAL: "Hola, vengo de la propuesta digital. He seleccionado la opción *ESSENTIAL ($1,950)*. Tengo mi código de acceso. ¿Podemos agendar el inicio?",
        PRO: "Hola, vengo de la propuesta digital. He decidido invertir en la *Fase 1: PRO ($2,850)* con Modernización de Logo. Tengo mi código de acceso.",
        ELITE: "Hola, vengo de la propuesta digital. Vamos con la visión completa: *FOUNDERS' LEGACY ($5,000)*. Quiero asegurar el legado digital. Tengo mi código."
    };

    return baseUrl + encodeURIComponent(messages[planId]);
}

export default function PricingTable() {
    const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null);

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-iron-stone to-iron-black relative">
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
                        Inversión <span className="text-gradient">Fase 1</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Infraestructura & Activos Digitales
                    </p>
                </motion.div>

                {/* Pricing grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {tiers.map((tier, index) => {
                        const Icon = tier.icon;
                        const isSelected = selectedPlan === tier.id;
                        const isOtherSelected = selectedPlan && selectedPlan !== tier.id;

                        return (
                            <motion.div
                                key={tier.name}
                                className={`relative ${tier.highlighted ? 'md:scale-105 z-10' : 'z-0'}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Card */}
                                <div
                                    onClick={() => setSelectedPlan(tier.id)}
                                    className={`
                    bg-iron-black rounded-2xl p-8 h-full flex flex-col cursor-pointer
                    transition-all duration-300
                    ${tier.highlighted
                                            ? 'border-2 border-iron-gold'
                                            : 'border border-iron-stone hover:border-iron-gold/50'
                                        }
                    ${isSelected
                                            ? 'ring-2 ring-iron-gold scale-105 shadow-xl shadow-iron-gold/20'
                                            : ''
                                        }
                    ${isOtherSelected
                                            ? 'opacity-50 grayscale'
                                            : ''
                                        }
                  `}
                                >
                                    {/* Badge */}
                                    {tier.badge && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <div className={`
                        px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                        ${tier.highlighted
                                                    ? 'bg-iron-gold text-iron-black'
                                                    : 'bg-iron-stone text-iron-gold'
                                                }
                      `}>
                                                {tier.badge}
                                            </div>
                                        </div>
                                    )}

                                    {/* Selection indicator */}
                                    {isSelected && (
                                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-iron-gold rounded-full flex items-center justify-center shadow-lg">
                                            <Check className="w-5 h-5 text-iron-black" />
                                        </div>
                                    )}

                                    {/* Header */}
                                    <div className="mb-6">
                                        {Icon && (
                                            <Icon className="w-8 h-8 text-iron-gold mb-4" />
                                        )}
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {tier.name}
                                        </h3>
                                        <p className="text-iron-gold text-sm font-semibold mb-2">
                                            {tier.subtitle}
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            {tier.description}
                                        </p>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-bold text-white">
                                                {tier.price}
                                            </span>
                                            <span className="text-gray-500 text-sm">USD</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="flex-1 mb-6">
                                        <ul className="space-y-3">
                                            {tier.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-3">
                                                    <Check className="w-5 h-5 text-iron-gold flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-300 text-sm">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tagline */}
                                    {tier.tagline && (
                                        <div className="pt-4 border-t border-iron-stone">
                                            <p className="text-sm text-gray-400 italic">
                                                {tier.tagline}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-gray-400 text-sm">
                        Todos los planes incluyen la misma ingeniería de precisión. <span className="text-iron-gold font-semibold">La calidad no es negociable.</span>
                    </p>
                </motion.div>
            </div>

            {/* Sticky Bottom Action Bar */}
            <AnimatePresence>
                {selectedPlan && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-0 left-0 right-0 z-50 bg-iron-black/95 backdrop-blur-md border-t border-iron-gold/30 shadow-2xl"
                    >
                        <div className="max-w-7xl mx-auto px-6 py-6">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                {/* Selection info */}
                                <div className="text-center md:text-left">
                                    <p className="text-gray-400 text-sm mb-1">Plan Seleccionado:</p>
                                    <p className="text-white font-bold text-lg">
                                        {tiers.find(t => t.id === selectedPlan)?.name} - {tiers.find(t => t.id === selectedPlan)?.price}
                                    </p>
                                </div>

                                {/* Action buttons */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setSelectedPlan(null)}
                                        className="px-6 py-3 border border-iron-stone text-gray-400 hover:text-white hover:border-iron-gold/50 rounded-lg transition-colors duration-300"
                                    >
                                        Cambiar Plan
                                    </button>
                                    <a
                                        href={getWhatsAppUrl(selectedPlan)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-3 bg-iron-gold hover:bg-iron-gold/90 text-iron-black font-bold rounded-lg transition-colors duration-300 flex items-center gap-2 shadow-lg shadow-iron-gold/20"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Confirmar Fase 1: {selectedPlan}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
