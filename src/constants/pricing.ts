export type PlanFeature = {
    text: string;
    included: boolean;
};

export type Plan = {
    name: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
    features: PlanFeature[];
    popular?: boolean;
};

export const PRICING_PLANS: Plan[] = [
    {
        name: "Starter",
        description: "Perfect for small organizations",
        price: {
            monthly: 99,
            yearly: 990,
        },
        features: [
            { text: "Basic Satellite Monitoring", included: true },
            { text: "Monthly Reports", included: true },
            { text: "Email Support", included: true },
            { text: "Standard API Access", included: true },
            { text: "Real-time Alerts", included: false },
            { text: "Custom AI Models", included: false },
        ],
    },
    {
        name: "Professional",
        description: "Ideal for growing enterprises",
        price: {
            monthly: 299,
            yearly: 2990,
        },
        popular: true,
        features: [
            { text: "Advanced Satellite Analysis", included: true },
            { text: "Real-time Monitoring", included: true },
            { text: "Priority Support", included: true },
            { text: "Full API Access", included: true },
            { text: "Custom Alerts", included: true },
            { text: "Historical Data Access", included: true },
        ],
    },
    {
        name: "Enterprise",
        description: "For large-scale operations",
        price: {
            monthly: 999,
            yearly: 9990,
        },
        features: [
            { text: "Custom AI Model Training", included: true },
            { text: "Dedicated Support Team", included: true },
            { text: "White-label Solutions", included: true },
            { text: "On-premise Deployment", included: true },
            { text: "Custom Integrations", included: true },
            { text: "SLA Guarantees", included: true },
        ],
    },
];