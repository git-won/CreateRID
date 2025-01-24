<template>
  <div>
    <!-- v-for을 사용하여 cartItems 배열을 반복 -->
    <div
      v-for="item in cartItems"
      :key="item.id"
      class="cart-item"
      :class="{ 'sold-out': item.soldOut }"
    >
      <!-- 체크박스: 아이템을 선택하거나 선택 해제 -->
      <input
        type="checkbox"
        v-model="localSelectedItems"
        :value="item.id"
        class="item-checkbox"
        :id="'item-' + item.id"
        @change="updateSelectedItems"
      />
      <!-- 체크박스와 연결된 레이블 -->
      <label :for="'item-' + item.id">선택</label>
      <!-- 삭제 버튼: 아이템을 장바구니에서 제거 -->
      <button class="delete-item-button" @click="removeFromCart(item.id)">
        x
      </button>
      <!-- 아이템 이미지 -->
      <img :src="item.image" :alt="item.name" class="cart-item-image" />
      <div class="cart-item-details">
        <!-- 아이템 이름 -->
        <h2>{{ item.name }}</h2>
        <!-- 아이템 가격 -->
        <p>{{ formatPrice(item.price) }}원</p>
        <!-- 수량 조절 버튼: soldOut이 false일 때만 표시 -->
        <div class="quantity" v-if="!item.soldOut">
          <button @click="decreaseQuantity(item)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="increaseQuantity(item)">+</button>
        </div>
        <!-- 품절 상태 표시 -->
        <div class="sold-out-label" v-if="item.soldOut">품절</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItemList", // 컴포넌트의 이름을 설정합니다.
  props: ["cartItems", "selectedItems"], // 부모 컴포넌트로부터 전달받은 props를 정의합니다. cartItems와 selectedItems를 받습니다.
  data() {
    return {
      // 컴포넌트의 로컬 상태를 설정합니다.
      localSelectedItems: [...this.selectedItems], // selectedItems를 로컬 상태로 복사합니다.
    };
  },
  watch: {
    // selectedItems가 변경될 때마다 로컬 상태를 업데이트합니다.
    selectedItems(newItems) {
      this.localSelectedItems = [...newItems];
    },
    // cartItems가 변경될 때마다 업데이트합니다.
    cartItems: {
      handler() {
        this.updateSelectedItems(); // cartItems가 변경될 때마다 updateSelectedItems를 호출합니다.
      },
      deep: true, // 객체 내부 속성 변화를 감지합니다.
    },
  },
  mounted() {
    // 컴포넌트가 마운트될 때 호출되는 라이프사이클 훅입니다.
    // 초기 로드 시 soldOut이 false인 아이템들만 선택합니다.
    this.localSelectedItems = this.cartItems
      .filter((item) => !item.soldOut) // soldOut이 false인 아이템만 필터링합니다.
      .map((item) => item.id); // 필터링된 아이템의 id를 배열로 만듭니다.
    this.updateSelectedItems(); // 선택된 아이템들을 업데이트합니다.
  },
  methods: {
    // 선택된 아이템들을 업데이트합니다.
    updateSelectedItems() {
      this.$emit("update-selected-items", this.localSelectedItems); // 부모 컴포넌트로 localSelectedItems를 전달합니다.
    },
    // 아이템 수량을 증가시킵니다.
    increaseQuantity(item) {
      this.$emit("increase-quantity", item); // 부모 컴포넌트로 수량 증가 이벤트를 전달합니다.
      this.updateSelectedItems(); // 선택된 아이템들을 업데이트합니다.
    },
    // 아이템 수량을 감소시킵니다.
    decreaseQuantity(item) {
      this.$emit("decrease-quantity", item); // 부모 컴포넌트로 수량 감소 이벤트를 전달합니다.
      this.updateSelectedItems(); // 선택된 아이템들을 업데이트합니다.
    },
    // 삭제 전 확인 알림창을 표시합니다.
    async confirmAction(message) {
      return new Promise((resolve) => {
        if (confirm(message)) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    },
    // 아이템을 장바구니에서 제거합니다.
    async removeFromCart(itemId) {
      const confirmed = await this.confirmAction("이 상품을 삭제하시겠습니까?"); // 삭제 확인 알림창을 표시합니다.
      if (confirmed) {
        this.$emit("remove-from-cart", itemId); // 부모 컴포넌트로 아이템 제거 이벤트를 전달합니다.
        this.updateSelectedItems(); // 선택된 아이템들을 업데이트합니다.
      }
    },
    // 가격을 포맷팅합니다.
    formatPrice(price) {
      // price를 천 단위마다 쉼표로 구분하여 문자열로 변환합니다.
      return new Intl.NumberFormat().format(price);
    },
  },
};
</script>

<style scoped lang="scss">
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  position: relative;

  &.sold-out {
    background-color: #e0e0e0;
    opacity: 0.6;
  }
  /* &:last-child {
    margin-bottom: 0;
  } */
  .item-checkbox {
    display: none;
    & + label {
      position: absolute;
      display: block;
      width: 24px;
      height: 24px;
      background-color: #fff;
      top: 10px;
      left: 10px;
      font-size: 0;
      border: 1px solid #000;
      background-image: url("@/assets/images/ico/ico_check_gray.svg");
      background-repeat: no-repeat;
      background-size: 140%;
      background-position: center;
    }
    &:checked + label {
      background-image: url("@/assets/images/ico/ico_check_white.svg");
      background-color: #000;
    }
  }

  .delete-item-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #ff4d4d;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cart-item-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
    border-radius: 8px;
  }

  .cart-item-details {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    h2 {
      font-size: 18px;
      margin: 0 0 10px;
      color: #333;
    }

    p {
      font-size: 16px;
      margin: 0 0 10px;
      color: #666;
    }

    .sold-out-label {
      font-size: 16px;
      color: #ff4d4d;
      font-weight: bold;
    }

    .quantity {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      button {
        width: 30px;
        height: 30px;
        font-size: 16px;
        background-color: #e0e0e0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      span {
        margin: 0 10px;
        font-size: 16px;
      }
    }
  }
}
</style>
