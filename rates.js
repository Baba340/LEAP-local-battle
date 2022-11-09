//2d取得
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//レート取得
var query = location.search;
var value = query.split('=');
let rate = decodeURIComponent(value[1]);
//let rate = 5454;

//グローバル変数
let intervalCheck = 0;
let i = 0;

//カーペット描画
ctx.fillStyle = "#7b639f";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle = "#a216b4";
ctx.fillRect(750,0,440,canvas.height);
ctx.fillStyle = "#fed781";
ctx.fillRect(770,0,20,canvas.height);
ctx.fillRect(1150,0,20,canvas.height);
ctx.fillStyle = "#ded2df";
ctx.fillRect(640,0,40,canvas.height);
ctx.fillRect(1260,0,40,canvas.height);

//区切りレート描画
drawRateForm(220,"神格者　THE LEAPer");
drawRateForm(1880,"LEAPer");
drawRateForm(2295,"Active Learner");
drawRateForm(2544,"必携er");
drawRateForm(2710,"見習い");
function drawRateForm(y,text){
  ctx.beginPath();
  ctx.fillStyle = "#037bbf";
  ctx.moveTo(355*2,y-30*2);
  ctx.lineTo(615*2,y-30*2);
  ctx.lineTo(635*2+20*Math.sqrt(2),y);
  ctx.lineTo(615*2,y+60);
  ctx.lineTo(355*2,y+60);
  ctx.lineTo(335*2-20*Math.sqrt(2),y);
  ctx.lineTo(355*2,y-60);
  ctx.closePath();
  ctx.fill();
  
  ctx.beginPath();
  ctx.fillStyle = "#119fe4";
  ctx.moveTo(355*2+20/Math.sqrt(3),y-40);
  ctx.lineTo(615*2-20/Math.sqrt(3),y-40);
  ctx.lineTo(635*2,y);
  ctx.lineTo(615*2-20/Math.sqrt(3),y+40);
  ctx.lineTo(355*2+20/Math.sqrt(3),y+40);
  ctx.lineTo(335*2,y);
  ctx.lineTo(355*2+20/Math.sqrt(3),y-40);
  ctx.closePath();
  ctx.fill();
  ctx.font = "50px sans-serif";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.fillText(text,485*2,y+20);
}
//レート詳細描画
drawRate(220,3000);
drawRate(940*2,1500);
drawRate(1147.5*2,500);
drawRate(1272*2,200);
drawRate(1355*2,0);
function drawRate(y,rate){
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.moveTo(335*2-40*Math.sqrt(3),y-20);
  ctx.lineTo(335*2-20*Math.sqrt(2),y);
  ctx.lineTo(335*2-40*Math.sqrt(3),y+20);
  ctx.fill();
  ctx.font = "40px sans-serif";
  ctx.textAlign = "right";
  ctx.fillStyle = "white";
  ctx.fillText("🏆" + rate , 340*2-60*Math.sqrt(3),y+20);
}

//自分のレート描画
setInterval(myRate,0.1);
function myRate(){
  if(i <= rate-100){myRateIn();i += 20;}
  else if(i <= rate-10){myRateIn();i += 5;}
  else if(i<=rate){myRateIn();i += 1;}
}
function myRateIn(){
  let y = 1355*2-(1245/3000)*2*i;
  ctx.fillStyle = "#7b639f";
  ctx.fillRect(650*2,0,340*2,canvas.height);
  ctx.beginPath();
  ctx.fillStyle = "red";
  if(i > 3000){
  ctx.moveTo(635*2+40*Math.sqrt(3),200);
  ctx.lineTo(635*2+20*Math.sqrt(2),220);
  ctx.lineTo(635*2+40*Math.sqrt(3),240);
  ctx.fill();}else{
  ctx.moveTo(635*2+40*Math.sqrt(3),y-20);
  ctx.lineTo(635*2+20*Math.sqrt(2),y);
  ctx.lineTo(635*2+40*Math.sqrt(3),y+20);
  ctx.fill();}
  ctx.font = "100px sans-serif";
  ctx.textAlign = "left";
  ctx.fillStyle = "gold";
  if(i > 3000){
  ctx.fillText("🏆" + i, 635*2+60*Math.sqrt(3),125*2);}else{
  ctx.fillText("🏆" + i, 635*2+60*Math.sqrt(3),y+30);}
}
