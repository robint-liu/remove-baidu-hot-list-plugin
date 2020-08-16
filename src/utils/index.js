/**
 * 函数防抖
 * @param {function} fn 处理函数
 * @param {object} params 处理函数时的参数
 * @param {boolean} params.immediate 是否立即执行处理函数
 * @param {number} params.delay 延迟时间 毫秒
 */
export const debounce = function(fn, params) {
  const { immediate = false, delay = 300 } = params || {};
  var firstTimer = true,
    timer;
  return function() {
    if (immediate) {
      if (!firstTimer) {
        return;
      }
      fn.call(this, arguments);
      setTimeout(() => {
        firstTimer = true;
      }, delay);
      return (firstTimer = false);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, arguments);
    }, delay);
  };
};
