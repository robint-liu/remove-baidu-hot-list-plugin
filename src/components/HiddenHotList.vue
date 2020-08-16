<template>
  <div class="hidden-hotList">
    <button class="hidden-hotList-button" @click="hiddenHotList">隐藏热榜</button>
  </div>
</template>

<script>
import { debounce } from "../utils/index";
export default {
  name: "HiddenHotList",
  methods: {
    hiddenHotList: debounce(
      function (event) {
        // 阻止冒泡
        event.stopPropagation
          ? event.stopPropagation()
          : (event.cancelBubble = true);
        try {
          // eslint-disable-next-line
          chrome.tabs.query(
            {
              active: true,
              currentWindow: true,
            },
            ([tab]) => {
              // eslint-disable-next-line
              chrome.tabs.sendMessage(tab.id, { needHiddenHotList: true });
            }
          );
        } catch (err) {
          console.error(err);
        }
      },
      { delay: 1000, immediate: true }
    ),
  },
};
</script>

<style scoped>
.hidden-hotList-button {
  display: inline-block;
  height: 24px;
  padding: 0 7px;
  font-size: 14px;

  line-height: 1.5715;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  outline: 0;
}
.hidden-hotList-button:hover {
  cursor: pointer;
  background: rgba(24, 144, 255, 0.85);
}
</style>
