import { defineStore } from 'pinia';
export const useDataStore = defineStore({
    id: 'works',
    state: () => ({
        works: [{
            title: 'clinicplus',
            description: 'A frontend app for a telemedicine service',
            tools: 'vue, composition-api, gsap',
            bg: '/assets/images/bg-1.png',
            link:'https://clinicplus.netlify.app/',
            git:'https://github.com/Kichotee/clinicplus'
        },
        {
            title: 'bazaar',
            description: 'A space tourism website',
            tools: 'vue, composition-api, pinia, scss',
            bg: '/assets/images/bg-2.png',
            link:'https://appspace-tourism.netlify.app/',
            git:'https://github.com/Kichotee/bazaar'

        },
        {
            title: 'space-app',
            description: 'A space tourism website',
            tools: 'vue, composition-api, pinia, tailwind, vite',
            bg: '/assets/images/bg-3.png',
            link:'https://appspace-tourism.netlify.app/',
            git:'https://github.com/Kichotee/space-agency'


        },
        ]
    })
})