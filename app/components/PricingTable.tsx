"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, X, MessageCircle, ChevronDown, Info } from "lucide-react";
import { usePricing } from "../context/PricingContext";
import { useState } from "react";

type PlanId = 'ESSENTIAL' | 'INTEGRATED';

const tiers = [
    {
        id: 'ESSENTIAL' as PlanId,
        name: "OPCIÓN A: ESSENTIAL",
        price: "$1,500",
        subtitle: "La Infraestructura (Solo Web)",
        description: "Inversión: $1,500 USD",
        features: [
            {
                text: "Mapa Interactivo: Carga rápida",
                included: true,
                detail: "Sistema de navegación visual con geolocalización de locales. Optimizado para carga en <2 segundos, diseñado con tecnología React para fluidez premium."
            },
            {
                text: "Diseño Web: Adaptado a móviles",
                included: true,
                detail: "Interfaz responsive que se adapta automáticamente a teléfonos, tablets y escritorio. Garantiza experiencia perfecta en dispositivos iOS y Android."
            },
            {
                text: "Hosting: Configuración base",
                included: true,
                detail: "Alojamiento en servidores seguros con SSL incluido. Configuración inicial para soportar hasta 1,000 visitas mensuales sin degradación de rendimiento."
            },
            {
                text: "Sin conexión a Google/Meta",
                included: false,
                detail: "Este paquete no incluye integración con ecosistemas publicitarios. Para rastreo y visibilidad online, considera la Opción B."
            },
            {
                text: "Sin rastreo de visitas",
                included: false,
                detail: "No incluye herramientas de analítica. No podrás medir cuántas personas visitan tu sitio ni de dónde vienen. Para obtener estos datos, requieres la Opción B."
            },
        ],
        tagline: "Construcción del sitio.",
        highlighted: false,
        icon: null,
    },
    {
        id: 'INTEGRATED' as PlanId,
        name: "OPCIÓN B: INTEGRATED",
        price: "$2,500",
        subtitle: "El Ecosistema (Web + Tráfico)",
        description: "Inversión: $2,500 USD",
        badge: "RECOMENDADA",
        features: [
            {
                text: "Todo lo de la Opción A",
                included: true,
                detail: "Incluye: Mapa interactivo de carga ultrarrápida, diseño responsive para todos los dispositivos, y hosting seguro con SSL. Base sólida para construir tu presencia digital."
            },
            {
                text: "Google Indexing (SEO): Alta en buscadores",
                included: true,
                detail: "Configuración técnica para que Google y otros buscadores encuentren tu sitio. Incluye: sitemap.xml, meta tags optimizados, y estructura de datos para aparecer en búsquedas como 'centros comerciales Chacao'."
            },
            {
                text: "Data Suite: Google Analytics 4 + Reportes",
                included: true,
                detail: "Panel completo de analítica: cuántas visitas recibes, de dónde vienen (Google, Instagram, directo), qué locales son más populares, y reportes mensuales automáticos vía email."
            },
            {
                text: "Infraestructura Ad-Ready: Meta Pixel y Open Graph",
                included: true,
                detail: "Meta Pixel instalado te permite crear audiencias de retargeting en Instagram/Facebook. Open Graph hace que al compartir el link en WhatsApp, se vea una tarjeta visual premium (no solo un link sin formato)."
            },
            {
                text: "Tarjetas optimizadas para compartir en WhatsApp",
                included: true,
                detail: "Cuando alguien comparta tu sitio, aparecerá con imagen, título y descripción atractiva. Incrementa clicks hasta 300% vs. un link simple. Esencial para marketing viral orgánico."
            },
        ],
        tagline: "Construcción + Conexión al mundo.",
        highlighted: true,
        icon: Star,
    },
];

// WhatsApp URL generator based on selected plan
function getWhatsAppUrl(planId: PlanId): string {
    const baseUrl = "https://wa.me/34650969466?text=";

    const messages = {
        ESSENTIAL: "¡Hola IronLith! He revisado la propuesta y estoy listo para comenzar. Acepto la *OPCIÓN A: ESSENTIAL ($1,500)* y quiero iniciar la Fase 1 de La Quilla. ¿Cuál es el siguiente paso?",
        INTEGRATED: "¡Hola IronLith! Acepto la propuesta y quiero arrancar con la *OPCIÓN B: INTEGRATED ($2,500)*. Estoy emocionado por construir el ecosistema completo para La Quilla. ¡Empecemos!",
    };

    return baseUrl + encodeURIComponent(messages[planId]);
}

export default function PricingTable() {
    const { selectedPlan, setSelectedPlan } = usePricing();
    const [expandedTier, setExpandedTier] = useState<PlanId | null>(null);

    return (
        <section id="pricing-section" className="py-24 px-6 bg-gradient-to-b from-iron-stone to-iron-black relative">
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

                {/* Pricing grid - 2 columns */}
                <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
                    {tiers.map((tier, index) => {
                        const Icon = tier.icon;
                        const isSelected = selectedPlan === tier.id;
                        const isOtherSelected = selectedPlan && selectedPlan !== tier.id;
                        const isExpanded = expandedTier === tier.id;

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
                                            <div className="bg-iron-gold text-iron-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
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
                                            {tier.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    {feature.included ? (
                                                        <Check className="w-5 h-5 text-iron-gold flex-shrink-0 mt-0.5" />
                                                    ) : (
                                                        <X className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                                                    )}
                                                    <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>
                                                        {feature.text}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Select button */}
                                    <button
                                        onClick={() => setSelectedPlan(tier.id)}
                                        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-3 ${isSelected
                                            ? 'bg-iron-gold text-iron-black'
                                            : 'bg-iron-stone hover:bg-iron-gold/20 text-white border border-iron-gold/30'
                                            }`}
                                    >
                                        {isSelected ? '✓ Plan Seleccionado' : 'Seleccionar Plan'}
                                    </button>

                                    {/* Technical details toggle */}
                                    <button
                                        onClick={() => setExpandedTier(isExpanded ? null : tier.id)}
                                        className="w-full py-2 text-sm text-iron-gold hover:text-iron-gold/80 transition-colors duration-300 flex items-center justify-center gap-2"
                                    >
                                        <Info className="w-4 h-4" />
                                        {isExpanded ? 'Ocultar Detalles Técnicos' : 'Ver Detalles Técnicos'}
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                    </button>

                                    {/* Expanded technical details */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="mt-4 pt-4 border-t border-iron-stone space-y-4">
                                                    <h4 className="text-xs font-bold text-iron-gold uppercase tracking-wide mb-3">
                                                        Desglose Técnico
                                                    </h4>
                                                    {tier.features.map((feature, idx) => (
                                                        <div key={idx} className="bg-iron-stone/30 rounded-lg p-3">
                                                            <div className="flex items-start gap-2 mb-2">
                                                                {feature.included ? (
                                                                    <Check className="w-4 h-4 text-iron-gold flex-shrink-0 mt-0.5" />
                                                                ) : (
                                                                    <X className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                                                                )}
                                                                <p className={`text-xs font-semibold ${feature.included ? 'text-white' : 'text-gray-500'}`}>
                                                                    {feature.text}
                                                                </p>
                                                            </div>
                                                            <p className="text-xs text-gray-400 leading-relaxed pl-6">
                                                                {feature.detail}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Tagline */}
                                    {tier.tagline && (
                                        <div className="pt-4 border-t border-iron-stone mt-4">
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
