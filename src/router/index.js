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
    path: "/elements",
    name: "Elements",
    component: () =>
      import(/* webpackChunkName: "elements" */ "../views/Elements.vue")
  },
  {
    path: "/backgrounds",
    name: "Backgrounds",
    component: () =>
      import(/* webpackChunkName: "backgrounds" */ "../views/Backgrounds.vue")
  },
  {
    path: "/animations",
    name: "Animations",
    component: () =>
      import(/* webpackChunkName: "Animations" */ "../views/Animations.vue")
  },
  {
    path: "/navigations",
    name: "Navigations",
    component: () =>
      import(/* webpackChunkName: "navigations" */ "../views/Navigations.vue")
  }
];

const router = createRouter({
  linkExactActiveClass: "text-gray-400",
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
