//BGM
//var music = new Audio('LEAP.mp4');
//var muteButton = document.getElementById("mute");
//music.loop=true;

//2d取得
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//html要素取得
let loading = document.getElementById("loading");
let ques = document.getElementById("ques");
let ansJp = document.getElementById("ansJp");
let ansEn = document.getElementById("ansEn");
let exp = document.getElementById("exp");
let title = document.getElementById("title");
let longLeap = document.getElementById("longLeap");
let profile = document.getElementById("profile");
let news = document.getElementById("news");
let startBtn = document.getElementById("startBtn");
let resultBtn = document.getElementById("resultBtn");
let backTitleBtn = document.getElementById("backTitleBtn");
let questionNin = document.getElementById("questionNin");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
//html要素非表示
ques.style.display ="none";
ansJp.style.display ="none";
ansEn.style.display ="none";
exp.style.display ="none";
title.style.display ="none";
longLeap.style.display ="none";
profile.style.display ="none";
news.style.display ="none";
startBtn.style.display ="none";
resultBtn.style.display ="none";
backTitleBtn.style.display ="none";
questionNin.style.display ="none";
btn1.style.display ="none";
btn2.style.display ="none";
btn3.style.display ="none";
btn4.style.display ="none";

//グローバル変数・配列
let questionStartNum = 1300;
let from = "";
let to = "";
let fromNo = "";
let toNo = "";
let questionN=1;
let wordsRandom = "";
let wordsJpRandom = "";
let wordsEnRandom = "";
let rate  = localStorage.getItem("rate"); 
let titles = "LEAPer";
let inputed = [];
let falseQues = [];
let TorF = "";
let Tcount = 0;
let Fcount = 0;
let finishCheckbox = 0;
let abcs = [...'abcdefghijklmnopqrstuvwxyz'];

//問題
var wordsBef =[
//No.questionStartNum〜
["(-to doで)(動作や状態を)する傾向にある","tend"],
["バナナ","banana"],
["みかん","orange"],
["〜として","as"]
];

//解説
var exps = {
  "tend":"ingでは用いれない",
  "banana":"黄色い果物",
  "orange":"その名の通りオレンジ色の果物で、日本ではみかんともいうが、それらの違いは不明瞭"
};

//オンロード処理
window.onload = function() {
  //第一画面
  loading.style.display ="none";
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width,canvas.height);
  setTimeout(function() {
    //第二画面
    loading.style.display ="block";
    loading.style.opacity = 0;
    loading.animate([
      {opacity: 0},
      {opacity: 1}
    ],1500);
    setTimeout(function() {
      setTimeout(function() {
　　　　　//第四画面
        ctx.fillStyle = "#131328";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        title.style.display ="block";
        longLeap.style.display ="block";
        profile.style.display ="block";
        news.style.display ="block";
        startBtn.style.display ="block";
        questionNin.style.display ="block";
        banar();
      }, 1000);
    }, 1000);
  }, 1000);
}

//スタート
function start(){
  setTimeout(function() {
    //問題数入力時の各処理
    from = document.getElementById("questionFrom");
    to = document.getElementById("questionTo");
    //配列の1番目=No.questionStartNumより
    fromNo = Number(from.value) - questionStartNum + 1;
    toNo = Number(to.value) - questionStartNum + 1;
    if(from.value == ""||to.value == ""){
      alert("範囲を入力してください");
      return 1;
    }else if(Number.isNaN(from)||Number.isNaN(to)){
      alert("範囲入力が正しくありません\n数字で入力してください");
      return 1;
    }else if(fromNo <=0 || toNo- fromNo + 1 > wordsBef.length || toNo - fromNo + 1 <= 0 || fromNo > wordsBef.length || toNo > wordsBef.length){
      alert("範囲入力が正しくありません\n範囲を確認してください");
      return 1;
    }else{
      //問題をランダム化(JpEn分割)
      let words = [];
      for(let i = fromNo-1; i <= toNo-1; i++){
        words.push(wordsBef[i]);
      }
      questionN = (toNo - fromNo + 1);
      wordsRandom = random(words,questionN);
      wordsJpRandom = even(wordsRandom.flat());
      wordsEnRandom = odd(wordsRandom.flat());
      //alert(questionN +"\n"+ words +"\n"+ wordsRandom +"\n"+ wordsJpRandom +"\n"+ wordsEnRandom);
    }
    //画面遷移
    title.style.display ="none";
    longLeap.style.display ="none";
    profile.style.display ="none";
    news.style.display ="none";
    startBtn.style.display ="none";
    questionNin.style.display ="none";
    banar();
    forML();
  },500);
}

//問題メイン処理
async function forML(){
//画面描画
ctx.clearRect(67.5,287.5,835,377.5);//question
ctx.clearRect(67.5,800,416.5,100);//Jp
ctx.clearRect(486,800,416.5,100);//En
ctx.clearRect(67.5,902,835,214);//explain

//ボタン表示
btn1.style.display ="block";
btn2.style.display ="block";
btn3.style.display ="block";
btn4.style.display ="block";
  //問題数for文
  for(let m=0;m<=questionN;m++){
    let wordM = split(wordsEnRandom[m]);
    inputed = [];
    //問題文表示
    ques.style.display ="block";
    ques.innerText = wordsJpRandom[m];
    let quesLeft = String(485-(ques.clientWidth/2))+"px";
    ques.style.left = quesLeft;
    let quesTop = String(476.25-(ques.clientHeight/2))+"px";
    ques.style.top = quesTop;
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
      rate = Number(rate);
      rate += 1;
      localStorage.setItem("rate", rate);
    }else if(TorF == "F"){
      arrow("F");
      Fcount += 1;
      if(Number(rate) > 0){
        rate = Number(rate);
        rate -= 1;
        localStorage.setItem("rate", rate);
      }
      falseQues.push(wordsBef.findIndex(([x]) => x === wordsJpRandom[m]) + questionStartNum);
    }
    //解答・解説
    ctx.clearRect(67.5,800,416.5,100);//En
    ctx.clearRect(486,800,416.5,100);//Jp
    ctx.clearRect(67.5,902,835,214);//Explain
    //日本語問題描画
    ansJp.style.display ="block";
    ansJp.innerText = wordsJpRandom[m];
    let ansJpLeft = String(275.75-(ansJp.clientWidth/2))+"px";
    ansJp.style.left = ansJpLeft;
    let ansJpTop = String(850-(ansJp.clientHeight/2))+"px";
    ansJp.style.top = ansJpTop;
    //英語回答描画
    ansEn.style.display ="block";
    ansEn.innerText = wordsEnRandom[m];
    let ansEnLeft = String(693.25-(ansEn.clientWidth/2))+"px";
    ansEn.style.left = ansEnLeft;
    let ansEnTop = String(850-(ansEn.clientHeight/2))+"px";
    ansEn.style.top = ansEnTop;
    //解説描画
    exp.style.display ="block";
    exp.innerText = exps[String(wordsEnRandom[m])];
    let expLeft = String(485-(exp.clientWidth/2))+"px";
    exp.style.left = expLeft;
    let expTop = String(1009-(exp.clientHeight/2))+"px";
    exp.style.top = expTop;

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
}

//終了時処理→結果表示ボタン表示
setInterval(finish,100);
function finish(){
  //終了時の条件
  if(Tcount + Fcount == questionN && finishCheckbox == 0){
    finishCheckbox = 1;
    //画面整理
    btn1.style.display ="none";
    btn2.style.display ="none";
    btn3.style.display ="none";
    btn4.style.display ="none";
    ques.style.display ="none";
    //結果表示ボタン表示
    resultBtn.style.display ="block";
  }
}

//結果表示
function result(){
  //画面リセット
  ctx.fillStyle = "#131328";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ansJp.style.display ="none";
  ansEn.style.display ="none";
  exp.style.display ="none";
  resultBtn.style.display ="none";
  btn1.style.display ="none";
  btn2.style.display ="none";
  btn3.style.display ="none";
  btn4.style.display ="none";
  ques.style.display ="none";
  banar();
  //バックタイトルボタン表示
  backTitleBtn.style.display ="block";

  //成績表示
  ctx.font = "100px sans-serif";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.fillText("正解：" + Tcount + "/" + questionN,485,350);
  ctx.fillText("不正解：" + Fcount + "/" + questionN,485,470);
  if(Tcount - Fcount <= 0){
    ctx.fillStyle = "red";
  }
  ctx.fillText("レート：" + (Tcount - Fcount),485,590);
  ctx.font = "40px sans-serif";
  ctx.fillStyle = "white";
  ctx.fillText("次の設定範囲は、こちらを参考にしてください",485,750);
  ctx.fillText("☟☟",485,800);
  ctx.fillText("不正解の分布",485,850);
  ctx.fillRect(150, 860, 680, 50);
  let unit = 670/(Number(to.value)-Number(from.value));
  for(let i = 0; i < falseQues.length; i++){
    ctx.fillStyle = "red";
    ctx.fillRect(150 + (falseQues[i]-Number(from.value)) * unit ,880,10,10);
  }
  ctx.font = "20px sans-serif";
  ctx.fillStyle = "white";
  ctx.fillText(from.value,150,935);
  ctx.fillText(to.value,830,935);
  if((Number(from.value)-Number(to.value)) % 2 === 0){
    ctx.fillText(( (Number(from.value)+Number(to.value)) / 2),485,935);
  }else{
    ctx.fillText(Number(from.value) + (Number(to.value)-Number(from.value))/3*2,596,935); 
    ctx.fillText(Number(from.value) + (Number(to.value)-Number(from.value))/3,373,935);
  }
}

//リスタート
function backTitle(){
  //画面遷移
  ctx.fillStyle = "#131328";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  title.style.display ="block";
  longLeap.style.display ="block";
  profile.style.display ="block";
  news.style.display ="block";
  startBtn.style.display ="block";
  questionNin.style.display ="block";
  backTitleBtn.style.display ="none";
  banar();
  //変数・配列リセット
  inputed = [];
  falseQues = [];
  abcs = [...'abcdefghijklmnopqrstuvwxyz'];
  TorF = "";
  Tcount = 0;
  Fcount = 0;
  finishCheckbox = 0;
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
  ctx.fillText("🏆"+ String(localStorage.getItem("rate")),15,160);
  ctx.fillStyle = "white";
  ctx.fillText(titles,15,190);
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
//2d取得
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/*
let r = 100;
let a = 0;
let b = 0;
let c = r*Math.sqrt(2);
let cosDeg = 1/Math.sqrt(2);
let crossing = [400+r,400+r];

ctx.beginPath();
ctx.moveTo(400,400);
ctx.lineTo(400,400+r);
ctx.lineTo(400+r,400+r);
ctx.lineTo(400,400);
ctx.stroke();

setInterval(draw,1000);
function draw(){
  a = c;
  b = r;
  c = Math.sqrt(a*a + b*b);
  ctx.beginPath();
  ctx.moveTo(400,400);
  ctx.lineTo(crossing[0],crossing[1]);
  ctx.lineTo(crossing[0]+r*cosDeg,crossing[1]+(-r)*(Math.sqrt(1-cosDeg*cosDeg)));
  ctx.lineTo(400,400);
  ctx.stroke();
  crossing = [crossing[0]+r*cosDeg,crossing[1]+(-r)*(Math.sqrt(1-cosDeg*cosDeg))];
  let cosDegPlus = yogenn(a,b,c);
  cosDeg = kahou(cosDeg,cosDegPlus);
}

function yogenn(a,b,c){
  let cosB = (a*a+c*c-b*b)/(2*a*c);
  return cosB;
}
function kahou(cosA,cosB){
  let cosA_B = cosA*cosB - Math.sqrt(1-cosA*cosA)*Math.sqrt(1-cosB*cosB);
  return cosA_B; 
}
*/
