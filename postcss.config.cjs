module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        // using cssnano to save a few kb per tailwind's 'building for production' section
        ...(process.env.NODE_ENV === 'production' ? {cssnano: {}} : {}),
    }
}