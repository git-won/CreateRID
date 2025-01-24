<template>
  <div class="main">
    <!-- <video
      class="vjs-tech"
      data-quality="high"
      loop=""
      muted="muted"
      poster="https://media.musinsa.com/video/3723/poster/poster.jpg"
      id="vjs_video_3_html5_api"
      tabindex="-1"
      preload="none"
      playsinline="playsinline"
      src="blob:https://www.musinsa.com/18e621ad-95f9-4758-b649-49218a388858"
    >
      <source
        src="https://media.musinsa.com/video/3723/converted/w1080_h1296_r83.33.m3u8"
        type="application/x-mpegURL"
      />
    </video> -->
  </div>
  <div class="timer">
    <h3>24시간 한정 타임세일</h3>
    <p>매일 11시 갱신되는 타임세일</p>
    <div>
      <span class="hours">{{ currentTime.hours }}</span> :
      <span class="minutes">{{ currentTime.minutes }}</span> :
      <span class="seconds">{{ currentTime.seconds }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "monthEvent",
  setup() {
    const currentTime = ref({
      hours: "",
      minutes: "",
      seconds: "",
    });

    const updateCurrentTime = () => {
      const now = new Date();
      currentTime.value.hours = String(now.getHours()).padStart(2, "0");
      currentTime.value.minutes = String(now.getMinutes()).padStart(2, "0");
      currentTime.value.seconds = String(now.getSeconds()).padStart(2, "0");
    };

    onMounted(() => {
      updateCurrentTime();
      setInterval(updateCurrentTime, 1000);
    });

    return { currentTime };
  },
});
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  video {
    width: 100%;
  }
}
h3 {
  font-size: 22px;
  margin: 10px 0;
}
</style>
