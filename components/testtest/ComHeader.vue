<template>
  <div class="header">
    <h1 class="logo">{{ msg }}</h1>
    <ul>
      <li><a href="">123</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComHeader",
  props: {
    msg: {
      type: String,
      default: "메세지!",
    },
  },
  created() {
    console.log("컴포넌트가 생성되었습니다.");
    console.log(
      "컴포넌트가 생성되고 나서 즉시 실행됩니다. 컴포넌트의 데이터가 초기화된 후 실행되므로, API 호출이나 데이터 초기화 등의 작업을 수행할 때 유용합니다."
    );
  },
  mounted() {
    console.log("컴포넌트가 DOM에 마운트되었습니다.");
    console.log(
      "컴포넌트가 DOM에 마운트된 후 실행됩니다. DOM 조작이나 외부 라이브러리 초기화 등의 작업을 수행할 때 사용됩니다."
    );
  },
  beforeUpdate() {
    console.log("DOM이 업데이트되기 전에 실행됩니다.");
    console.log(
      "데이터가 변경되어 DOM이 업데이트되기 전에 실행됩니다. 데이터 변경 직전에 어떤 작업을 수행하거나, 업데이트를 취소하고 싶을 때 사용됩니다."
    );
  },
  updated() {
    console.log("DOM이 업데이트되었습니다.");
    console.log(
      "데이터가 변경되어 DOM이 업데이트된 후 실행됩니다. DOM이 새로 고쳐진 후의 상태를 확인하거나, 업데이트 이후의 작업을 수행할 때 유용합니다."
    );
  },
  /* beforeUnmount() {
    console.log("컴포넌트가 DOM에서 제거되기 전에 실행됩니다.");
    console.log("컴포넌트가 DOM에서 제거되기 전에 실행됩니다.");
  },
  unmounted() {
    console.log("컴포넌트가 DOM에서 제거되었습니다.");
    console.log("컴포넌트가 DOM에서 제거되었습니다.");
  }, */
});
</script>

<style scoped lang="scss">
h1 {
  font-size: 0;
  a {
    color: #000;
  }
}
</style>
