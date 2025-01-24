<template>
  <div id="app">
    <HeaderCom></HeaderCom>
    <div :class="{ 'main-content': hasContent }">
      <router-view v-slot="{ Component }">
        <component
          :is="Component"
          @hook:mounted="hasContent = true"
          @hook:destroyed="hasContent = false"
        />
      </router-view>
    </div>
    <FooterCom></FooterCom>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HeaderCom from "./layouts/HeaderCom.vue";
import FooterCom from "./layouts/FooterCom.vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderCom,
    FooterCom,
  },
  setup() {
    const hasContent = ref(false);
    return {
      hasContent,
    };
  },
});
</script>

<style lang="scss">
@import "@/styles/global.scss";
@import "@/styles/common.scss";
@import "@/styles/font.scss";

#app {
  max-width: 750px;
  margin: 0 auto;
}

.main-content {
  min-height: calc(100vh - 200px); /* 화면 높이에서 헤더와 푸터 높이 뺀 값 */
}

.footer-fixed {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
