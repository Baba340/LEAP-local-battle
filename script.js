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
let exitBtn = document.getElementById("exitBtn");
let rateViewBtn = document.getElementById("rateViewBtn");
let ctxPlusBtn = document.getElementById("ctxPlusBtn");
let ctxMinusBtn = document.getElementById("ctxMinusBtn");
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
exitBtn.style.display ="none";
rateViewBtn.style.display ="none";
ctxPlusBtn.style.display ="none";
ctxMinusBtn.style.display ="none";
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
let titles = "神格者　THE LEAPer";
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
["【名】 （of ～）十分な～，たくさんの～","plenty"],["【形】 十分な","sufficient"],["【形】 多くの","numerous"],["【形】 ①かなりの，たくさんの ②内容のある，重要な","substantial"],["【名】 単位","unit"],["【名】 直径","diameter"],["【名】 量","quantity"],["【名】 欠乏，不足","deficiency"],["【他】 ～を減らす","lessen"],["【名】 時代","era"],["【名】 ①（活動の）期間 ②（議会などの）会期 ③（ある活動の）集まり","session"],["【名】 ①休止 [自] ②休止する","pause"],["【副】 ①その間 ②（対比を示して）その一方で","meanwhile"],["【名】 土産，記念品","souvenir"],["【名】 ①れんが ②〈英〉（おもちゃの）積み木","brick"],["【名】 ①棒，さお，柱 ②（天体，地球の）極","pole"],["【名】 ①糸 [他] ②～に糸を通す","thread"],["【名】 いたずら〈不可算〉","mischief"],["【名】 迷信","superstition"],["【名】 貯蔵，保管〈不可算〉","storage"],["【名】 ①避難（所） ②住居","shelter"],["【名】 衣類","garment"],["【名】 ①戸棚 ②（the C－）内閣","cabinet"],["【名】 ①レシピ，調理法 ②秘訣，原因","recipe"],["【名】 パンフレット","brochure"],["【名】 （商品の）発送","shipping"],["【他】 （主に〈英〉）～を取って来る","fetch"],["【他】 ①～を分配する，配る ②（be －d）分布している","distribute"],["【名】 像","statue"],["【名】 彫刻","sculpture"],["【他】 ～を彫る，刻む","carve"],["【名】 ①（俗説という意味での）神話 ②（古代の）神話","myth"],["【名】 ①工芸（品） ②（職人の）技術 ③船，乗り物","craft"],["【名】 ①雑誌，専門誌 ②（公的な）日誌，日記","journal"],["【名】 ①天国 ②（the －s）空","heaven"],["【名】 葬式","funeral"],["【名】 ①魂 ②（慣用句あるいは否定文で）人","soul"],["【名】 神父，僧侶，牧師，聖職者","priest"],["【名】 ①（主に宗教上の）信仰 ②信頼","faith"],["【形】 神聖な","sacred"],["【形】 神の","divine"],["【名】 ①文脈 ②状況","context"],["【形】 ①単数の ②（褒めて）比類なき ③奇妙な","singular"],["【名】 ①言語を操る力 ②命令 [他] ③～を集める ④～を見渡せる","command"],["【名】 例","instance"],["【名】 語り，物語","narrative"],["【名】 ①（本，劇，映画の中の）会話 ②対談，対話","dialogue"],["【名】 語法","usage"],["【名】 ①訛 ②アクセント","accent"],["【名】 ①気性 ②平静（な気分）","temper"],["【名】 愛情","affection"],["【名】 情熱，熱意","enthusiasm"],["【名】 情熱","passion"],["【名】 ①激怒 [自] ②（戦争，病気が）激しく続く，猛威をふるう","rage"],["【名】 悲しみ","sorrow"],["【形】 信じられない","incredible"],["【自】 ①くすくす笑う [名] ②くすくす笑うこと","chuckle"],["【他】 ～をからかう，冷やかす","tease"],["【他】 ①（to do）思い切って～する [助] ②（do）思い切って～する","dare"],["【形】 （be － to do）嫌がらずに～する","willing"],["【自】 ①悲鳴を上げる [名] ②悲鳴","scream"],["【他】 ①（人）をなだめる ②（痛みなど）をやわらげる","soothe"],["【他】 ～を誘惑する","tempt"],["【他】 ～を??る","scold"],["【他】 ～を圧迫する，虐げる","oppress"],["【他】 ①（to do）～すると脅す ②～を脅かす ③～のおそれがある","threaten"],["【他】 ①～を喜ばせる [名] ②（大）喜び","delight"],["【他】 ～を（とても）驚かせる","astonish"],["【他】 ～を嘆く，悼む","mourn"],["【他】 （人，物が）～を怒らせる，～の気分を害する","offend"],["【他】 ～を憂うつにさせる，落ち込ませる","depress"],["【他】 ①～を犠牲にする [名] ②犠牲","sacrifice"],["【名】 衝動","impulse"],["【名】 ①災いの元 ②呪い [他] ③～を呪う，ののしる","curse"],["【名】 要因","factor"],["【自】 ①（from ～）（～が）原因である [名] ②茎，幹，ワイングラスの脚","stem"],["【他】 ①～のきっかけになる，～を誘発する [名] ②（銃の）引き金","trigger"],["【名】 ①結果 ②（of －） 重要性","consequence"],["【名】 ①過程 [他] ②～を加工する，処理する","process"],["【自】 ①（to ～）（～に）訴える [名] ②行楽地 ③手段","resort"],["【名】 ①方法 ②秘けつ ③（数学，化学などの）式，公式","formula"],["【名】 手続き，手順","procedure"],["【形】 ①並外れた ②臨時の（会議など） ③特命の（大使など）","extraordinary"],["【形】 絶対的な","absolute"],["【形】 圧倒的な","overwhelming"],["【副】 ①完全に ②全部で","altogether"],["【形】 すべての","entire"],["【形】 すさまじい","tremendous"],["【形】 ①（数量やサイズを強調して）とてつもない～の ②まったくの","sheer"],["【形】 ①部分的な ②不公平な ③（to ～）（～が）大好きで","partial"],["【副】 ①かろうじて ②ほとんど～ない","barely"],["【形】 わずかな","slight"],["【副】 （数量が）おおよそ，約","approximately"],["【副】 頻繁に","frequently"],["【副】 ①どうやら～らしい ②見たところでは","apparently"],["【副】 ①（主に名詞の前で）～にすぎない ②（動詞などの前で）単に","merely"],["【副】 それにもかかわらず","nevertheless"],["【副】 ①何らかの方法で ②何らかの理由で，どういうわけか","somehow"],["【副】 ①それゆえ（に） ②このように","thus"],["【副】 ①まあまあ [形] ②かわいい","pretty"],["【前】 ～にもかかわらず","despite"]
];

//解説
var exps = {
  "tend":"ingでは用いれない",
  "banana":"黄色い果物",
  "orange":"その名の通りオレンジ色の果物で、日本ではみかんともいうが、それらの違いは不明瞭"
};

//アラート
if(localStorage.getItem("mes1") == null || localStorage.getItem("mes1") == 0){
    alert("画面上の+,-ボタンで画面サイズを機種に対応させてください。");
    localStorage.setItem("mes1",1);
  }

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
        rateViewBtn.style.display ="block";
        ctxPlusBtn.style.display ="block";
        ctxMinusBtn.style.display ="block";
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
    //配列の1番目=No.questionStartNumより範囲の吟味
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
    exitBtn.style.display ="block";
    banar();
    forML();
  },500);
}

//問題メイン処理
async function forML(){
//画面描画
ctx.clearRect(135,575,1670,755);//question
ctx.clearRect(135,1600,833,200);//Jp
ctx.clearRect(972,1600,833,200);//En
ctx.clearRect(135,1804,1670,428);//explain

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
    ctx.fillRect(0,490,1940,80);
    ctx.font = "80px sans-serif";
    ctx.textAlign = "right";
    ctx.fillStyle = "white";
    ctx.fillText(String(m+1) + "/" + String(questionN),1805,570);
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
      ctx.fillRect(135,1158*2,835*2,140);
      ctx.font = "120px sans-serif";
      ctx.textAlign = "center";
      ctx.fillStyle = "#ffd44f";
      ctx.fillText(inputed.join(""),970,2430);
      var txw = ctx.measureText(inputed.join(""));
      ctx.beginPath();
      ctx.moveTo(475*2-txw.width/2,1225*2);
      ctx.lineTo(495*2+txw.width/2,1225*2);
      ctx.strokeStyle = 'white';
      ctx.lineWidth= 10;
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
      rate += 2;
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
    //日本語問題描画
    ansJp.style.display ="block";
    ansJp.innerText = wordsJpRandom[m];
    let ansJpLeft = String(551.5/2-(ansJp.clientWidth/2))+"px";
    ansJp.style.left = ansJpLeft;
    let ansJpTop = String(850-(ansJp.clientHeight/2))+"px";
    ansJp.style.top = ansJpTop;
    //英語回答描画
    ansEn.style.display ="block";
    ansEn.innerText = wordsEnRandom[m];
    let ansEnLeft = String(1386.5/2-(ansEn.clientWidth/2))+"px";
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
    ctx.fillRect(67.5*2,707.5*2,356.5*2,100);
    ctx.font = "100px sans-serif";
    ctx.textAlign = "right";
    ctx.fillStyle = "red";
    ctx.fillText(Tcount,415*2,757.5*2);
    ctx.fillStyle = "#131328";
    ctx.fillRect(545*2,707.5*2,356.5*2,100);
    ctx.font = "100px sans-serif";
    ctx.textAlign = "left";
    ctx.fillStyle = "blue";
    ctx.fillText(Fcount,555*2,757.5*2);
    //入力文字クリア
    ctx.fillStyle = "#131328";
    ctx.fillRect(67.5*2,1158*2,835*2,140);

    //アルファベットリセット
    abcs = [...'abcdefghijklmnopqrstuvwxyz'];
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
  exitBtn.style.display ="none";
  banar();
  //バックタイトルボタン表示
  backTitleBtn.style.display ="block";

  //成績表示
  ctx.font = "200px sans-serif";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.fillText("正解：" + Tcount + "/" + questionN,970,700);
  ctx.fillText("不正解：" + Fcount + "/" + questionN,970,940);
  if(2*Tcount - Fcount <= 0){
    ctx.fillStyle = "red";
  }
  ctx.fillText("レート：" + (2*Tcount - Fcount),970,1180);
  ctx.font = "80px sans-serif";
  ctx.fillStyle = "white";
  ctx.fillText("次の設定範囲は、こちらを参考にしてください",970,1500);
  ctx.fillText("☟☟",970,1600);
  ctx.fillText("不正解の分布",970,1700);
  ctx.fillRect(300, 1720, 1360, 100);
  let unit = 1340/(Number(to.value)-Number(from.value));
  for(let i = 0; i < falseQues.length; i++){
    ctx.fillStyle = "red";
    ctx.fillRect(300 + (falseQues[i]-Number(from.value)) * unit ,1760,20,20);
  }
  ctx.font = "40px sans-serif";
  ctx.fillStyle = "white";
  ctx.fillText(from.value,300,1870);
  ctx.fillText(to.value,1660,1870);
  if((Number(from.value)-Number(to.value)) % 2 === 0){
    ctx.fillText(( (Number(from.value)+Number(to.value)) / 2),970,1870);
  }else{
    ctx.fillText(Number(from.value) + (Number(to.value)-Number(from.value))/3*2,596*2,1870); 
    ctx.fillText(Number(from.value) + (Number(to.value)-Number(from.value))/3,746,1870);
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

//キャンバス画面比調節
function ctxMinus(){
  let body = document.getElementById("body"); 
  body.style.width = String(body.clientWidth + 50)+"px";
  body.style.height = String(body.clientHeight + 75.5)+"px";
}
function ctxPlus(){
  let body = document.getElementById("body"); 
  body.style.width = String(body.clientWidth - 50)+"px";
  body.style.height = String(body.clientHeight - 75.5)+"px";
}

//矢印描画
function arrow(TF){
  if(TF == "T"){
    ctx.fillStyle="red";
  }else if(TF == "F"){
    ctx.fillStyle="blue";
  }
  ctx.beginPath();
  ctx.moveTo(455*2,685*2);
  ctx.lineTo(515*2,685*2);
  ctx.lineTo(515*2,732.5*2);
  ctx.lineTo(545*2,732.5*2);
  ctx.lineTo(485*2,780*2);
  ctx.lineTo(425*2,732.5*2);
  ctx.lineTo(455*2,732.5*2);
  ctx.lineTo(455*2,685*2);
  ctx.fill();
  if(TF == "T"){
    ctx.beginPath () ;
    ctx.arc(970,1465,44,0*Math.PI/180,360*Math.PI/180,false);
    ctx.strokeStyle = "white" ;
    ctx.stroke() ;
  }else if(TF == "F"){
    ctx.strokeStyle = "white" ;
    ctx.beginPath ();
    ctx.moveTo(465*2,712.5*2);
    ctx.lineTo(505*2,752.5*2);
    ctx.stroke();
    ctx.beginPath ();
    ctx.lineTo(505*2,712.5*2);
    ctx.lineTo(465*2,752.5*2);
    ctx.stroke();
  }
}

//レート表示画面遷移
function rateView(){
  location.href = 'rates.html?rate=' +  encodeURIComponent(rate);
}

//バナー描画
function banar(){
  titles = returnTitle(rate);
  ctx.beginPath();
  ctx.fillStyle = "#5c3e77";
  ctx.moveTo(0,80);
  ctx.lineTo(800,80);
  ctx.lineTo(800-180/Math.sqrt(3),260);
  ctx.lineTo(800,440);
  ctx.lineTo(0,440);
  ctx.lineTo(0,80);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle ="#9e4ce0";
  ctx.moveTo(0,120);
  ctx.lineTo(800-40*Math.sqrt(3),120);
  ctx.lineTo((800-180/Math.sqrt(3))-40*Math.sqrt(2),260);
  ctx.lineTo(800-40*Math.sqrt(3),400);
  ctx.lineTo(0,400);
  ctx.lineTo(0,120);
  ctx.closePath();
  ctx.fill();
  ctx.font = "60px sans-serif";
  ctx.textAlign = "left";
  ctx.fillStyle = "gold";
  ctx.fillText("🏆"+ String(localStorage.getItem("rate")),30,320);
  ctx.fillStyle = "white";
  ctx.fillText(titles,30,380);
}

//称号算出
function returnTitle(rate){
    if(0 <= rate && rate < 200){
        return "見習い";
    }else if(200 <= rate && rate < 500){
        return "必携er";
    }else if(500 <= rate && rate < 1000){
        return "Active Learner";
    }else if(1000 <= rate && rate < 3000){
        return "LEAPer";
    }else if(3000 <= rate){
        return "神格者 THE LEAPer";
    }
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
