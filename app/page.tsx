import ProtectionGate from "./components/ProtectionGate";
import HeroSection from "./components/HeroSection";
import HeritageSection from "./components/HeritageSection";
import ExecutionTimeline from "./components/ExecutionTimeline";
import PhilosophySection from "./components/PhilosophySection";
import PricingTable from "./components/PricingTable";
import MasterPlan from "./components/MasterPlan";
import TermsSection from "./components/TermsSection";
import BackToTop from "./components/BackToTop";

export default function Home() {
    return (
        <ProtectionGate>
            <main className="min-h-screen bg-iron-black text-white">
                {/* Hero - First impression */}
                <HeroSection />

                {/* 2. Heritage - Emotional Connection (1937 Story) */}
                <HeritageSection />

                {/* 3. Blueprint Demo - The Showstopper (4-week Timeline) */}
                <ExecutionTimeline />

                {/* 4. Philosophy - German Engineering narrative */}
                <PhilosophySection />

                {/* 5. Master Plan - The "Why Us" (3-Phase Vision with Locks) */}
                <MasterPlan />

                {/* 6. Pricing - The Ask (Strictly Phase 1) */}
                <PricingTable />

                {/* 7. Terms - Conditions & WhatsApp CTA */}
                <TermsSection />

                {/* Footer */}
                <footer className="bg-iron-black border-t border-iron-stone py-8 px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} <span className="text-iron-gold">IronLith</span>.
                            Arquitectura Digital de Élite.
                        </p>
                        <p className="text-gray-600 text-xs mt-2">
                            Propuesta de IronLith para La Quilla | Caracas
                        </p>
                    </div>
                </footer>

                {/* Back to Top Button */}
                <BackToTop />
            </main>
        </ProtectionGate>
    );
}
