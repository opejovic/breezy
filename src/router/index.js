import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem("redirect") !== null) {
        const redirect = sessionStorage.redirect;
        delete sessionStorage.redirect;
        next(redirect);
      } else {
        next();
      }
    }
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
