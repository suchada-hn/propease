import { Metadata } from "next";

export const generateMetadata = ({
    title = `RIFFAI | AI-Powered Satellite Solutions`,
    description = `Bring space down to earth with AI-powered satellite solutions for monitoring environmental change. 97% accuracy through advanced satellite analysis.`,
    image = "/thumbnail.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/icons/icon.svg"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/icons/icon.svg"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    ...(noIndex && { robots: { index: false, follow: false } }),
});