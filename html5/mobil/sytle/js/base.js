// 1.根据屏幕动态调整html文档的字体（现在移动端都是这么干的）
var set_font_size = function () {
    var docElement = document.documentElement;
    var clientWidthValue = docElement.clientWidth > 750 ? 750 : docElement.clientWidth;
    docElement.style.fontSize = 20 * (clientWidthValue / 375) + 'px';
}
window.onresize = set_font_size;
// 需要手动执行一次
window.onload = set_font_size;

// 2.