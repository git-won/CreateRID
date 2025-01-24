<template>
  <div class="search">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="이미스데이 최대 45% 할인"
    />
    <font-awesome-icon :icon="['fas', 'search']" class="search-icon" />
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch);

export default {
  name: "HeaderSearch",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
};
</script>

<style scoped lang="scss">
.search {
  position: relative;
  padding: 0 $margin;
  input[type="text"] {
    width: 100%;
    padding: 10px 40px 10px 8px; /* 오른쪽 패딩 추가 */
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .search-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #ccc;
  }
}
</style>
