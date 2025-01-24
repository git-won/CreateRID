<template>
  <div class="slide-menu" :class="{ open: isOpen }">
    <button class="close-button" @click="$emit('close')">&times;</button>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SlideMenu",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-menu {
  position: fixed;
  top: 0;
  right: -255px;
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease;
  z-index: 1000;
  padding: 20px;
  &.open {
    right: 0;
  }

  .close-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 15px;

      a {
        text-decoration: none;
        color: #333;
        font-weight: bold;

        &:hover {
          color: #000;
        }
      }
    }
  }
}
</style>
