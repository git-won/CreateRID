<template>
  <div class="product-list">
    <swiper :slides-per-view="'auto'" :space-between="10" class="my-swiper">
      <swiper-slide v-for="product in products" :key="product.id">
        <div class="product-item">
          <div class="img_wrap">
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="pdt_info">
            <p class="brand">{{ product.brand }}</p>
            <p class="name">{{ product.name }}</p>
            <p class="price">{{ product.price }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  name: "PdtList3Items",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.product-list {
  margin: 0 $margin;
  .my-swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
  }
  .product-item {
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    width: 130px;
    background-color: #fff;
    .img_wrap {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 4px;
      img {
        max-width: 100%;
        height: auto;
      }
    }
    .pdt_info {
      padding: 8px;
      .brand {
        font-size: 11px;
      }
      .name {
        font-size: 13px;
      }
      .price {
        font-size: 13px;
      }
    }
  }
}
</style>
