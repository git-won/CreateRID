<template>
  <div class="main-slider">
    <swiper
      :slides-per-view="1"
      :loop="true"
      :autoplay="autoplayConfig"
      class="main-swiper"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.alt" class="slide-image" />
        <div class="txt">
          <p class="tit">{{ slide.tit }}</p>
          <p class="des">{{ slide.des }}</p>
        </div>
      </swiper-slide>
      <div class="more-icon" @click="onMoreClick">
        <span>+</span>
      </div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  name: "MainSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        {
          image: require("@/assets/images/common/slide1.jpg"),
          alt: "Slide 1",
          tit: "첫 구매 혜택 최대 6만 5천 원",
          des: "20% 쿠폰과 웰컴딜까지",
        },
        {
          image: require("@/assets/images/common/slide2.jpg"),
          alt: "Slide 2",
          tit: "첫 구매 한정수량 인기상품 100원~",
          des: "첫 구매 혜택",
        },
        {
          image: require("@/assets/images/common/slide3.jpg"),
          alt: "Slide 3",
          tit: "여성복 첫 구매 25% 할인 쿠폰",
          des: "코드그라피, 어반드레스 외",
        },
        {
          image: require("@/assets/images/common/slide4.jpg"),
          alt: "Slide 4",
          tit: "1월의 신발장 최대 30% 할인",
          des: "킨",
        },
        // 추가 슬라이드를 여기에 추가
      ],
      autoplayConfig: {
        delay: 5000,
        disableOnInteraction: false,
      },
    };
  },
  methods: {
    onMoreClick() {
      // 더보기 기능 로직 추가
      console.log("더보기 클릭됨");
    },
  },
};
</script>

<style scoped lang="scss">
.main-slider {
  position: relative;
  .main-swiper {
    position: relative;
    width: 100%;
    height: auto;
    .swiper-slide {
      .slide-image {
        width: 100%;
        height: auto;
      }
      .txt {
        position: absolute;
        left: 20px;
        bottom: 20px;
        color: #fff;
        .tit {
          font-size: 22px;
          font-weight: 500;
          letter-spacing: 0;
          line-height: 28px;
        }
        .des {
          font-size: 13px;
          letter-spacing: 0;
          line-height: 18px;
        }
      }
    }
  }
  .more-icon {
    position: absolute;
    bottom: 15px;
    right: 10px;
    color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
  }
  .more-icon span {
    font-size: 30px;
    line-height: 24px;
  }
}
</style>
