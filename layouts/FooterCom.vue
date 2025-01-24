<template>
  <div id="footer">
    <div class="footer_top">
      <FooterLogo></FooterLogo>
      <button @click="toggleAccordion"><span>▼</span></button>
    </div>
    <div v-if="isAccordionOpen" class="accordion_content">
      <ul>
        <li v-for="item in companyInfo" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FooterLogo from "@/components/footer/FooterLogo.vue";

export default defineComponent({
  name: "FooterCom",
  components: {
    FooterLogo,
  },
  data() {
    return {
      companyInfo: {
        대표이사: "홍길동",
        설립연도: 1999,
        위치: "서울특별시",
        직원수: 100,
        업종: "IT",
      },
    };
  },
  setup() {
    const isAccordionOpen = ref(false);

    const toggleAccordion = () => {
      isAccordionOpen.value = !isAccordionOpen.value;
    };

    return {
      isAccordionOpen,
      toggleAccordion,
    };
  },
});
</script>

<style scoped lang="scss">
#footer {
  background-color: #111;
  padding: 20px $margin 40px;
  max-width: 750px;
  .footer_top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 0;
    button {
      color: #fff;
      background-color: transparent;
      border: none;
      span {
        display: block;
        width: 24px;
        height: 24px;
        font-size: 16px;
      }
    }
  }
  .accordion_content {
    background-color: #222;
    color: #fff;
    padding: 10px;
    transition: all 0.3s ease-in-out;
  }
}
</style>
