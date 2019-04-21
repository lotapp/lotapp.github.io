// 1.根据屏幕动态调整html文档的字体（现在移动端都是这么干的）
var set_font_size = function () {
    var dom = document.documentElement;
    // 屏幕大于375的1.5倍就以375的1.5倍来计算（防止PC端头尾太高）
    var clientWidthValue = dom.clientWidth > 562.5 ? 562.5 : dom.clientWidth;
    // 375默认大小是20px，那就等比缩放
    dom.style.fontSize = 20 * (clientWidthValue / 375) + 'px';
}
window.onresize = set_font_size;
// 需要手动执行一次
window.onload = set_font_size;

// 2.xxx