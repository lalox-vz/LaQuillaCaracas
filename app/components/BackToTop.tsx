"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isNearFooter, setIsNearFooter] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        const checkFooterCollision = () => {
            const footer = document.getElementById('site-footer');
            if (footer) {
                const rect = footer.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                // If the top of the footer is visible in the viewport
                if (rect.top <= windowHeight) {
                    setIsNearFooter(true);
                } else {
                    setIsNearFooter(false);
                }
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        window.addEventListener("scroll", checkFooterCollision);
        // Initial check
        checkFooterCollision();

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
            window.removeEventListener("scroll", checkFooterCollision);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        bottom: isNearFooter ? "6rem" : "2rem" // Lifts up when near footer
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    className="fixed right-8 z-40 bg-iron-gold hover:bg-iron-gold/90 text-iron-black p-3 rounded-full shadow-lg transition-all duration-300 group"
                    style={{ bottom: isNearFooter ? "6rem" : "2rem" }}
                    aria-label="Volver arriba"
                >
                    <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
