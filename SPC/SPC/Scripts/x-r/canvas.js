$(function () {
    var canvasX = $("#canvasX")[0];
    var contextX = canvasX.getContext('2d');
    Draw(contextX);


    var canvasR = $("#canvasR")[0];
    var contextR = canvasR.getContext('2d');
    fillMoon(contextR, 2, 400, 400, 300, 0);
});



//d是控制点的横坐标值
function fillMoon(cxt, d, x, y, R, rot,/*optional*/fillColor) {
    cxt.save();
    cxt.translate(x, y);
    cxt.rotate(rot * Math.PI / 180);
    cxt.scale(R, R);
    pathMoon(cxt, d);
    cxt.fillStyle = fillColor || "#fb5";
    cxt.fill();
    cxt.restore();
}
function pathMoon(cxt, d) {
    cxt.beginPath();
    cxt.arc(0, 0, 1, 0.5 * Math.PI, 1.5 * Math.PI, true);
    cxt.moveTo(0, -1);
    cxt.quadraticCurveTo(1.2, 0, 0, 1);
    cxt.closePath();
}
function dis(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

function Draw(cxt) {
    //1,获取值
    var arr = $(".X");
    var arr1 = [];
    arr.each(function () {
        arr1.push($(this).text());
    });

    cxt.font = "14px 宋体";	//css font属性

    var x_text = 1.00;
    //画5条线
    var y1, y2; x1 = 50, x2 = 830;
    var ii = 7,jj=27;
    for (var i = 0; i < ii; i++) {
        var y = i * 20 + 30;
       
        if (i == 0 || i == ii - 1) {
            if (i == 0) {
                y1 = y;
            } else {
                y2 = y;
            }            
            cxt.strokeStyle = "black"; //设置画笔的颜色
        } else if (i == 1 || i == 5) {
            cxt.strokeStyle = "blue"; //设置画笔的颜色
        } else if (i == 2 || i == 4) {
            cxt.strokeStyle = "red"; //设置画笔的颜色
        } else if (i == 3) {
            cxt.strokeStyle = "yellow"; //设置画笔的颜色
        }

        cxt.beginPath();	//开启新路径				
        cxt.lineWidth = 1;	//设定画笔的宽度				
       				
        cxt.moveTo(x1, y);	//设定笔触的位置				
        cxt.lineTo(x2, y);	//设置移动的方式				
        cxt.stroke();		//画线				
        cxt.closePath();	//封闭路径

        //写数字
        var fix = fixed(x_text - i * 0.10);
        cxt.fillText(fix, 50 - 35, y+5);
    }
    cxt.beginPath();	//开启新路径				
    cxt.lineWidth = 1;	//设定画笔的宽度
    cxt.moveTo(x1, y1);	//设定笔触的位置				
    cxt.lineTo(x1, y2);	//设置移动的方式
    cxt.moveTo(x2, y1);	//设定笔触的位置				
    cxt.lineTo(x2, y2);	//设置移动的方式				
    cxt.stroke();		//画线				
    cxt.closePath();	//封闭路径

    
    for (var j = 0; j < jj; j++) {
        var x = j * 30 + 50;
        cxt.beginPath();	//开启新路径				
        cxt.lineWidth = 1;	//设定画笔的宽度				
        cxt.strokeStyle = "black"; //设置画笔的颜色
        cxt.moveTo(x, y2 - 3);	//设定笔触的位置				
        cxt.lineTo(x, y2);	//设置移动的方式				
        cxt.stroke();		//画线				
        cxt.closePath();	//封闭路径

        //写数字
        if (j < 10) {
            cxt.fillText(j + 1, x - 4, y2 + 14);
        } else if (j < 25) {
            cxt.fillText(j + 1, x - 7, y2 + 14);
         }
    }
    var  p_y;
    
    for (var k = 0; k < arr1.length; k++) {       
        //p_y = (arr1[k] - 0.40) * 10 * 20 + 30;
        var p_y = (ii - 1) * 20 + 30 + 30 - ((arr1[k] - 0.40) * 10 * 20 + 30);
        arc(cxt, k * 30 + 50, p_y);
        //划线
        if (k == 0) {
            	
        } else {
            cxt.beginPath();	//开启新路径				
            cxt.lineWidth = 1;	//设定画笔的宽度				
            cxt.strokeStyle = "blue"; //设置画笔的颜色
            cxt.moveTo((k - 1) * 30 + 50, (ii - 1) * 20 + 30 + 30 - ((arr1[k - 1] - 0.40) * 10 * 20 + 30));	//设定笔触的位置
            cxt.lineTo(k * 30 + 50, p_y);	//设置移动的方式	
            cxt.stroke();		//画线				
            cxt.closePath();	//封闭路径
        }
    }
    

}


function fixed(num) {
    return num.toFixed(2);
}
function arc(cxt,x,y) {
    cxt.beginPath();
    cxt.fillStyle = "rgb(0,0,255)";	//设置填充的颜色
    cxt.fillRect(x - 2, y - 2, 5, 5);
    cxt.fill();
    cxt.stroke();
    cxt.closePath();
}