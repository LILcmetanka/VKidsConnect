import { createRouter, createWebHistory } from "vue-router";
import CatalogView from "../views/CatalogView.vue";
import DetailView from "../views/DetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Catalog", component: CatalogView },
    { path: "/detail", name: "Detail", component: DetailView },
  ],
});

export default router;
