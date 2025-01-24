<template>
  <header class="header">
    <div class="header_top">
      <HeaderLogo />
      <HeaderIcons></HeaderIcons>
    </div>
    <HeaderSearch></HeaderSearch>
    <HeaderMenu></HeaderMenu>
    <!-- <HamburgerButton @click="toggleMenu" /> -->
    <!-- <SlideMenu :isOpen="isMenuOpen" @close="toggleMenu" /> -->
  </header>
</template>

<script>
import HeaderLogo from "@/components/header/HeaderLogo.vue";
/* import HamburgerButton from "@/components/header/HamburgerButton.vue";
import SlideMenu from "@/components/header/SlideMenu.vue"; */
import HeaderIcons from "@/components/header/HeaderIcons.vue";
import HeaderMenu from "@/components/header/HeaderMenu.vue";
import HeaderSearch from "@/components/header/HeaderSearch.vue";

export default {
  name: "HeaderCom",
  components: {
    HeaderLogo,
    /* HamburgerButton, */
    /* SlideMenu, */
    HeaderIcons,
    HeaderMenu,
    HeaderSearch,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  .header_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $margin;
  }
  background-color: #111;
}
</style>
