//BGM
//var music = new Audio('LEAP.mp4');
//var muteButton = document.getElementById("mute");
//music.loop=true;

//2d取得
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//画面描画
ctx.fillStyle = "#131328";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.clearRect(67.5,800,416.5,100);//Jp
ctx.clearRect(486,800,416.5,100);//En
ctx.clearRect(67.5,902,835,214);//explain
ctx.clearRect(67.5,287.5,835,377.5);//question

//ボタン要素取得
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
btn1.style.display ="none";
btn2.style.display ="none";
btn3.style.display ="none";
btn4.style.display ="none";

//グローバル変数
let rate  = 1000; 
let title = "LEAPer";
let inputed = [];
let TorF = "";
let Tcount = 0;
let Fcount = 0;
const abcs = [...'abcdefghijklmnopqrstuvwxyz'];

//問題
var words =[
["りんご","apple"],
["バナナ","banana"],
["みかん","orange"]
];

//問題をランダム化(JpEn分割)
var questionN = 3;
var wordsRandom = random(words,questionN);

var wordsJpRandom = even(wordsRandom.flat());
var wordsEnRandom = odd(wordsRandom.flat());

//alert(wordsJpRandom +"\n"+ wordsEnRandom);


//functions
forML();
banar();

//問題メイン処理
async function forML(){
btn1.style.display ="block";
btn2.style.display ="block";
btn3.style.display ="block";
btn4.style.display ="block";
  //問題数for文
  for(let m=0;m<=questionN;m++){
    let wordM = split(wordsEnRandom[m]);
    inputed = [];
    //問題文表示
    ctx.clearRect(67.5,287.5,835,377.5);
    ctx.font = "60px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText(wordsJpRandom[m],485,506.25);
    //問題数カウント表示
    ctx.fillStyle = "#131328";
    ctx.fillRect(0,245,970,40);
    ctx.font = "40px sans-serif";
    ctx.textAlign = "right";
    ctx.fillStyle = "white";
    ctx.fillText(String(m+1) + "/" + String(questionN),902.5,285);
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
      let btnArray=["1","2","3","4"];
      btnArray.splice(wordBox.indexOf(wordL),1);
      //オンクリック処理
      const skip = await new Promise( res =>{
        document.getElementById(btn).onclick =()=>res( false );
        document.getElementById("btn"+String(btnArray[0])).onclick =()=>res( true );
        document.getElementById("btn"+String(btnArray[1])).onclick =()=>res( true );
        document.getElementById("btn"+String(btnArray[2])).onclick =()=>res( true );
      } );
      //入力済み文字の描画
      inputed.push(wordL);
      ctx.fillStyle = "#131328";
      ctx.fillRect(67.5,1158,835,70);
      ctx.font = "60px sans-serif";
      ctx.textAlign = "center";
      ctx.fillStyle = "#ffd44f";
      ctx.fillText(inputed.join(""),485,1215);
      var txw = ctx.measureText(inputed.join(""));
      ctx.beginPath();
      ctx.moveTo(475-txw.width/2,1225);
      ctx.lineTo(495+txw.width/2,1225);
      ctx.strokeStyle = 'white';
      ctx.lineWidth= 5;
      ctx.stroke();
      //awaitの正解・不正解時処理
      TorF = "T";
      if(skip){TorF = "F";break;}
    }
    //正解・不正解時処理
    if(TorF == "T"){
      arrow("T");
      Tcount += 1;
    }else if(TorF == "F"){
      arrow("F");
      Fcount += 1;
    }
    //解答・解説
    ctx.clearRect(67.5,800,416.5,100);//En
    ctx.clearRect(486,800,416.5,100);//Jp
    ctx.clearRect(67.5,902,835,214);//Explain
    ctx.font = "30px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText(wordsJpRandom[m],275.75,865);
    ctx.fillText(wordsEnRandom[m],694.25,865);
    //正解・不正解数描画
    ctx.fillStyle = "#131328";
    ctx.fillRect(67.5,707.5,356.5,50);
    ctx.font = "50px sans-serif";
    ctx.textAlign = "right";
    ctx.fillStyle = "red";
    ctx.fillText(Tcount,415,757.5);
    ctx.fillStyle = "#131328";
    ctx.fillRect(545,707.5,356.5,50);
    ctx.font = "50px sans-serif";
    ctx.textAlign = "left";
    ctx.fillStyle = "blue";
    ctx.fillText(Fcount,555,757.5);
    //入力文字クリア
    ctx.fillStyle = "#131328";
    ctx.fillRect(67.5,1158,835,70);
  }
//
}

//矢印描画
function arrow(TF){
  if(TF == "T"){
    ctx.fillStyle="red";
  }else if(TF == "F"){
    ctx.fillStyle="blue";
  }
  ctx.beginPath();
  ctx.moveTo(455,685);
  ctx.lineTo(515,685);
  ctx.lineTo(515,732.5);
  ctx.lineTo(545,732.5);
  ctx.lineTo(485,780);
  ctx.lineTo(425,732.5);
  ctx.lineTo(455,732.5);
  ctx.lineTo(455,685);
  ctx.fill();
  if(TF == "T"){
    ctx.beginPath () ;
    ctx.arc(485,732.5,22,0*Math.PI/180,360*Math.PI/180,false);
    ctx.strokeStyle = "white" ;
    ctx.stroke() ;
  }else if(TF == "F"){
    ctx.strokeStyle = "white" ;
    ctx.beginPath ();
    ctx.moveTo(465,712.5);
    ctx.lineTo(505,752.5);
    ctx.stroke();
    ctx.beginPath ();
    ctx.lineTo(505,712.5);
    ctx.lineTo(465,752.5);
    ctx.stroke();
  }
}

//バナー描画
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
  ctx.fillText("🏆"+ String(rate),15,160);
  ctx.fillStyle = "white";
  ctx.fillText(title,15,190);
}

//ミュート機能
function mute(){
  if(muteButton.value=="Mute"){
    music.muted = true;
    muteButton.value="Muted";
  }else if (muteButton.value=="Muted"){
    music.muted = false;
    muteButton.value="Mute";
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
