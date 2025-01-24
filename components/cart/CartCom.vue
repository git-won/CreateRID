<template>
  <div class="cart">
    <h1>장바구니</h1>
    <div class="cart-actions">
      <!-- 전체 선택/해제 버튼 -->
      <button @click="toggleSelectAll" class="select-all-button">
        {{ allSelected ? "전체 해제" : "전체 선택" }}
      </button>
      <!-- 선택된 상품 삭제 버튼 -->
      <button class="delete-selected-button" @click="deleteSelectedItems">
        선택상품 삭제
      </button>
      <!-- 품절 상품 삭제 버튼 -->
      <button class="clear-soldout-button" @click="clearSoldOutItems">
        품절 상품 삭제
      </button>
      <!-- 전체 삭제 버튼 -->
      <button class="clear-cart-button" @click="clearCart">전체 삭제</button>
    </div>
    <!-- 장바구니 항목 목록 컴포넌트 -->
    <CartItemList
      :cartItems="cartItems"
      :selectedItems="selectedItems"
      @update-selected-items="updateSelectedItems"
      @increase-quantity="increaseQuantity"
      @decrease-quantity="decreaseQuantity"
      @remove-from-cart="removeFromCart"
    />
    <!-- 총 합계 표시 -->
    <div v-if="cartItems.length" class="cart-bottom">
      <div class="cart-total">
        <div>총 합계</div>
        <div>{{ formattedCartTotal }}원</div>
      </div>
      <div class="btn">구매하기</div>
    </div>
    <!-- 장바구니가 비어 있을 때 표시 -->
    <div v-else class="empty-cart">
      <p>장바구니가 비어 있습니다.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; // Vuex의 mapGetters와 mapActions를 가져옵니다.
import CartItemList from "./CartItemList.vue"; // CartItemList 컴포넌트를 가져옵니다.

export default {
  name: "CartCom", // 컴포넌트의 이름을 설정합니다.
  components: {
    CartItemList, // 하위 컴포넌트로 CartItemList를 등록합니다.
  },
  data() {
    return {
      // 컴포넌트의 로컬 상태를 설정합니다.
      allSelected: false, // 초기 상태는 전체 선택 해제 상태입니다.
    };
  },
  computed: {
    // 계산된 속성을 정의합니다.
    // Vuex 스토어에서 cartItems를 가져옵니다.
    ...mapGetters(["cartItems"]),
    // Vuex 스토어에서 selectedItems를 가져오고 설정합니다.
    selectedItems: {
      get() {
        // 현재 선택된 아이템을 Vuex 스토어에서 가져옵니다. 선택된 아이템이 없으면 빈 배열을 반환합니다.
        return this.$store.state.cart.selectedItems || [];
      },
      set(value) {
        // 선택된 아이템을 Vuex 스토어에 설정합니다.
        this.$store.commit("UPDATE_SELECTED_ITEMS", value);
      },
    },
    // 선택된 아이템의 총합계를 계산합니다.
    cartTotal() {
      // 품절 상태가 아닌 선택된 아이템 목록을 가져와서 각 아이템의 가격과 수량을 곱하여 합계를 계산합니다.
      return this.selectedItems.reduce((total, itemId) => {
        const item = this.cartItems.find(
          (item) => item.id === itemId && !item.soldOut
        );
        if (item) {
          const itemTotal = item.price * item.quantity;
          return total + itemTotal;
        }
        return total;
      }, 0);
    },
    // 총 합계를 포맷팅합니다.
    formattedCartTotal() {
      // cartTotal을 천 단위마다 쉼표로 구분하여 문자열로 변환합니다.
      return new Intl.NumberFormat().format(this.cartTotal);
    },
  },
  methods: {
    // Vuex 스토어의 액션을 컴포넌트 메서드로 매핑합니다.
    ...mapActions([
      "increaseQuantity",
      "decreaseQuantity",
      "removeFromCart",
      "clearCart",
      "clearSoldOutItems",
      "updateSelectedItems",
    ]),
    // 선택된 아이템을 업데이트합니다.
    updateSelectedItems(items) {
      // 선택된 아이템을 Vuex 스토어에 설정합니다.
      this.$store.commit("UPDATE_SELECTED_ITEMS", items);
      // allSelected 상태를 업데이트합니다. (선택된 아이템 수와 전체 아이템 수 비교)
      this.allSelected =
        items.length === this.cartItems.filter((item) => !item.soldOut).length;
    },
    // 전체 선택/해제 기능을 토글합니다.
    toggleSelectAll() {
      // allSelected 상태를 반전시킵니다.
      this.allSelected = !this.allSelected;
      // 전체 선택 상태일 경우 soldOut이 false인 아이템의 ID를 선택, 아니면 빈 배열을 설정합니다.
      const selectedItems = this.allSelected
        ? this.cartItems.filter((item) => !item.soldOut).map((item) => item.id)
        : [];
      // 선택된 아이템을 업데이트합니다.
      this.updateSelectedItems(selectedItems);
    },
    // 액션 수행 전에 확인 알림창을 표시합니다.
    async confirmAction(message) {
      return new Promise((resolve) => {
        if (confirm(message)) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    },
    // 선택된 상품을 삭제합니다.
    async deleteSelectedItems() {
      const confirmed = await this.confirmAction(
        "선택한 상품을 삭제하시겠습니까?"
      );
      if (confirmed) {
        // 선택된 아이템을 각각 삭제합니다.
        this.selectedItems.forEach((itemId) => {
          this.removeFromCart(itemId);
        });
        // 선택된 아이템을 초기화합니다.
        this.updateSelectedItems([]);
      }
    },
    // 장바구니를 비웁니다.
    async clearCart() {
      const confirmed = await this.confirmAction("장바구니를 비우시겠습니까?");
      if (confirmed) {
        this.$store.dispatch("clearCart");
      }
    },
    // 품절된 상품을 삭제합니다.
    async clearSoldOutItems() {
      const confirmed = await this.confirmAction(
        "품절 상품을 삭제하시겠습니까?"
      );
      if (confirmed) {
        this.$store.dispatch("clearSoldOutItems");
      }
    },
  },
  // 컴포넌트가 마운트될 때 호출되는 라이프사이클 훅입니다.
  mounted() {
    // 모든 soldOut이 false인 아이템을 초기 선택 상태로 설정합니다.
    const selectedItems = this.cartItems
      .filter((item) => !item.soldOut)
      .map((item) => item.id);
    // 선택된 아이템을 업데이트합니다.
    this.updateSelectedItems(selectedItems);
  },
};
</script>

<style scoped lang="scss">
.cart {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }
  .cart-actions {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
    & > button {
      padding: 10px 20px;
      font-size: 16px;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      &.select-all-button {
        background-color: #4caf50;
      }
      &.delete-selected-button {
        background-color: #1976d2;
      }
      &.clear-soldout-button {
        background-color: #ff9800;
      }
      &.clear-cart-button {
        background-color: #f00;
      }
    }
  }
  .cart-bottom {
    position: sticky;
    bottom: 0;
    padding: 20px 0;
    background-color: #fff;
    .cart-total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: 20px;
      font-weight: bold;
      text-align: right;
      color: #333;
      padding-bottom: 20px;
      font-weight: bold;
    }
    .btn {
      width: 100%;
      background-color: #111;
      color: #fff;
      text-align: center;
      font-size: 18px;
      padding: 16px 0;
      border-radius: 8px;
      font-weight: bold;
    }
  }
  .empty-cart {
    text-align: center;
    color: #666;
  }
}
</style>
