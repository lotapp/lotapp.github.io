var code_list = new Array();
var code_dict = new Array();
var wd;
//遵循开发封闭原则，不改文档自添新功能
$('.table-responsive').prepend('<p id="dntwords"></p><p><a class="btn btn-success">抽查</a>&nbsp;<a class="btn btn-danger">答案</a></p>');

$("strong>code").each(function () {
    var key = $(this).text();
    var value = $(this).parent().parent().html();
    code_list.push(key);
    code_dict[key] = value;
});

$('.btn-success').click(function () {
    var r = Math.ceil(Math.random() * (code_list.length - 1));//生成一个随机值
    wd = code_list[r];
    // console.log($(this).parent().before('<p id="dntwords"></p>'));
    $('#dntwords').html("<code>" + wd + "</code>");//prepend
});

$('.btn-danger').click(function () {
    $('#dntwords').html(code_dict[wd]);//prepend
});