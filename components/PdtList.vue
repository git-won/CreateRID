<template>
  <div class="pdtList" id="pdtList">
    <ul>
      <li v-for="(product, index) in paginatedItems" :key="index">
        <a>
          <img :src="product.image" alt="" />
          <span class="brand">{{ product.brand }}</span>
          <span class="name">{{ product.name }}</span>
          <span class="price">{{ product.price }}</span>
        </a>
      </li>
    </ul>
    <!-- 페이지네이션 컨트롤 -->
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">&lt;</button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        &gt;
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "PdtList",
  setup() {
    const store = useStore();
    const currentPage = ref(1);
    const pageSize = ref(12);

    const recommendItems = computed(() => {
      return store.getters.getRecommendItems.flatMap(
        (item: { products: any }) => item.products
      );
    });

    const totalPages = computed(() => {
      return Math.ceil(recommendItems.value.length / pageSize.value);
    });

    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value;
      const end = start + pageSize.value;
      return recommendItems.value.slice(start, end);
    });

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
        scrollToTop();
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
        scrollToTop();
      }
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
      scrollToTop();
    };

    return {
      recommendItems,
      currentPage,
      pageSize,
      totalPages,
      paginatedItems,
      prevPage,
      nextPage,
      goToPage,
    };
  },
});
</script>

<style scoped lang="scss">
#pdtList {
  padding: 10px;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
    li {
      //width: calc(25% - 8px); // 한 줄에 4개씩 배치
      width: 24%;
      flex-grow: 1;
      a {
        display: block;
        span {
          display: block;
          &.brand {
            font-size: 15px;
          }
          &.name {
            font-size: 14px;
          }
          &.price {
            font-size: 16px;
          }
        }
      }
      img {
        border: 1px solid #ddd;
        width: 100%;
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    button {
      padding: 6px 12px;
      font-size: 16px;
      color: #fff;
      background-color: #ccc;
      color: #000;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      &.active {
        background-color: #000;
        color: #fff;
      }
      &:disabled {
        background-color: #eee;
        cursor: not-allowed;
      }
    }
  }
}
</style>
