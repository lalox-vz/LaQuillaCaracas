"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type PlanId = 'ESSENTIAL' | 'INTEGRATED' | null;

interface PricingContextType {
    selectedPlan: PlanId;
    setSelectedPlan: (plan: PlanId) => void;
}

const PricingContext = createContext<PricingContextType | undefined>(undefined);

export function PricingProvider({ children }: { children: ReactNode }) {
    const [selectedPlan, setSelectedPlan] = useState<PlanId>(null);

    return (
        <PricingContext.Provider value={{ selectedPlan, setSelectedPlan }}>
            {children}
        </PricingContext.Provider>
    );
}

export function usePricing() {
    const context = useContext(PricingContext);
    if (context === undefined) {
        throw new Error('usePricing must be used within a PricingProvider');
    }
    return context;
}
