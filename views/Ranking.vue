<template>
  <div>
    <div class="tab_wrap">
      <ThumbTab :ThumbLists="ThumbLists1"></ThumbTab>
      <ThumbTab :ThumbLists="ThumbLists2"></ThumbTab>
    </div>
    <PdtList></PdtList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ThumbTab from "@/components/ThumbTab.vue";
import PdtList from "@/components/PdtList.vue";

export default defineComponent({
  name: "RankingPage",
  components: {
    ThumbTab,
    PdtList,
  },
  data() {
    return {
      ThumbLists1: [
        "NEW",
        "전체",
        "급상승",
        "방한 아이템",
        "2025 컬러",
        "스트릿",
        "미니멀",
        "캐주얼",
        "레트로",
        "프레피",
        "워크웨어",
      ],
      ThumbLists2: [
        "봄",
        "여름",
        "가을",
        "겨울",
        "트렌드",
        "스포츠",
        "클래식",
        "이벤트",
        "할인",
        "베스트셀러",
      ],
    };
  },
});
</script>
<style lang="scss">
.tab_wrap {
  padding-top: 8px;
}
.pdtList ul li {
  margin-bottom: 4px;
}
</style>
