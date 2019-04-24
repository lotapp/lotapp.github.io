$(function () {
    //发音
    $('.container').on("click", "code", function () {
        // console.log($(this).text());
        $('body').append('<audio src="http://dict.youdao.com/dictvoice?audio=' + $(this).text() + '" autoplay>你的浏览器不支持</audio>');
    });
    // 生成目录索引列表
    var temp_html = '<a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=dotnetcrazy@qq.com" name="dnttop" target="_blank">欢迎纠正指错～</a><div class="panel panel-info"><div class="panel-heading"><h4 class="panel-title">目录</h4></div><div class="panel-body">{dntnav}</div></div>';
    var h_list = $('.container h1,.container h2,.container h3,.container h4'); //这边你可以自行修改

    if (h_list.length > 0) {
        var content = '<nav>';
        content += '<ul class="list-unstyled">';
        for (var i = 0; i < h_list.length; i++) {
            var go_to_top = '<a name="_map' + i + '"></a>';
            $(h_list[i]).before(go_to_top);
            var targetName = h_list[i].tagName.toLowerCase();
            var li2_content = '';
            if (targetName == 'h1') {
                li2_content = '<li><a href="#_map' + i + '">' + $(h_list[i]).text() + '</a></li>';
            } else if (targetName == 'h2') {
                li2_content = '<li style="padding-left: 0.5em;"><a href="#_map' + i + '">' + $(h_list[i]).text() + '</a></li>';
            } else if (targetName == 'h3') {
                li2_content = '<li style="padding-left: 1em;"><a href="#_map' + i + '">' + $(h_list[i]).text() + '</a></li>';
            } else if (targetName == 'h4') {
                li2_content = '<li style="padding-left: 1.5em;"><a href="#_map' + i + '">' + $(h_list[i]).text() + '</a></li>';
            }
            content += li2_content;
        }
        content += '</ul>';
        content += '</nav>';
        if ($('.container').length != 0) {
            $($('.container')[0]).prepend(temp_html.replace("{dntnav}", content));
        }
        //返回顶部
        var div_cells = $('.table-responsive');
        var top_str = '<div style="text-align: right"><p><a href="#dnttop">返回顶部</a></p></div>';
        for (var i = 0; i < div_cells.length;) {
            i += 2;
            $(div_cells[i]).append(top_str);
        }
        $('.container').append(top_str)
    }
});