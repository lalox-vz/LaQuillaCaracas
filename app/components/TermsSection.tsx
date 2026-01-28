"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, Shield } from "lucide-react";

export default function TermsSection() {
    return (
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
                        Condiciones de <span className="text-iron-gold">Inversión</span>
                    </h3>

                    {/* Terms grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {/* Payment scheme */}
                        <div className="text-center">
                            <div className="w-12 h-12 bg-iron-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <DollarSign className="w-6 h-6 text-iron-gold" />
                            </div>
                            <h4 className="font-semibold text-white mb-2">Esquema de Pago</h4>
                            <p className="text-gray-400 text-sm">
                                <span className="text-iron-gold font-semibold">50% Anticipo</span> para reserva de calendario
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                <span className="text-iron-gold font-semibold">50% Contra Entrega</span> de activos finales
                            </p>
                        </div>

                        {/* Urgency */}
                        <div className="text-center">
                            <div className="w-12 h-12 bg-iron-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-6 h-6 text-iron-gold" />
                            </div>
                            <h4 className="font-semibold text-white mb-2">Validez de Propuesta</h4>
                            <p className="text-gray-400 text-sm">
                                <span className="text-iron-gold font-semibold">7 días hábiles</span> desde emisión
                            </p>
                            <p className="text-gray-500 text-xs mt-2 italic">
                                Reservamos tiempo exclusivo para proyectos Elite
                            </p>
                        </div>

                        {/* Guarantee */}
                        <div className="text-center">
                            <div className="w-12 h-12 bg-iron-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-6 h-6 text-iron-gold" />
                            </div>
                            <h4 className="font-semibold text-white mb-2">Garantía de Calidad</h4>
                            <p className="text-gray-400 text-sm">
                                Revisiones ilimitadas dentro del alcance acordado
                            </p>
                            <p className="text-gray-500 text-xs mt-2 italic">
                                30 días de soporte post-lanzamiento incluido
                            </p>
                        </div>
                    </div>

                    {/* Bottom legal text */}
                    <div className="pt-8 border-t border-iron-stone text-center">
                        <p className="text-gray-500 text-xs leading-relaxed max-w-3xl mx-auto">
                            Esta propuesta es confidencial y está dirigida exclusivamente a los representantes de La Quilla.
                            Los precios y alcances descritos son válidos únicamente para el proyecto especificado.
                            Aceptación de términos y condiciones completas mediante firma de contrato de servicios profesionales.
                        </p>
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-400 text-sm mb-3">
                            ¿Listo para construir los cimientos digitales de La Quilla?
                        </p>
                        <a
                            href="https://wa.me/584241234567?text=Hola%20Eduardo%2C%20tengo%20el%20c%C3%B3digo%20de%20acceso.%20Quiero%20activar%20la%20Fase%201%20de%20La%20Quilla."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-iron-gold hover:bg-iron-gold/90 text-iron-black font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
                        >
                            Iniciar Proyecto
                        </a>
                        <p className="text-gray-600 text-xs mt-3">
                            * Reemplace 584241234567 con su número de WhatsApp
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
