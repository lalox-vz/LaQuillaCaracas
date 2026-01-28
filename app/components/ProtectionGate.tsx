"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Shield } from "lucide-react";

const PASSCODE = "IRONLITH2026";

interface ProtectionGateProps {
    children: React.ReactNode;
}

export default function ProtectionGate({ children }: ProtectionGateProps) {
    const [input, setInput] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (input === PASSCODE) {
            setIsUnlocked(true);
            setError(false);
        } else {
            setError(true);
            // Reset error after 2 seconds
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <AnimatePresence mode="wait">
            {!isUnlocked ? (
                <motion.div
                    key="gate"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 bg-iron-black flex items-center justify-center"
                >
                    <div className="max-w-md w-full px-6">
                        {/* Logo/Branding */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-center mb-12"
                        >
                            <div className="w-20 h-20 bg-iron-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-10 h-10 text-iron-gold" />
                            </div>
                            <h1 className="text-3xl font-bold text-white mb-2">
                                La Quilla
                            </h1>
                            <p className="text-iron-gold text-sm tracking-[0.2em] uppercase">
                                Propuesta IronLith
                            </p>
                        </motion.div>

                        {/* Access Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <p className="text-gray-400 text-center mb-8 text-sm">
                                Acceso Restringido para Decisores de La Quilla
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value.toUpperCase())}
                                        placeholder="CÓDIGO DE ACCESO"
                                        className={`
                      w-full bg-transparent border-b-2 py-3 px-2
                      text-center text-white text-lg tracking-wider
                      focus:outline-none transition-colors duration-300
                      placeholder:text-gray-600
                      ${error
                                                ? 'border-red-500 animate-shake'
                                                : 'border-iron-stone focus:border-iron-gold'
                                            }
                    `}
                                        autoComplete="off"
                                        autoFocus
                                    />
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                                        <Lock className={`w-5 h-5 transition-colors ${error ? 'text-red-500' : 'text-gray-600'}`} />
                                    </div>
                                </div>

                                {error && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-red-500 text-xs text-center"
                                    >
                                        Código inválido. Intente nuevamente.
                                    </motion.p>
                                )}

                                <button
                                    type="submit"
                                    className="w-full bg-iron-gold hover:bg-iron-gold/90 text-iron-black font-semibold py-3 rounded-lg transition-colors duration-300"
                                >
                                    Acceder
                                </button>
                            </form>
                        </motion.div>

                        {/* Footer hint */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-12 text-center"
                        >
                            <p className="text-gray-600 text-xs">
                                Propuesta confidencial exclusiva para decisores autorizados
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
