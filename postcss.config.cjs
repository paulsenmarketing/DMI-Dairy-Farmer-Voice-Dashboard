module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        // using cssnano to save a few kb per tailwind's 'building for production' section: https://tailwindcss.com/docs/optimizing-for-production
        ...(process.env.NODE_ENV === 'production' ? {cssnano: {}} : {}),
    }
}