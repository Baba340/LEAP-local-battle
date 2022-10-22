//2d取得
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//画面描画
ctx.fillStyle = "#131328";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.beginPath();
ctx.fillStyle = "black";
ctx.moveTo(0,732.5);
ctx.lineTo(970,732.5);
ctx.stroke();

//ボタン要素取得
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

//レート
let rate  = 1000; 
let title = "LEAPer";

//インプットした文字の配列
let inputed = [];

//abc配列の定義
const abcs = [...'abcdefghijklmnopqrstuvwxyz'];

//問題
var words =[
["RINGO","apple"],
["BANANA","banana"],
["ORENJI","orange"],
["kiminonahananndesukatokiiteirunodearimasu","baba"]
];

//問題をランダム化(JpEn分割)
var questionN = 4;
var wordsRandom = random(words,questionN);

var wordsJpRandom = even(wordsRandom.flat());
var wordsEnRandom = odd(wordsRandom.flat());

//alert(wordsJpRandom +"\n"+ wordsEnRandom);

//問題メイン処理
forML();

async function forML(){
ctx.clearRect(67.5,1158,835,70);
ctx.clearRect(67.5,287.5,835,377.5);
  //問題数for文
  for(let m=0;m<=questionN;m++){
    let wordM = split(wordsEnRandom[m]);
    ctx.clearRect(67.5,1158,835,70);
    inputed = [];
    //問題文表示
    ctx.clearRect(67.5,287.5,835,377.5);
    ctx.font = "60px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText(wordsJpRandom[m],485,506.25);
    //文字数for文
    for(let l=0; l<=wordM.length-1; l++){
      //入力文字選択肢(wordBox)作成
      let wordL = wordM[l];
      let wordBox = [wordL];
      let ABC = abcs;
      ABC.splice(abcs.indexOf(wordL),1);
      wordBox.push(random(ABC,3));
      wordBox = random(wordBox.flat(),4);
      //wordBoxとボタンの対応
      btn1.value = wordBox[0];
      btn2.value = wordBox[1];
      btn3.value = wordBox[2];
      btn4.value = wordBox[3];
      //正解入力時処理
      let btn = "btn" + String(wordBox.indexOf(wordL)+1);
      await new Promise(res => document.getElementById(btn).onclick=res);
      inputed.push(wordL);
      ctx.clearRect(67.5,1158,835,70);
      ctx.font = "60px sans-serif";
      ctx.textAlign = "right";
      ctx.fillStyle = "black";
      ctx.fillText(inputed.join(""),902.5,1215);
    }
  }
//
}
 
//バナー描画
banar();
function banar(){
  ctx.beginPath();
  ctx.fillStyle = "#5c3e77";
  ctx.moveTo(0,40);
  ctx.lineTo(400,40);
  ctx.lineTo(400-90/Math.sqrt(3),130);
  ctx.lineTo(400,220);
  ctx.lineTo(0,220);
  ctx.lineTo(0,40);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle ="#9e4ce0";
  ctx.moveTo(0,60);
  ctx.lineTo(400-20*Math.sqrt(3),60);
  ctx.lineTo((400-90/Math.sqrt(3))-20*Math.sqrt(2),130);
  ctx.lineTo(400-20*Math.sqrt(3),200);
  ctx.lineTo(0,200);
  ctx.lineTo(0,60);
  ctx.closePath();
  ctx.fill();
  ctx.font = "30px sans-serif";
  ctx.textAlign = "left";
  ctx.fillStyle = "yellow";
  ctx.fillText("T"+ String(rate),15,160);
  ctx.fillStyle = "white";
  ctx.fillText(title,15,190);
}

//配列からランダムにn個取って並べる(重複なし)
function random(array, num) {
  var a = array;
  var t = [];
  var r = [];
  var l = a.length;
  var n = num < l ? num : l;
  while (n-- > 0) {
    var i = (Math.random() * l) | 0;
    r[n] = t[i] || a[i];
    --l;
    t[i] = t[l] || a[l];
  }
  return r;
}

//1からnまでの乱数生成
function one_nRandom(n){
  var t = [...Array(n)].map((_, i) => i + 1);
  return random(t,n);
}

//二次元配列の内部配列の0番目を取得
function dimArrayZero(array,n){
  let r = [];
  for(let s=0;s<=n;s++){
    r.push(array[s][0]);
  }
  return r;
}

//配列の偶数番目を取得
function even(array){    
  return array.filter((element, index) => {
    return index % 2 === 0;
  });
}

//配列の奇数番目を取得
function odd(array){ 
  return array.filter((element, index) => {
    return index % 2 !== 0;
  });
}

//文字列の分解
function split(text){
   return text.split("");
}

//重複チェック
function overlap(array){
  var s = new Set(a);
  return s.size != a.length;
}
