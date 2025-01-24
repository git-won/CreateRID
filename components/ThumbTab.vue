<template>
  <div ref="scrollContainer" class="scroll-container">
    <ul class="scroll-content">
      <li
        v-for="(item, index) in ThumbLists"
        :key="item"
        :class="{ thumbItems: true, active: activeIndex === index }"
        @mousedown="handleMouseDown(item, $event)"
        @mouseup="handleMouseUp(item, index)"
        @mouseleave="handleMouseLeave"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType } from "vue";

export default defineComponent({
  name: "ThumbTab",
  props: {
    ThumbLists: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup(props) {
    const scrollContainer = ref<HTMLElement | null>(null);
    const activeIndex = ref(0);
    let clickTimeout: number | undefined;

    const handleClick = (item: string) => {
      console.log("Clicked item:", item);
    };

    const handleMouseDown = (item: string, event: MouseEvent) => {
      event.preventDefault(); // 기본 마우스 이벤트 방지
      clickTimeout = window.setTimeout(() => {
        clickTimeout = undefined;
      }, 200);
    };

    const handleMouseUp = (item: string, index: number) => {
      if (clickTimeout !== undefined) {
        clearTimeout(clickTimeout);
        clickTimeout = undefined;
        handleClick(item);
        activeIndex.value = index;
      }
    };

    const handleMouseLeave = () => {
      if (clickTimeout !== undefined) {
        clearTimeout(clickTimeout);
        clickTimeout = undefined;
      }
    };

    onMounted(() => {
      if (scrollContainer.value) {
        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        scrollContainer.value.addEventListener("mousedown", (e: MouseEvent) => {
          if (scrollContainer.value) {
            isDown = true;
            startX = e.pageX - scrollContainer.value.offsetLeft;
            scrollLeft = scrollContainer.value.scrollLeft;
          }
        });

        scrollContainer.value.addEventListener("mouseleave", () => {
          isDown = false;
        });

        scrollContainer.value.addEventListener("mouseup", () => {
          isDown = false;
        });

        scrollContainer.value.addEventListener("mousemove", (e: MouseEvent) => {
          if (!isDown || !scrollContainer.value) return;
          e.preventDefault();
          const x = e.pageX - scrollContainer.value.offsetLeft;
          const walk = (x - startX) * 1; // 드래그 속도 조절
          scrollContainer.value.scrollLeft = scrollLeft - walk;
        });
      }
    });

    return {
      scrollContainer,
      activeIndex,
      handleMouseDown,
      handleMouseUp,
      handleMouseLeave,
    };
  },
});
</script>

<style scoped lang="scss">
.scroll-container {
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .scroll-content {
    width: max-content;
    padding: 4px $margin;
    display: flex;
    .thumbItems {
      font-size: 14px;
      flex-shrink: 0;
      border: 1px solid #666;
      border-radius: 4px;
      padding: 6px 8px;
      margin: 0 4px;
      pointer-events: auto;
      user-select: none; /* 텍스트 선택 방지 */
      &.active {
        background-color: #666;
        color: #fff;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
