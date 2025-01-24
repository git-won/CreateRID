<template>
  <div id="RecommendPage">
    <MainSlider></MainSlider>
    <div
      v-for="(item, index) in recommendItems"
      :key="index"
      class="recommend_items"
    >
      <div class="recommend_items_tit contents_tit">
        <div class="tit">{{ item.title }}</div>
        <a
          v-if="item.link"
          :href="item.link"
          class="recommend_items_link contents_tit_link"
          >{{ item.linkText || "더보기" }}</a
        >
      </div>
      <PdtList3Items :products="item.products"></PdtList3Items>
    </div>
  </div>
</template>

<script lang="ts">
import MainSlider from "@/components/MainSlider.vue";
import PdtList3Items from "@/components/PdtList3Items.vue";
import { mapGetters } from "vuex";

export default {
  name: "RecommendPage",
  components: {
    PdtList3Items,
    MainSlider,
  },
  computed: {
    ...mapGetters(["getRecommendItems"]),
    recommendItems() {
      return this.getRecommendItems;
    },
  },
};
</script>

<style scoped lang="scss">
#RecommendPage {
  /* padding-bottom: 300px; */
  .recommend_items {
    padding-bottom: 6px;
  }
}
</style>
