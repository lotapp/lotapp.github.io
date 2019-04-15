// 如果使用jq的同志可以改写下脚本，使其兼容更多浏览器（因为是个人博客`<=IE9`我是懒得兼容了）

// 1.显示或者隐藏搜索框（很想用箭头函数，但是需考虑IE高版本兼容性，就常规写法吧）
document.querySelector("nav ul .icon-sousuo").onclick = function () {
    document.querySelector("header .search").classList.toggle("show");
}

// 2.显示不同分类的最新内容
var new_item_doms = document.querySelectorAll(".new_article .new_tabs .new_item");
var li_doms = document.querySelectorAll(".new_article header li");
// IE下不支持li_doms.forEach
for (var i = 0; i < li_doms.length; i++) {
    li_doms[i].index = i; // 存储下当前li对应的序号
    li_doms[i].onclick = function () {
        // 获取同级li元素并移除样式 JQ：$(this).siblings().removeClass()
        for (var j = 0; j < li_doms.length; j++) {
            li_doms[j].classList.remove("bottom_line");
        }
        // 给当前li添加样式
        this.classList.add("bottom_line");

        // 移除其他显示内容
        for (var j = 0; j < new_item_doms.length; j++) {
            new_item_doms[j].classList.remove("show");
            // 主要针对.new_item:first-child的隐藏
            new_item_doms[j].classList.add("hidden");
        }
        // 显示对应的内容
        new_item_doms[this.index].classList.remove("hidden");
        new_item_doms[this.index].classList.add("show");
    }
}

// 3.显示移动端菜单
document.querySelector(".navbox h2 .icon-caidan").onclick = function () {
    document.querySelector(".navbox #nav").classList.toggle("show");
}

// 4.添加过渡动画
window.onload = function () {
    // 加载成功就进行设置
    if (window.ScrollReveal) {
        // 实例化，根据默认配置改即可：https://scrollrevealjs.org/api/defaults.html
        window.ScrollReveal({
            // easing: "ease", // 动画效果
            origin: "right", // 从右边出现
            duration: "1500", // 持续时间1.5s
            reset: true // 循环
        }).reveal(".bloglist li,#header,#banner,.bg_white");
        // 经测试，支持CSS选择器
    }
}