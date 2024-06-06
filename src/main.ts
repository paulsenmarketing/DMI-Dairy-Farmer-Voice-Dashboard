import './style.css'
import '@splidejs/splide/dist/css/splide.min.css'

// Alpinejs init --------------------------
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import focus from '@alpinejs/focus'

Alpine.plugin(focus)
Alpine.plugin(collapse)
// @ts-ignore
window.Alpine = Alpine
Alpine.start()

// Splidejs -------------------------------
import Splide from "@splidejs/splide"
document.addEventListener("DOMContentLoaded", () => {
    new Splide( '.splide', {
        perPage: 3,
        gap: 16,
        arrows: false,
        interval: 4000,
    } ).mount();
})

// ----------------------------------------
if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log("HMR")
    });
}