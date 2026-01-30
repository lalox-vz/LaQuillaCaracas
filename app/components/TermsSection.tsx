"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, DollarSign, Shield, AlertCircle, X } from "lucide-react";
import { usePricing } from "../context/PricingContext";

export default function TermsSection() {
    const { selectedPlan } = usePricing();
    const [showModal, setShowModal] = useState(false);

    const handleActivatePhase1 = () => {
        if (!selectedPlan) {
            // Scroll to pricing section
            const pricingSection = document.getElementById('planes-disponibles');
            if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Show elegant modal
                setTimeout(() => {
                    setShowModal(true);
                }, 500);
            }
        } else {
            // Generate message based on plan
            const messages = {
                ESSENTIAL: "Hola. Confirmo mi aprobación para el PLAN A: ESENCIAL ($1,500). Estoy listo para iniciar la construcción de La Quilla (Fase 1).",
                INTEGRATED: "Hola. Confirmo mi aprobación para el PLAN B: INTEGRAL ($2,500). Estoy listo para iniciar el ecosistema completo de La Quilla.",
            };

            const message = messages[selectedPlan];
            // Format: wa.me/NUMBER?text=MESSAGE
            // Number format: 34650969466 (Spain code 34)
            const url = `https://wa.me/34650969466?text=${encodeURIComponent(message)}`;

            // Open WhatsApp direct chat
            window.open(url, '_blank');
        }
    };

    return (
        <>
            <section className="py-16 px-6 bg-iron-black border-t border-iron-stone">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-center mb-8 text-white">
                            Condiciones de <span className="text-iron-gold">Ejecución</span>
                        </h3>

                        {/* Terms grid */}
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            {/* Payment scheme */}
                            <div className="text-center">
                                <div className="w-12 h-12 bg-iron-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <DollarSign className="w-6 h-6 text-iron-gold" />
                                </div>
                                <h4 className="font-semibold text-white mb-2">Esquema de Pago</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    40% al inicio de obra, 20% al validar avance (Semana 3) y 40% final contra entrega de llaves.
                                </p>
                            </div>

                            {/* Urgency */}
                            <div className="text-center">
                                <div className="w-12 h-12 bg-iron-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-6 h-6 text-iron-gold" />
                                </div>
                                <h4 className="font-semibold text-white mb-2">Validez</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Presupuesto válido por 7 días hábiles. Garantiza la reserva exclusiva de nuestro equipo técnico por 4 semanas.
                                </p>
                            </div>

                            {/* Guarantee */}
                            <div className="text-center">
                                <div className="w-12 h-12 bg-iron-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-6 h-6 text-iron-gold" />
                                </div>
                                <h4 className="font-semibold text-white mb-2">Garantía</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Incluye 30 días de Soporte Post-Lanzamiento para monitorear que la plataforma opere sin fallos.
                                </p>
                            </div>
                        </div>

                        {/* Bottom legal text */}
                        <div className="pt-8 border-t border-iron-stone text-center">
                            <p className="text-gray-500 text-xs leading-relaxed max-w-3xl mx-auto">
                                © 2026 IronLith. Propuesta de Arquitectura Digital Confidencial.
                            </p>
                        </div>

                        {/* Contact CTA */}
                        <div className="mt-8 text-center">
                            <p className="text-gray-400 text-sm mb-3">
                                ¿Listo para iniciar la transformación digital de La Quilla?
                            </p>
                            <button
                                onClick={handleActivatePhase1}
                                className={`inline-block font-semibold px-8 py-3 rounded-lg transition-all duration-300 ${selectedPlan
                                    ? 'bg-iron-gold hover:bg-iron-gold/90 text-iron-black hover:scale-105 shadow-lg shadow-iron-gold/20'
                                    : 'bg-iron-gold/50 text-iron-black/70 cursor-pointer hover:bg-iron-gold/70'
                                    }`}
                            >
                                {selectedPlan ? '✓ ACTIVAR FASE 1 - INICIAR OBRA' : '⚠ SELECCIONA TU PLAN PRIMERO'}
                            </button>
                            {!selectedPlan && (
                                <p className="text-iron-gold/70 text-xs mt-2 italic">
                                    Haz clic aquí para ir a la sección de planes
                                </p>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Elegant Modal Notification */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-gradient-to-br from-iron-stone to-iron-black border-2 border-iron-gold/30 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-iron-gold/20 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Icon */}
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-iron-gold/10 rounded-full flex items-center justify-center border border-iron-gold/30">
                                    <AlertCircle className="w-8 h-8 text-iron-gold" />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-center mb-3 text-white">
                                Plan No Seleccionado
                            </h3>

                            {/* Message */}
                            <p className="text-gray-300 text-center mb-6 leading-relaxed">
                                Por favor, selecciona un plan de inversión en la sección de arriba antes de continuar con la activación de la Fase 1.
                            </p>

                            {/* Divider */}
                            <div className="w-24 h-px bg-gradient-to-r from-transparent via-iron-gold to-transparent mx-auto mb-6"></div>

                            {/* Action buttons */}
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 px-6 py-3 border border-iron-stone text-gray-300 hover:text-white hover:border-iron-gold/50 rounded-lg transition-colors duration-300 font-semibold"
                                >
                                    Cerrar
                                </button>
                                <button
                                    onClick={() => {
                                        setShowModal(false);
                                        document.getElementById('planes-disponibles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className="flex-1 px-6 py-3 bg-iron-gold hover:bg-iron-gold/90 text-iron-black rounded-lg transition-colors duration-300 font-semibold shadow-lg shadow-iron-gold/20"
                                >
                                    Ver Planes
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
