"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-iron-black via-iron-stone to-iron-black" />

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgb(253, 185, 49) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
            }} />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* IronLith branding */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        <span className="text-iron-gold text-sm font-light tracking-[0.3em] uppercase">
                            IronLith
                        </span>
                    </motion.div>

                    {/* Main headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                        <span className="block text-white">La Quilla</span>
                        <span className="block text-gradient mt-2 pb-8 leading-normal">
                            Digitalización de Legado
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-12">
                        Propuesta de Arquitectura Digital por IronLith
                    </p>

                    {/* Divider line */}
                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-iron-gold to-transparent mx-auto mb-12" />

                    {/* Tagline */}
                    <p className="text-sm md:text-base text-gray-400 font-light tracking-wide">
                        Porque los cimientos digitales requieren la misma ingeniería que los físicos
                    </p>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 1.5,
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            >
                <ChevronDown className="w-8 h-8 text-iron-gold" />
            </motion.div>
        </section>
    );
}
