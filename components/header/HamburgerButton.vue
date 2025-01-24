<template>
  <button class="hamburger-button" @click="$emit('open')">
    <i class="icon-hamburger">≡</i>
  </button>
</template>

<script>
export default {
  name: "HamburgerButton",
};
</script>

<style lang="scss" scoped>
.hamburger-button {
  background: none;
  border: none;
  cursor: pointer;

  .icon-hamburger {
    font-size: 24px;
    color: #333;
  }
}
</style>
