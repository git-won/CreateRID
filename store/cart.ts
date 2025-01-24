import { Module, Commit } from "vuex";
import { RootState } from "./index";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  soldOut: boolean;
}

interface CartState {
  items: CartItem[];
  selectedItems: number[]; // 선택된 아이템 ID 목록 추가
}

const state: CartState = {
  items: [
    {
      id: 1,
      name: "상품 1",
      price: 25000,
      image: require("@/assets/images/pdt/pdt_items01.webp"),
      quantity: 1,
      soldOut: false,
    },
    {
      id: 2,
      name: "상품 2",
      price: 11000,
      image: require("@/assets/images/pdt/pdt_items02.webp"),
      quantity: 1,
      soldOut: false,
    },
    /* {
      id: 3,
      name: "상품 3",
      price: 17000,
      image: require("@/assets/images/pdt/pdt_items03.webp"),
      quantity: 1,
      soldOut: false,
    },
    {
      id: 4,
      name: "상품 4",
      price: 33000,
      image: require("@/assets/images/pdt/pdt_items04.webp"),
      quantity: 1,
      soldOut: false,
    },
    {
      id: 5,
      name: "상품 5",
      price: 129000,
      image: require("@/assets/images/pdt/pdt_items05.webp"),
      quantity: 1,
      soldOut: false,
    }, */
    {
      id: 6,
      name: "상품 6",
      price: 78900,
      image: require("@/assets/images/pdt/pdt_items06.webp"),
      quantity: 1,
      soldOut: true,
    },
    {
      id: 7,
      name: "상품 7",
      price: 53200,
      image: require("@/assets/images/pdt/pdt_items07.webp"),
      quantity: 1,
      soldOut: true,
    },
    {
      id: 8,
      name: "상품 8",
      price: 37000,
      image: require("@/assets/images/pdt/pdt_items08.webp"),
      quantity: 1,
      soldOut: true,
    },
    /* {
      id: 9,
      name: "상품 9",
      price: 89000,
      image: require("@/assets/images/pdt/pdt_items09.webp"),
      quantity: 1,
      soldOut: false,
    },
    {
      id: 10,
      name: "상품 10",
      price: 219000,
      image: require("@/assets/images/pdt/pdt_items10.webp"),
      quantity: 1,
      soldOut: false,
    }, */
  ],
  selectedItems: [], // 선택된 아이템 목록 초기화
};

const mutations = {
  INCREASE_QUANTITY(state: CartState, item: CartItem) {
    item.quantity++;
  },
  DECREASE_QUANTITY(state: CartState, item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  },
  REMOVE_FROM_CART(state: CartState, itemId: number) {
    state.items = state.items.filter((item) => item.id !== itemId);
  },
  CLEAR_CART(state: CartState) {
    state.items = [];
  },
  CLEAR_SOLDOUT_ITEMS(state: CartState) {
    state.items = state.items.filter((item) => !item.soldOut);
  },
  UPDATE_SELECTED_ITEMS(state: CartState, selectedItems: number[]) {
    state.selectedItems = selectedItems;
  },
};

const actions = {
  increaseQuantity({ commit }: { commit: Commit }, item: CartItem) {
    commit("INCREASE_QUANTITY", item);
  },
  decreaseQuantity({ commit }: { commit: Commit }, item: CartItem) {
    commit("DECREASE_QUANTITY", item);
  },
  removeFromCart({ commit }: { commit: Commit }, itemId: number) {
    commit("REMOVE_FROM_CART", itemId);
  },
  clearCart({ commit }: { commit: Commit }) {
    commit("CLEAR_CART");
  },
  clearSoldOutItems({ commit }: { commit: Commit }) {
    commit("CLEAR_SOLDOUT_ITEMS");
  },
  updateSelectedItems({ commit }: { commit: Commit }, selectedItems: number[]) {
    commit("UPDATE_SELECTED_ITEMS", selectedItems);
  },
};

const getters = {
  cartItems(state: CartState) {
    return state.items;
  },
  cartTotal(state: CartState) {
    return state.selectedItems.reduce((total, itemId) => {
      const item = state.items.find((item) => item.id === itemId);
      return item ? total + item.price * item.quantity : total;
    }, 0);
  },
};

const cart: Module<CartState, RootState> = {
  state,
  mutations,
  actions,
  getters,
};

export default cart;
