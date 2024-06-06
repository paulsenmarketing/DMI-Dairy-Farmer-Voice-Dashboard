import './style.css'

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