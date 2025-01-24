<template>
  <div class="header_menu">
    <swiper :slides-per-view="'auto'" :space-between="0">
      <swiper-slide v-for="item in menuItems" :key="item.text">
        <router-link :to="item.link">
          <!-- @click="logText(item.text)" -->
          {{ item.text }}
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { RouterLink } from "vue-router";
import "swiper/swiper-bundle.css";

export default defineComponent({
  name: "HeaderMenu",
  components: {
    Swiper,
    SwiperSlide,
    RouterLink,
  },
  data() {
    return {
      menuItems: [
        { text: "추천", link: "/recommend" },
        { text: "랭킹", link: "/ranking" },
        { text: "세일", link: "/sale" },
        { text: "브랜드", link: "/brand" },
        { text: "1월의세일", link: "/monthEvent" },
        { text: "신상", link: "/new" },
        { text: "멤버스데이", link: "/members-day" },
        { text: "에너지 위크", link: "/energy-week" },
        { text: "클리어런스", link: "/clearance" },
        { text: "부티크", link: "/boutique" },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
.header_menu {
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #111;
  .swiper-slide {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 content;
    a {
      color: #eee;
      padding: 8px 12px;
      font-size: 16px;
      &.router-link-active {
        color: #fff;
      }
    }
    padding: 6px 0;
    &:has(.router-link-active)::after {
      display: block;
      content: "";
      width: 100%;
      height: 2px;
      background-color: #fff;
      position: absolute;
      bottom: 0;
    }
  }
}
</style>
