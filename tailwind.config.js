export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1E40AF', // Blue
                accent: '#EF4444', // Red 
                background: '#FEF3C7', // Soft Yellow
                dark: '#111827',
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                drama: ['Playfair Display', 'serif'],
                mono: ['Space Mono', 'monospace'],
            }
        },
    },
    plugins: [],
}
