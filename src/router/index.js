import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/forms",
    name: "Forms",
    component: () =>
      import(/* webpackChunkName: "forms" */ "../views/Forms.vue")
  },
  {
    path: "/page-sections",
    name: "PageSections",
    component: () =>
      import(/* webpackChunkName: "pageSections" */ "../views/PageSections.vue")
  },
  {
    path: "/page-examples",
    name: "PageExamples",
    component: () =>
      import(/* webpackChunkName: "pageExamples" */ "../views/PageExamples.vue")
  },
  {
    path: "/loading-animations",
    name: "LoadingAnimations",
    component: () =>
      import(
        /* webpackChunkName: "loadingAnimations" */ "../views/LoadingAnimations.vue"
      )
  },
  {
    path: "/elements",
    name: "Elements",
    component: () =>
      import(/* webpackChunkName: "elements" */ "../views/Elements.vue")
  }
];

const router = createRouter({
  linkExactActiveClass: "border-b-2 border-gray-900",
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
