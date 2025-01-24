<template>
  <div class="icons">
    <i class="icon icon-noti" @click="alertNoti">알림</i>
    <div class="icon icon-cart" @click="goToCart">
      장바구니
      <span v-if="cartItemCount > 0" class="cart-count">{{
        cartItemCount
      }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderIcons",
  computed: {
    // Vuex 스토어에서 cartItems의 길이를 가져옵니다.
    ...mapGetters(["cartItems"]),
    cartItemCount() {
      return this.cartItems.length;
    },
  },
  methods: {
    alertNoti() {
      alert("알림: 클릭되었습니다!");
    },
    goToCart() {
      this.$router.push({ path: "/cart" });
    },
  },
};
</script>

<style lang="scss" scoped>
.icons {
  display: flex;
  .icon {
    display: block;
    font-size: 0;
    width: 26px;
    height: 26px;
    margin-right: 10px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    &:last-child {
      margin-right: 0;
    }
  }
  .icon-noti {
    background-image: url("@/assets/images/ico/ico_noti.svg");
  }
  .icon-cart {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    background-image: url("@/assets/images/ico/ico_cart.svg");
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .cart-count {
      position: absolute;
      top: -5px;
      right: -5px;
      background-color: #ff0000;
      color: #fff;
      border-radius: 50%;
      padding: 2px 5px;
      font-size: 14px;
      line-height: 1;
    }
  }
}
</style>
