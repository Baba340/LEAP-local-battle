//2d取得
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//画面描画
ctx.fillStyle = "gray";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let check = 0;

//ボタン要素取得
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

//abc配列の定義
const abcs = [...'abcdefghijklmnopqrstuvwxyz'];

//問題
var words =[
["RINGO","apple"],
["BANANA","banana"],
["ORENJI","orange"]
];

//問題をランダム化(JpEn分割)
var questionN = 3;
var wordsRandom = random(words,questionN);

var wordsJpRandom = even(wordsRandom.flat());
var wordsEnRandom = odd(wordsRandom.flat());

alert(wordsJpRandom +"\n"+ wordsEnRandom);

//問題メイン処理
forML();

async function forML(){
for(let m=0;m<=questionN;m++){
  let wordM = split(wordsEnRandom[m]);
   for(let l=0; l<=wordM.length-1; l++){
    let wordL = wordM[l];
    let wordBox = [wordL];
  wordBox.push(random(abcs,3));
    wordBox = random(wordBox.flat(),4);
    btn1.value = wordBox[0];
    btn2.value = wordBox[1];    
    btn3.value = wordBox[2];
    btn4.value = wordBox[3];
    await new Promise( res =>btn1.onclick=res );
}
}
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
