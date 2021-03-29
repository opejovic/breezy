import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/assets/css/tailwind.css'
import iframeResize from 'iframe-resizer/js/iframeResizer';

const app = createApp(App);

app.directive('resize', {
  beforeMount: function (el, { value = {} }) {
    el.addEventListener('load', () => iframeResize(value, el))
  },
  unmounted: function (el) {
    el.iFrameResizer.removeListeners();
  }
})

app.use(store).use(router).mount("#app");