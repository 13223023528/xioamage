// 函数防抖
// func 为需要减少执行次数的函数 delay 为几秒之内不执行 func 函数
export function debounce(func, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply();
    }, delay)
  }
}