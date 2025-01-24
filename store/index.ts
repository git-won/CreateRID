import { createStore } from "vuex";
import cart from "./cart";

interface Product {
  id: number;
  brand: string;
  name: string;
  price: string;
  image: string;
}

interface RecommendItem {
  title: string;
  products: Product[];
  link?: string; // optional link property
  linkText?: string; // optional link text property
}

export interface RootState {
  recommendItems: RecommendItem[];
}

const state: RootState = {
  recommendItems: [
    {
      title: "캐주얼 스타일 브랜드 아이템 추천",
      link: "javascript:void(0);", // 링크가 필요한 경우
      linkText: "자세히 보기", // 링크 텍스트 지정
      products: [
        {
          id: 1,
          brand: "Brand A",
          name: "Product 1",
          price: "$85",
          image: require("@/assets/images/pdt/pdt_items01.webp"),
        },
        {
          id: 2,
          brand: "Brand B",
          name: "Product 2",
          price: "$356",
          image: require("@/assets/images/pdt/pdt_items02.webp"),
        },
        {
          id: 3,
          brand: "Brand C",
          name: "Product 3",
          price: "$129",
          image: require("@/assets/images/pdt/pdt_items03.webp"),
        },
        {
          id: 4,
          brand: "Brand D",
          name: "Product 4",
          price: "$271",
          image: require("@/assets/images/pdt/pdt_items04.webp"),
        },
        {
          id: 5,
          brand: "Brand E",
          name: "Product 5",
          price: "$432",
          image: require("@/assets/images/pdt/pdt_items05.webp"),
        },
        {
          id: 6,
          brand: "Brand F",
          name: "Product 6",
          price: "$390",
          image: require("@/assets/images/pdt/pdt_items06.webp"),
        },
        {
          id: 7,
          brand: "Brand G",
          name: "Product 7",
          price: "$107",
          image: require("@/assets/images/pdt/pdt_items07.webp"),
        },
        {
          id: 8,
          brand: "Brand H",
          name: "Product 8",
          price: "$239",
          image: require("@/assets/images/pdt/pdt_items08.webp"),
        },
        {
          id: 9,
          brand: "Brand I",
          name: "Product 9",
          price: "$482",
          image: require("@/assets/images/pdt/pdt_items09.webp"),
        },
        {
          id: 10,
          brand: "Brand J",
          name: "Product 10",
          price: "$315",
          image: require("@/assets/images/pdt/pdt_items10.webp"),
        },
        // 추가 상품들
      ],
    },
    {
      title: "인기 카테고리 트렌드 트레이닝 팬츠 추천",
      link: "javascript:void(0);", // 링크가 필요한 경우
      products: [
        {
          id: 10,
          brand: "Brand J",
          name: "Product 10",
          price: "$205",
          image: require("@/assets/images/pdt/pdt_items10.webp"),
        },
        {
          id: 9,
          brand: "Brand I",
          name: "Product 9",
          price: "$434",
          image: require("@/assets/images/pdt/pdt_items09.webp"),
        },
        {
          id: 8,
          brand: "Brand H",
          name: "Product 8",
          price: "$356",
          image: require("@/assets/images/pdt/pdt_items08.webp"),
        },
        {
          id: 7,
          brand: "Brand G",
          name: "Product 7",
          price: "$121",
          image: require("@/assets/images/pdt/pdt_items07.webp"),
        },
        {
          id: 6,
          brand: "Brand F",
          name: "Product 6",
          price: "$398",
          image: require("@/assets/images/pdt/pdt_items06.webp"),
        },
        {
          id: 1,
          brand: "Brand A",
          name: "Product 1",
          price: "$238",
          image: require("@/assets/images/pdt/pdt_items01.webp"),
        },
        {
          id: 2,
          brand: "Brand B",
          name: "Product 2",
          price: "$106",
          image: require("@/assets/images/pdt/pdt_items02.webp"),
        },
        {
          id: 3,
          brand: "Brand C",
          name: "Product 3",
          price: "$462",
          image: require("@/assets/images/pdt/pdt_items03.webp"),
        },
        {
          id: 4,
          brand: "Brand D",
          name: "Product 4",
          price: "$59",
          image: require("@/assets/images/pdt/pdt_items04.webp"),
        },
        {
          id: 5,
          brand: "Brand E",
          name: "Product 5",
          price: "$299",
          image: require("@/assets/images/pdt/pdt_items05.webp"),
        },
        // 추가 상품들
      ],
    },
    {
      title: "스포츠 종목 아이템 추천 골프",
      products: [
        {
          id: 7,
          brand: "Brand G",
          name: "Product 7",
          price: "$121",
          image: require("@/assets/images/pdt/pdt_items07.webp"),
        },
        {
          id: 6,
          brand: "Brand F",
          name: "Product 6",
          price: "$398",
          image: require("@/assets/images/pdt/pdt_items06.webp"),
        },
        {
          id: 1,
          brand: "Brand A",
          name: "Product 1",
          price: "$238",
          image: require("@/assets/images/pdt/pdt_items01.webp"),
        },
        {
          id: 2,
          brand: "Brand B",
          name: "Product 2",
          price: "$106",
          image: require("@/assets/images/pdt/pdt_items02.webp"),
        },
        {
          id: 3,
          brand: "Brand C",
          name: "Product 3",
          price: "$462",
          image: require("@/assets/images/pdt/pdt_items03.webp"),
        },
        {
          id: 4,
          brand: "Brand D",
          name: "Product 4",
          price: "$59",
          image: require("@/assets/images/pdt/pdt_items04.webp"),
        },
        {
          id: 5,
          brand: "Brand E",
          name: "Product 5",
          price: "$299",
          image: require("@/assets/images/pdt/pdt_items05.webp"),
        },
        {
          id: 10,
          brand: "Brand J",
          name: "Product 10",
          price: "$205",
          image: require("@/assets/images/pdt/pdt_items10.webp"),
        },
        {
          id: 9,
          brand: "Brand I",
          name: "Product 9",
          price: "$434",
          image: require("@/assets/images/pdt/pdt_items09.webp"),
        },
        {
          id: 8,
          brand: "Brand H",
          name: "Product 8",
          price: "$356",
          image: require("@/assets/images/pdt/pdt_items08.webp"),
        },
        // 추가 상품들
      ],
    },
  ],
};

const store = createStore({
  state,
  getters: {
    getRecommendItems: (state: RootState) => state.recommendItems,
  },
  modules: {
    cart,
  },
});

export default store;
