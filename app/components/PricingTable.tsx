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
        subtitle: "El Activo Digital (Solo Web)",
        description: "Inversión: $1,500 USD",
        features: [
            {
                text: "Mapa interactivo (base): navegación fluida",
                detailTitle: "Mapa interactivo (base): navegación fluida — $450–$650",
                included: true,
                detail: "Estructura de navegación para presentar el plano/directorio de forma clara y rápida. Optimización para que se sienta ligero y estable en móvil."
            },
            {
                text: "Directorio de locales: fichas informativas",
                detailTitle: "Directorio de locales: fichas informativas — $350–$550",
                included: true,
                detail: "Listado de tiendas con ficha por local (nombre, categoría, horario y contacto). Pensado para que el visitante encuentre lo que busca sin fricción."
            },
            {
                text: "Diseño web premium: 100% móvil",
                detailTitle: "Diseño web premium (mobile-first) — $350–$500",
                included: true,
                detail: "Diseño UI/UX y maquetación responsive. Jerarquía visual, contraste y tipografía para proyectar autoridad de marca."
            },
            {
                text: "Hosting + SSL: configuración base",
                detailTitle: "Hosting + SSL + despliegue base — $200–$300",
                included: true,
                detail: "Despliegue en infraestructura segura con SSL incluido. Entrega con acceso y base lista para operar."
            },
            {
                text: "Sin alta en Google (SEO avanzado)",
                detailTitle: "Sin alta en Google (SEO avanzado)",
                included: false,
                detail: "Este plan no incluye indexación completa ni optimización avanzada para buscadores. Se puede activar al pasar a Opción B sin rehacer el sitio."
            },
            {
                text: "Sin analítica de visitas (sin rastreo)",
                detailTitle: "Sin analítica (sin rastreo)",
                included: false,
                detail: "No incluye herramientas para medir visitas, clics o comportamiento. Ideal si quieres una web limpia y privada desde el día 1."
            },
        ],
        tagline: "Construcción del activo digital.",
        note: "Nota: Los montos por módulo son una referencia de alcance para entender la inversión. El precio final se maneja por paquete.",
        highlighted: false,
        icon: null,
    },
    {
        id: 'INTEGRATED' as PlanId,
        name: "OPCIÓN B: INTEGRATED",
        price: "$2,500",
        subtitle: "El Ecosistema (Web + Tráfico + Data)",
        description: "Inversión: $2,500 USD",
        badge: "RECOMENDADA",
        features: [
            {
                text: "Todo lo de la Opción A",
                detailTitle: "Todo lo de la Opción A — $1,500",
                included: true,
                detail: "Incluye el activo digital completo: base del mapa/directorio, fichas de locales, diseño premium responsive y despliegue con SSL."
            },
            {
                text: "Alta en Google (SEO técnico): indexación",
                detailTitle: "Alta en Google (SEO técnico): indexación — $350–$500",
                included: true,
                detail: "Configuración para que Google encuentre y entienda el sitio: sitemap, robots, metadatos y estructura técnica lista para búsquedas locales."
            },
            {
                text: "Data Suite (GA4): reportes mensuales",
                detailTitle: "Data Suite (Google Analytics 4) — $250–$400",
                included: true,
                detail: "Medición accionable: visitas, fuentes (Instagram/Google/directo) y reporte mensual automatizado para toma de decisiones."
            },
            {
                text: "Ad-Ready: Meta Pixel listo",
                detailTitle: "Infraestructura Ad-Ready (Meta Pixel) — $150–$250",
                included: true,
                detail: "Pixel instalado y validado para campañas futuras. Base lista para retargeting cuando decidan activar publicidad."
            },
            {
                text: "WhatsApp premium: tarjeta visual (Open Graph)",
                detailTitle: "WhatsApp premium (Open Graph) — $150–$250",
                included: true,
                detail: "Tarjetas visuales al compartir el link: imagen, título y descripción cuidada. Se ve profesional y genera más confianza al compartir."
            },
            {
                text: "Kit de lanzamiento: QR + copies listos",
                detailTitle: "Kit de lanzamiento (entregable) — $100–$200",
                included: true,
                detail: "QR listo para imprimir + 5 copies listos para WhatsApp/Instagram para anunciar el mapa/directorio y mover tráfico desde el día 1."
            },
        ],
        tagline: "Activo + Conexión al mundo + Medición.",
        note: "Nota: Los montos por módulo son una referencia de alcance para entender la inversión. El precio final se maneja por paquete.",
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
                </motion.div>
                {/* Block 1: Intro & Why Invest */}
                <motion.div
                    className="text-center mb-12 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block bg-iron-gold/10 border border-iron-gold/30 text-iron-gold text-xs font-bold px-4 py-2 rounded-full tracking-wide uppercase mb-4">
                        Por qué esta inversión
                    </div>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
                        Esto no es una página armada. Es un activo digital hecho con ingeniería: rápido en móvil, estable, con estándar de calidad y una base lista para crecer sin tener que rehacerlo. <span className="text-white font-semibold">La diferencia no es que exista, sino que funcione perfecto, se vea premium y sostenga la reputación de La Quilla.</span>
                    </p>
                    <p className="text-gray-500 text-sm italic">
                        Un builder resuelve &quot;salir del paso&quot;. Nosotros construimos &quot;quedar bien montado&quot; desde el día 1.
                    </p>
                </motion.div>

                {/* Block 2: Comparison (Template vs Architecture) */}
                <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
                    {/* Left: Template/Builder */}
                    <motion.div
                        className="bg-iron-stone/20 border border-iron-stone rounded-xl p-6 opacity-70 hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 0.7, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="text-gray-400 font-bold mb-4 flex items-center gap-2">
                            <X className="w-5 h-5 text-gray-500" />
                            Builder / Plantilla
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li className="flex gap-2"><span>•</span> Se ve bien rápido, pero suele ser genérico</li>
                            <li className="flex gap-2"><span>•</span> Limitado para ajustes finos y marca premium</li>
                            <li className="flex gap-2"><span>•</span> WhatsApp comparte el link &quot;pelado&quot; o inconsistente</li>
                            <li className="flex gap-2"><span>•</span> SEO y Google quedan a medias</li>
                            <li className="flex gap-2"><span>•</span> Sin QA real (móvil/Safari/Android) y sin garantía</li>
                            <li className="flex gap-2"><span>•</span> Cuando toca crecer, normalmente hay que rehacer</li>
                        </ul>
                    </motion.div>

                    {/* Right: IronLith Architecture */}
                    <motion.div
                        className="bg-iron-black border border-iron-gold/30 rounded-xl p-6 relative overflow-hidden"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-iron-gold/5 rounded-bl-full pointer-events-none" />
                        <h4 className="text-iron-gold font-bold mb-4 flex items-center gap-2">
                            <Check className="w-5 h-5 text-iron-gold" />
                            Arquitectura IronLith
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex gap-2"><Check className="w-4 h-4 text-iron-gold flex-shrink-0" /> Diseño premium adaptado a la marca (no plantilla)</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-iron-gold flex-shrink-0" /> Rápido y estable en teléfonos reales (mobile-first)</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-iron-gold flex-shrink-0" /> Compartir pro: tarjeta visual cuidada (Open Graph)</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-iron-gold flex-shrink-0" /> Base técnica lista para Google (SEO técnico)</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-iron-gold flex-shrink-0" /> QA + checklist de calidad + entrega con llaves</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-iron-gold flex-shrink-0" /> Escalable a Fase 2/3 sin volver a empezar</li>
                        </ul>
                        <div className="mt-4 pt-3 border-t border-iron-stone/50 text-center">
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Sistema completo • Probado • Listo para operar</p>
                        </div>
                    </motion.div>
                </div>

                {/* Subtitle for Pricing Cards */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white">Selecciona tu nivel de alcance</h3>
                </div>

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
                                                                    {feature.detailTitle || feature.text}
                                                                </p>
                                                            </div>
                                                            <p className="text-xs text-gray-400 leading-relaxed pl-6">
                                                                {feature.detail}
                                                            </p>
                                                        </div>
                                                    ))}
                                                    {(tier as any).note && (
                                                        <div className="pt-2 px-1">
                                                            <p className="text-[10px] text-gray-500 italic leading-snug">
                                                                {(tier as any).note}
                                                            </p>
                                                        </div>
                                                    )}
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

                {/* Block 3: Deliverables */}
                <motion.div
                    className="max-w-4xl mx-auto mb-12 bg-iron-stone/10 border border-iron-stone/50 rounded-xl p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-center text-xl font-bold text-white mb-6">
                        Entregables de Fase 1 <span className="text-gray-500 text-sm font-normal">(lo que se entrega)</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-iron-gold rounded-full" />
                            <p className="text-gray-300 text-sm">Estructura y diseño UI/UX premium (mobile-first)</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-iron-gold rounded-full" />
                            <p className="text-gray-300 text-sm">Implementación y despliegue (hosting + SSL)</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-iron-gold rounded-full" />
                            <p className="text-gray-300 text-sm">Checklist de calidad: móvil, desktop, Safari/Chrome</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-iron-gold rounded-full" />
                            <p className="text-gray-300 text-sm">Optimización base de velocidad y estabilidad</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-iron-gold rounded-full" />
                            <p className="text-gray-300 text-sm">Entrega con accesos (llaves) + guía corta de uso</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-iron-gold rounded-full" />
                            <p className="text-gray-300 text-sm">30 días de soporte post-lanzamiento (incluido)</p>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom note */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-gray-400 text-sm max-w-3xl mx-auto leading-relaxed">
                        Todos los planes incluyen la misma ingeniería y estándar de calidad. <span className="text-iron-gold font-semibold">La diferencia es si activamos o no la capa de crecimiento: descubrimiento (Google), medición (data) y compartibilidad premium (WhatsApp).</span>
                    </p>
                    <p className="text-gray-500 text-xs mt-3 italic">
                        Queda listo para escalar: campañas, Wi-Fi/ads (Fase 2) y data/fidelización (Fase 3), sin rehacer la base.
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
