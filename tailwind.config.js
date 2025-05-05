/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./about.html",
        "./products.html",
        "./lookbook.html",
        "./contact.html",
        "./faq.html",
        "./src/**/*.html",
    ],
    theme: {
        extend: {
            colors: {
                gold: "#C5A880"
            },
            fontFamily: {
                // Marca / headings
                // alias para párrafos
                paragraph: ["aktiv-grotesk-extended", "sans-serif"],
                // alias para títulos
                title: ["cormorant-infant", "serif"],
                // tus otros alias
                brand: ["Playfair Display", "serif"],
                // Texto general
                sans: ["Source Sans Pro", "ui-sans-serif", "system-ui", "sans-serif"]
            }
        },
    },
    plugins: [],
}