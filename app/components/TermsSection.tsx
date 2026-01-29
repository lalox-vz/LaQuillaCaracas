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
                        <a
                            href="https://wa.me/584241234567?text=Hola%20IronLith%2C%20tengo%20el%20c%C3%B3digo%20de%20acceso.%20Quiero%20activar%20la%20Fase%201%20de%20La%20Quilla."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-iron-gold hover:bg-iron-gold/90 text-iron-black font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
                        >
                            ACTIVAR FASE 1 - INICIAR OBRA
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
