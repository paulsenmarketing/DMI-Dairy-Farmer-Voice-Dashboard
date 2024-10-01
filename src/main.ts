import 'vite/modulepreload-polyfill';
import './style.css'

// Splidejs init --------------------------------------------
// Docs: https://splidejs.com/guides/getting-started/
// Splide MUST be added to the window object before Alpinejs so it's visible to Alpine when Alpine.start() is called.
// Considering that, any package that you want to use with Alpine should be added beforehand and then linked to the window object.
// import Splide from "@splidejs/splide";
// import '@splidejs/splide/dist/css/splide.min.css'
// // @ts-ignore
// window.Splide = Splide;

// Swiper init --------------------------------------------
// Docs: https://swiperjs.com/get-started/
// Swiper MUST be added to the window object before Alpinejs so it's visible to Alpine when Alpine.start() is called.
// Considering that, any package that you want to use with Alpine should be added beforehand and then linked to the window object.
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// @ts-ignore
window.Swiper = Swiper;

// TailwindCSS Intersection Init
// Docs: https://github.com/heidkaemper/tailwindcss-intersect
import { Observer } from 'tailwindcss-intersect';
Observer.start();

// Vanilla Tilt Init
// Docs: https://github.com/micku7zu/vanilla-tilt.js
import VanillaTilt from "vanilla-tilt";
// @ts-ignore
window.tilt = VanillaTilt;

// Lucide init ----------------------------------------------
// Docs: https://lucide.dev/guide/packages/lucide
// Lucide for icons! We're going to give this a shot - I'm tired of seeing 20 lines of SVG in every file.
// To use an icon, you must import it and then initialize it with the crateIcons function.
// Full list of icons here: https://lucide.dev/icons/
import {
    createIcons,
    ChevronDown,
    ChevronRight,
    Menu,
    ArrowRight,
    Info,
    CircleCheckBig,
    MessageCircleQuestion,
    TriangleAlert,
    OctagonX
} from "lucide";

createIcons({
    attrs: {
        'stroke-width': 2,
        stroke: '#333',
    },
    icons: {
        ChevronDown,
        ChevronRight,
        Menu,
        ArrowRight,
        Info,
        CircleCheckBig,
        MessageCircleQuestion,
        TriangleAlert,
        OctagonX
    }
})

// Alpinejs init ---------------------------------------------
// I'm just going to install ALL of the Alpine plugins by default
// Docs: https://alpinejs.dev/start-here
import Alpine from 'alpinejs'
import anchor from '@alpinejs/anchor'
import collapse from '@alpinejs/collapse'
import focus from '@alpinejs/focus'
import intersect from '@alpinejs/intersect'
import mask from '@alpinejs/mask'
import persist from '@alpinejs/persist'
// @ts-ignore
import sort from '@alpinejs/sort'
// @ts-ignore
import resize from '@alpinejs/resize'

Alpine.plugin([collapse, focus, resize, anchor, intersect, mask, persist, sort])
// @ts-ignore
window.Alpine = Alpine
Alpine.start()

// -----------------------------------------------------------
if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log("HMR")
    });
}