export type FAQItem = {
    question: string;
    answer: string;
};

export const FAQS: FAQItem[] = [
    {
        question: "How accurate is RIFFAI's satellite analysis?",
        answer: "Our AI-powered platform delivers 97% accuracy by integrating data from over 20 satellites and analyzing 800+ environmental parameters. This precision is achieved through proprietary machine learning models trained on extensive satellite datasets."
    },
    {
        question: "What types of environmental monitoring does RIFFAI provide?",
        answer: "We offer comprehensive monitoring including flood prediction, methane detection, renewable energy site optimization, erosion assessment, illegal landfill identification, and climate change impact analysis across various industries."
    },
    {
        question: "How does RIFFAI differ from traditional ground-based monitoring?",
        answer: "Unlike ground-based stations, our satellite-powered approach provides continuous, wide-area coverage without physical infrastructure limitations. This enables real-time monitoring of remote areas and delivers insights that ground sensors simply cannot match."
    },
    {
        question: "Can RIFFAI integrate with existing environmental management systems?",
        answer: "Yes, our platform offers robust API access and custom integration capabilities. We work with your existing workflows and can provide white-label solutions for enterprise clients requiring seamless system integration."
    },
    {
        question: "What kind of support does RIFFAI provide?",
        answer: "We offer comprehensive support ranging from email assistance for starter plans to dedicated support teams for enterprise clients. Our team includes specialists from leading institutions who understand both the technical and practical aspects of environmental monitoring."
    },
    {
        question: "How quickly can RIFFAI detect environmental changes?",
        answer: "Our real-time monitoring capabilities can detect significant environmental changes within hours of satellite data acquisition. Critical alerts for events like flooding or methane leaks are processed and delivered immediately to ensure rapid response times."
    }
];