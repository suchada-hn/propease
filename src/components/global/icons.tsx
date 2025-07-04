import { LucideProps } from "lucide-react";

const Icons = {
    icon: (props: LucideProps) => (
        <svg {...props} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="15" fill="url(#paint0_linear_701_154)" stroke="url(#paint1_linear_701_154)" strokeWidth="2"/>
            <circle cx="17" cy="17" r="8" fill="url(#paint2_radial_701_154)"/>
            <circle cx="17" cy="17" r="3" fill="white"/>
            <defs>
                <linearGradient id="paint0_linear_701_154" x1="17" y1="0" x2="17" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EA580B" />
                    <stop offset="1" stopColor="#FB923C" />
                </linearGradient>
                <linearGradient id="paint1_linear_701_154" x1="17" y1="0" x2="17" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EA580B" />
                    <stop offset="1" stopColor="#FB923C" />
                </linearGradient>
                <radialGradient id="paint2_radial_701_154" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17 17) rotate(90) scale(8)">
                    <stop stopColor="#1E40AF" />
                    <stop offset="1" stopColor="#3B82F6" />
                </radialGradient>
            </defs>
        </svg>
    ),
    logo: (props: LucideProps) => (
        <svg {...props} width="162" height="34" viewBox="0 0 162 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="15" fill="url(#paint0_linear_706_147)" stroke="url(#paint1_linear_706_147)" strokeWidth="2"/>
            <circle cx="17" cy="17" r="8" fill="url(#paint2_radial_706_147)"/>
            <circle cx="17" cy="17" r="3" fill="white"/>
            <path d="M48.044 27V7.932H55.688C59.104 7.932 61.792 10.284 61.792 13.7C61.792 17.116 59.104 19.496 55.688 19.496H51.04V27H48.044ZM51.04 16.696H55.128C57.592 16.696 58.74 15.352 58.74 13.7C58.74 12.048 57.592 10.732 55.184 10.732H51.04V16.696ZM64.0029 18.936C64.0029 15.688 65.9629 13.588 69.1269 13.588C69.7149 13.588 70.1909 13.672 70.6949 13.784V16.472C70.1909 16.416 69.8829 16.444 69.6869 16.444C67.9509 16.444 66.9429 17.228 66.9429 19.44V27H64.0029V18.936ZM79.1564 27.28C75.2084 27.28 72.2964 24.312 72.2964 20.448C72.2964 16.584 75.2084 13.588 79.1564 13.588C83.1324 13.588 86.0444 16.584 86.0444 20.448C86.0444 24.312 83.1324 27.28 79.1564 27.28ZM79.1564 24.648C81.4244 24.648 83.1044 22.884 83.1044 20.448C83.1044 17.984 81.4244 16.22 79.1564 16.22C76.8884 16.22 75.2364 17.984 75.2364 20.448C75.2364 22.884 76.8884 24.648 79.1564 24.648ZM96.1756 27.28C94.3276 27.28 92.7316 26.496 91.8356 25.096V32.516H88.8956V13.868H91.4996L91.7516 15.94C92.6476 14.428 94.2716 13.588 96.1756 13.588C99.3676 13.588 102.392 16.024 102.392 20.448C102.392 24.844 99.3676 27.28 96.1756 27.28ZM95.6156 24.648C97.7156 24.648 99.4516 23.108 99.4516 20.448C99.4516 17.816 97.7156 16.248 95.6156 16.248C93.6556 16.248 91.7796 17.788 91.7796 20.448C91.7796 23.136 93.6276 24.648 95.6156 24.648ZM105.22 27V7.932H117.092V10.704H108.188V15.996H116.476V18.74H108.188V24.228H117.092V27H105.22ZM125.572 27.28C122.352 27.28 119.328 24.844 119.328 20.448C119.328 16.024 122.352 13.588 125.572 13.588C127.476 13.588 129.156 14.4 130.052 15.912L130.332 13.868H132.88V27H130.276L130.052 24.984C129.156 26.468 127.476 27.28 125.572 27.28ZM126.188 24.648C128.148 24.648 130.052 23.136 130.052 20.448C130.052 17.816 128.12 16.248 126.188 16.248C124.088 16.248 122.268 17.816 122.268 20.448C122.268 23.108 124.088 24.648 126.188 24.648ZM141.141 27.28C138.201 27.28 136.073 25.572 135.905 22.968H138.789C138.928 24.2 139.965 24.872 141.141 24.872C142.457 24.872 143.101 24.228 143.101 23.5C143.101 20.98 136.185 22.436 136.185 17.48C136.185 15.492 137.837 13.588 140.833 13.588C143.549 13.588 145.481 15.1 145.733 17.732H142.849C142.681 16.668 141.953 15.996 140.833 15.996C139.797 15.996 139.041 16.612 139.041 17.48C139.041 19.972 145.985 18.516 145.985 23.5C145.985 25.768 143.829 27.28 141.141 27.28ZM154.293 27.28C150.373 27.28 147.601 24.48 147.601 20.448C147.601 16.444 150.345 13.588 154.265 13.588C157.849 13.588 160.649 16.528 160.649 20.448L160.621 21.512H150.541C150.933 23.528 152.361 24.704 154.265 24.704C155.861 24.704 156.869 24.144 157.429 23.052H160.313C159.501 25.712 157.093 27.28 154.293 27.28ZM150.541 19.272H157.737C157.569 17.592 156.141 16.164 154.265 16.164C152.333 16.164 150.933 17.396 150.541 19.272Z" fill="url(#paint3_linear_706_147)" />
            <text x="46" y="25" fill="url(#paint3_linear_706_147)" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="bold">RIFFAI</text>
            <defs>
                <linearGradient id="paint0_linear_706_147" x1="17" y1="0" x2="17" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EA580B" />
                    <stop offset="1" stopColor="#FB923C" />
                </linearGradient>
                <linearGradient id="paint1_linear_706_147" x1="17" y1="0" x2="17" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EA580B" />
                    <stop offset="1" stopColor="#FB923C" />
                </linearGradient>
                <radialGradient id="paint2_radial_706_147" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17 17) rotate(90) scale(8)">
                    <stop stopColor="#1E40AF" />
                    <stop offset="1" stopColor="#3B82F6" />
                </radialGradient>
                <linearGradient id="paint3_linear_706_147" x1="46" y1="17" x2="162" y2="17" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#999999" />
                </linearGradient>
            </defs>
        </svg>
    ),
};

export default Icons;