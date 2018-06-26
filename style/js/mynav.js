$(function () {
    // 生成目录索引列表
    var temp_html = '<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt"></div><div class="inner_cell"><div class="text_cell_render border-box-sizing rendered_html"><p><strong>文章汇总：<a href="https://lotapp.github.io" target="_blank">https://www.cnblogs.com/dotnetcrazy/p/9160514.html</a></strong></p>{dntnav}</div></div></div>';
    var h_list = $('#notebook-container h2,#notebook-container h3');//这边你可以自行修改

    if (h_list.length > 0) {
        var content = '<div id="navCategory"><a name="dnttop"></a>';
        content += '<p><b>目录：</b></p>';
        content += '<ul>';
        for (var i = 0; i < h_list.length; i++) {
            var go_to_top = '<a name="_map' + i + '"></a>';
            $(h_list[i]).before(go_to_top);
            //Jupter-NoteBook
            var targetName = h_list[i].tagName.toLowerCase();
            var li2_content = '';
            if (targetName == 'h3') {
                li2_content = '<li style="padding-left: 1em;"><a href="#_map' + i + '">' + $(h_list[i]).text() + '</a></li>';
            } else {
                li2_content = '<li><a href="#_map' + i + '">' + $(h_list[i]).text() + '</a></li>';
            }
            content += li2_content;
        }
        content += '</ul>';
        content += '</div>';
        if ($('#notebook-container').length != 0) {
            $($('#notebook-container')[0]).prepend(temp_html.replace("{dntnav}", content));
        }

        //返回顶部
        var div_cells = $('.text_cell');
        var top_str = '<div style="text-align: right"><p><a href="#dnttop">返回顶部</a></p></div>';
        for (var i = 0; i < div_cells.length;) {
            i += 2;
            $(div_cells[i]).append(top_str);
        }
        $('#notebook-container').append(top_str)
    }
});