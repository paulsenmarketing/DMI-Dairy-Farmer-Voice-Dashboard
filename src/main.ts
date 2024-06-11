import './style.css'

// Splidejs init --------------------------------------------
// Docs: https://splidejs.com/guides/getting-started/
// Splide MUST be added to the window object before Alpinejs so it's visible to Alpine when Alpine.start() is called.
// Considering that, any package that you want to use with Alpine should be added beforehand and then linked to the window object.
// The whole "attach my whole package to the Window object" is kinda ghetto, but it's what we get for using Twig...
import Splide from "@splidejs/splide";
import '@splidejs/splide/dist/css/splide.min.css'
// @ts-ignore
window.Splide = Splide;

// Lucide init ----------------------------------------------
// Docs: https://lucide.dev/guide/packages/lucide
// Lucide for icons! We're going to give this a shot - I'm tired of seeing 20 lines of SVG in every file.
// To use an icon, you must add it to this list.
import {createIcons, ChevronDown, ChevronRight, Menu} from "lucide";

createIcons({
    attrs: {
      'stroke-width': 1,
      stroke: '#333',
    },
    icons: {
        ChevronDown,
        ChevronRight,
        Menu,
    }
})

// Alpinejs init ---------------------------------------------
// Docs: https://alpinejs.dev/start-here
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import focus from '@alpinejs/focus'

Alpine.plugin(focus)
Alpine.plugin(collapse)
// @ts-ignore
window.Alpine = Alpine
Alpine.start()

// -----------------------------------------------------------
if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log("HMR")
    });
}