$(function() {
    $(".btn").click(function() {
        $(this).button('loading').delay(1000).queue(function() {
            $(this).button('reset');
            $(this).dequeue();
        });
    });
    $(".div_collapse").click(function() {
        var s = $(this).attr("state");
        if (s == 1) {
            $(this).attr("state", 0);
            $(this).children().children().text("收起");
        } else {
            $(this).attr("state", 1);
            $(this).children().children().text("展开,输入或修改参数");
        }
    })



    var arr = [
        [16.00, 16.00, 16.00, 15.00, 16.00, 13.00, 13.00, 14.00, 13.00, 15.00, 11.00, 17.00, 20.00, 18.00, 12.00, 11.00, 17.00, 13.00, 19.00, 14.00, 13.00, 16.00, 18.00, 14.00, 15.00],
        [14.00, 15.00, 13.00, 13.00, 15.00, 13.00, 11.00, 16.00, 17.00, 14.00, 19.00, 16.00, 19.00, 16.00, 13.00, 20.00, 17.00, 15.00, 13.00, 14.00, 17.00, 15.00, 18.00, 15.00, 14.00],
        [13.00, 13.00, 16.00, 13.00, 16.00, 14.00, 15.00, 17.00, 14.00, 17.00, 14.00, 14.00, 18.00, 13.00, 15.00, 14.00, 15.00, 18.00, 10.00, 16.00, 17.00, 14.00, 17.00, 16.00, 16.00],
        [12.00, 15.00, 15.00, 13.00, 14.00, 17.00, 17.00, 14.00, 17.00, 20.00, 15.00, 11.00, 19.00, 15.00, 12.00, 17.00, 13.00, 11.00, 12.00, 14.00, 16.00, 17.00, 17.00, 15.00, 14.00],
        [17.00, 17.00, 15.00, 14.00, 17.00, 18.00, 13.00, 14.00, 13.00, 18.00, 17.00, 16.00, 16.00, 13.00, 13.00, 9.00, 15.00, 13.00, 14.00, 13.00, 14.00, 16.00, 13.00, 14.00, 14.00]
    ];
    var arr_xs = new Array();
    //初始化，定下有多少行
    for (i = 0; i < arr[0].length; i++) {
        arr_xs[i] = [];
    }

    for (var m = 0; m < arr.length; m++) {
        for (var n = 0; n < arr[m].length; n++) {
            arr_xs[n][m] = arr[m][n];
        }
    }
    var html = "";
    var ii = 0;
    var html_th = "";

    if (arr_xs.length != 5) {
        var x = 0;
        $('#_thead').append('<th  class="border">序号</th>');
        for (var i = 0; i < arr_xs[0].length; i++) {
            x = i + 1;
            $('#_thead').append('<th class="border" >' + x + '</th>');
        }
        $('#_thead').append('<th class="border">ΣＸ</th><th  class="border">Ｘ</th><th  class="border">S</th>');
        $('#_head').hide();
    }
    var xs = new Array();
    for (var i = 0; i < arr_xs.length; i++) {
        ii = i + 1;
        html += '<tr class="max_width">';
        html += '<td> ' + ii + '</td >';
        for (var j = 0; j < arr_xs[i].length; j++) {
            html += '<td><input type="text" value="' + fixed(arr_xs[i][j]) + '"></td>';
            xs[j] = arr_xs[i][j];
        }
        html += _js(xs);
        html += '</tr>';
        $("#parameter").append(html);
        html = "";
        $("#par").hide();
    }
});

function _js(arr) {

    var sum = 0;
    //自身相乘后再累加
    var sum_all = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        sum_all += arr[i] * arr[i];
    }
    // var R = Math.max.apply(null, arr) - Math.min.apply(null, arr);
    var X = sum / arr.length;


    var S = 0;
    S = Math.sqrt((sum_all - arr.length * X * X) / (arr.length - 1));
    var html = '<td class="sum">' + sum.toFixed(2) + '</td><td class="X">' + X.toFixed(2) + '</td><td class="S">' + S.toFixed(2) + '</td>';
    return html;
}

function fixed(num) {
    return num.toFixed(2);
}