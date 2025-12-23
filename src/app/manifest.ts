
export default function manifest() {
    return {
        name: 'Jose Martinez Portfolio',
        short_name: 'Jose Martinez',
        description: 'Full Stack Software Engineer Portfolio',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
