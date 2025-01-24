import { createRouter, createWebHistory } from "vue-router";
import Recommend from "@/views/Recommend.vue";
import Ranking from "@/views/Ranking.vue";
import Sale from "@/views/Sale.vue";
import Brand from "@/views/Brand.vue";
import MonthEvent from "@/views/MonthEvent.vue";
import New from "@/views/New.vue";
import MembersDay from "@/views/MembersDay.vue";
import EnergyWeek from "@/views/EnergyWeek.vue";
import Clearance from "@/views/Clearance.vue";
import Boutique from "@/views/Boutique.vue";
import CartCom from "@/components/cart/CartCom.vue";

const routes = [
  { path: "/", redirect: "/recommend" }, // 디폴트 경로 설정
  { path: "/recommend", component: Recommend },
  { path: "/ranking", component: Ranking },
  { path: "/sale", component: Sale },
  { path: "/brand", component: Brand },
  { path: "/monthEvent", component: MonthEvent },
  { path: "/new", component: New },
  { path: "/members-day", component: MembersDay },
  { path: "/energy-week", component: EnergyWeek },
  { path: "/clearance", component: Clearance },
  { path: "/boutique", component: Boutique },
  { path: "/cart", component: CartCom },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
