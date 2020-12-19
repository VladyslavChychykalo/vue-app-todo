import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" },
    component: Home,
  },
  {
    path: "/todo",
    name: "Todo",
    meta: { layout: "main" },
    component: () => import("../views/Todo/Todo.vue"),
  },
  {
    path: "/list",
    name: "List",
    meta: { layout: "main" },
    component: () => import("../views/List.vue"),
  },
  {
    path: "/modal-edit",
    name: "ModalEdit",
    component: () => import("../views/ModalEdit.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
