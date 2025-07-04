export interface PerkItem {
    title: string;
    description: string;
    icon: string;
}

export const PERKS: PerkItem[] = [
    {
        title: "$2T",
        description: "Annual productivity losses from climate extremes",
        icon: "/icons/perk-one.svg"
    },
    {
        title: "83%",
        description: "Increase in climate-related disaster events",
        icon: "/icons/perk-two.svg"
    },
    {
        title: "$25T",
        description: "Supply chain losses from climate disruptions",
        icon: "/icons/perk-three.svg"
    },
    {
        title: "97%",
        description: "Accuracy through AI-powered satellite analysis",
        icon: "/icons/perk-four.svg"
    }
];