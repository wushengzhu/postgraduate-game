// 防抖
let timeout:any;

function debounce(func:()=>void, wait = 300, immediate = false) {
    // 清除定时器
    if (timeout !== null) {
        clearTimeout(timeout);
    }
    // 立即执行
    if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(function () {
            timeout = null;
        }, wait);
        if (callNow) typeof func === 'function' && func();
    } else {
        timeout = setTimeout(function () {
            typeof func === 'function' && func();
        }, wait);
    }
}

export default debounce;