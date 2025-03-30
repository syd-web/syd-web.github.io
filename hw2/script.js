let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, dx = 10, dy = 10, r = 30;
let MouseDown = false;
let color = "#" + Math.floor(Math.random()*16777215).toString(16);

// 畫圓形（不清除畫布）
function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

// 滑鼠移動（按住滑鼠時才觸發）
document.addEventListener("mousemove", move)
function move(e){
	if (MouseDown) {
		x = e.clientX - canvas.offsetLeft;
		y = e.clientY - canvas.offsetTop;
		drawBall();
	}
}

// 滑鼠按下時變換顏色並開始繪圖
document.addEventListener("mousedown", change)
function change()
{
MouseDown = true;
color = "#" + Math.floor(Math.random()*16777215).toString(16); // 點擊時變更顏色
}

// 滑鼠放開時停止繪圖
document.addEventListener("mouseup", stop)
function stop()
{
MouseDown = false;
}

// 鍵盤控制移動（保留軌跡）
document.addEventListener("keydown", f123) 
function f123(e)
{
if (e.key == "ArrowRight") x += dx;
else if (e.key == "ArrowLeft") x -= dx;
else if (e.key == "ArrowUp") y -= dy;
else if (e.key == "ArrowDown") y += dy;

drawBall();
}

// 初始化畫布
drawBall();
