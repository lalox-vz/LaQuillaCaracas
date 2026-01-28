"use client";

import { motion } from "framer-motion";
import { Check, Star, Crown, TrendingUp } from "lucide-react";

const tiers = [
    {
        name: "IRONLITH STANDARD",
        price: "$3,000",
        subtitle: "Core Técnico",
        description: "La base sólida para tu presencia digital",
        features: [
            "Visualización Interactiva del Blue-Print",
            "Uso de Logo Actual",
            "Funcionalidad Inmediata",
            "Hosting incluido (12 meses)",
            "Soporte técnico básico",
        ],
        highlighted: false,
        icon: null,
    },
    {
        name: "IRONLITH GOLD",
        price: "$4,500",
        subtitle: "Core + Marca",
        description: "La inversión que se paga sola",
        badge: "RECOMENDADO",
        roi: "Recuperación estimada: 45 días",
        features: [
            "Todo lo incluido en Standard",
            "Refresh (Evolución de Identidad Visual)",
            "Coherencia Estética Premium",
            "Manual de Marca Básico",
            "Optimización SEO On-Page",
            "Analytics Dashboard",
        ],
        highlighted: true,
        icon: Star,
    },
    {
        name: "FOUNDERS' VISION",
        price: "$8,500",
        subtitle: "Estrategia Total (Elite)",
        description: "El patrimonio digital que trasciende",
        features: [
            "Todo lo incluido en Gold",
            "Visualización + Capas de Datos Avanzadas",
            "Rebranding Completo & Brand Bible",
            "Posicionamiento de Hito Urbano",
            "Estrategia de Marketing Digital",
            "Activo de Marca Permanente",
        ],
        highlighted: false,
        icon: Crown,
        badge: "ELITE",
        justification: "Incluye Activo de Marca Permanente valorado en $3,000+",
    },
];

export default function PricingTable() {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-iron-stone to-iron-black">
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
                                    className={`
                    bg-iron-black rounded-2xl p-8 h-full flex flex-col
                    ${tier.highlighted
                                            ? 'border-2 border-iron-gold animate-glow-pulse'
                                            : 'border border-iron-stone hover:border-iron-gold/50 transition-colors duration-300'
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

                                    {/* ROI Badge (only for Gold) */}
                                    {tier.roi && (
                                        <div className="mb-6 bg-iron-gold/10 border border-iron-gold/30 rounded-lg p-3 flex items-center gap-2">
                                            <TrendingUp className="w-5 h-5 text-iron-gold flex-shrink-0" />
                                            <span className="text-iron-gold text-sm font-semibold">
                                                {tier.roi}
                                            </span>
                                        </div>
                                    )}

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

                                    {/* Justification (only for Elite) */}
                                    {tier.justification && (
                                        <div className="pt-4 border-t border-iron-stone">
                                            <p className="text-xs text-gray-500 italic">
                                                {tier.justification}
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
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-gray-400 text-sm">
                        Cada nivel construye sobre el anterior. Recomendamos <span className="text-iron-gold font-semibold">IRONLITH GOLD</span> para resultados óptimos.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
