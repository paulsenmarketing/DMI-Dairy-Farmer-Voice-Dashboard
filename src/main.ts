import './style.css'

// Splidejs init ----------------------------
// splide MUST be added to the window object before Alpinejs so it's visible to Alpine when Alpine.start() is called.
import Splide from "@splidejs/splide";
import '@splidejs/splide/dist/css/splide.min.css'
// @ts-ignore
window.Splide = Splide;

// Alpinejs init --------------------------
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import focus from '@alpinejs/focus'

Alpine.plugin(focus)
Alpine.plugin(collapse)
// @ts-ignore
window.Alpine = Alpine
Alpine.start()

// ----------------------------------------
if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log("HMR")
    });
}