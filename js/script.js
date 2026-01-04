// ==========================================
// ### Page 36: chapter 07 分岐 (switchの練習)
// ==========================================

let i = 1;
console.log(i);

a = Math.floor(Math.random() * 4) + 3;

console.log(a);

let kushami;

kushami = Math.floor(Math.random() * 3) + 1;

if (kushami === 1) {
  console.log("kushamiが" + kushami + "なので、くしゃみです");
}

// ---------------------------------

switch (kushami) {
  case 1:
    console.log("くしゃみです");
    break;
  // それ以外の場合
  default:
    console.log("くしゃみではありません");
    break;
}

// ==========================================
// ### Page 37: practice 03 分岐 (分岐課題 ①)
// ① サイコロの目が1のときは大吉。2のときは中吉...
// ==========================================

// ---------------------------------

// さいころをふる

// 1のときは大吉、２のときは中吉、３のときは小吉、そのほかは凶
let dice = Math.floor(Math.random() * 6) + 1;
console.log("さいころの目は" + dice + "です");
switch (dice) {
  case 1:
    console.log("大吉です");
    break;
  case 2:
    console.log("中吉です");
    break;
  case 3:
    console.log("小吉です");
    break;
  default:
    console.log("凶です");
    break;
}

// ==========================================
// ### Page 37: practice 03 分岐 (分岐課題 ②)
// ② 月をランダムで選択。その月の祝日を表示する
// ==========================================

// ---------------------------------

// 1〜12月をランダムに生成
let month = Math.floor(Math.random() * 12) + 1;
console.log(month + "月が選ばれました");

switch (month) {
  case 1:
    console.log("元日、成人の日");
    break;
  case 2:
    console.log("建国記念の日");
    break;
  case 3:
    console.log("春分の日");
    break;
  case 4:
    console.log("昭和の日");
    break;
  case 5:
    console.log("憲法記念日、みどりの日、こどもの日");
    break;
  case 7:
    console.log("海の日");
    break;
  case 9:
    console.log("敬老の日、秋分の日");
    break;
  case 10:
    console.log("体育の日");
    break;
  case 11:
    console.log("文化の日、勤労感謝の日");
    break;
  case 12:
    console.log("天皇誕生日");
    break;
  default:
    console.log("祝日ではありません");
    break;
}

// ==========================================
// ### Page 45: practice 03 分岐 (ループ課題 ①)
// ①★を以下のように出力しよう。(10個ずつ改行)
// ==========================================

// ---------------------------------

// while
// 三行　星10個を作成
let star = "";
//
while (i < 31) {
  star = star + "★";
  i = i + 1;

  //10の倍数のとき
  if (i % 10 === 0) {
    console.log(star);
    star = "";
  }
}

// ==========================================
// ### Page 45: practice 03 分岐 (ループ課題 ②)
// ②★を以下のように出力しよう。(1行ごとに増やす)
// ==========================================

// ---------------------------------
// ★が１行が１個順番に、４行まで表示される（なお一つずつ★が追加される）
let line = 1;
star = "";

//5行未満のまで
while (line < 5) {
  star = star + "★";

  //表示する
  console.log(star);

  line = line + 1;
}

// ==========================================
// ### Page 45: practice 03 分岐 (ループ課題 ③)
// ③ 田中さんと山田さんがそれぞれ3分の1でくしゃみをする...
// ==========================================

// ---------------------------------

// 田中さんと山田さんが３分の１の確率でくしゃみをする
let tanakaKushami = 0;
let yamadaKushami = 0;
let count = 0;

//どちらかがくしゃみをするまで繰り返す
while (true) {
  //くしゃみをランダムに決定
  tanakaKushami = Math.floor(Math.random() * 3) + 1;
  yamadaKushami = Math.floor(Math.random() * 3) + 1;

  console.log("田中さんのくしゃみ：" + tanakaKushami);
  console.log("山田さんのくしゃみ：" + yamadaKushami);

  console.log("どちらかがくしゃみをするまで繰り返します");
  if (tanakaKushami == 1 && yamadaKushami == 1) {
    break;
  }
  count = count + 1;
}

console.log("くしゃみが出ました！");
console.log("繰り返した回数は" + count + "回です");

// ==========================================
// ### Page 46: practice 03 分岐 (ループ課題 ④)
// ④ 毎日キャベツを切り続ける...腱鞘炎になる確率...
// ==========================================

// ----------------------------------

//1日につき、3分の1で水が飲める。
//夜に抽選を行う。水を飲まない場合、普通だったら10分の1で腱鞘炎になる。
//朝の抽選で3分の1で水を飲んでると、30分の1で検証員になる。

// 腱鞘炎になる日数。
let Date = 0;
//　水が飲めた日。（もし１なら水が飲めた）
let waterDay;
let kenshouin;

while (true) {
  Date = Date + 1;

  let waterDay = Math.floor(Math.random() * 3) + 1;

  // 水が飲めた場合(つまり、1を飲めた場合とする)
  if (waterDay == 1) {
    kenshouen = Math.floor(Math.random() * 30) + 1;
  } else {
    kenshouen = Math.floor(Math.random() * 10) + 1;
  }

  if (kenshouen == 1) {
    break;
  }
}

console.log("腱鞘炎になった日数は" + Date + "日です");

// ==========================================
// ### Page 50: practice 04 配列 (配列課題 ①)
// ①0から9までの連番の配列を作って、出力してみよう。
// ==========================================

// --------------------------------------------
//--50p 配列

// 配列を定義する
let array = [];

for (let j = 0; j < 9; j++) {
  array[j] = j + 1;
}

console.log(array);

// ==========================================
// ### Page 50: practice 04 配列 (配列課題 ②)
// ② AさんとBさんが10回じゃんけんをする。
// ==========================================

//----------------------------------------------
// AさんとBさんが10回じゃんけんをする。
// 最後に何を出したかの10回分の履歴を表示する。

let aHand = [];
let bHand = [];
let hands = ["グー", "チョキ", "パー"];

// for (let k = 0; k < 10; k++) {
//   let a = Math.floor(Math.random() * 3);
//   let b = Math.floor(Math.random() * 3);
//   aHand[k] = hands[a];
//   bHand[k] = hands[b];

//   console.log("第" + (k + 1) + "回戦");
//   console.log("Aさんの手：" + aHand[k]);
//   console.log("Bさんの手：" + bHand[k]);
// }

let y = 0;

while (y < 10) {
  let a = Math.floor(Math.random() * 3);
  let b = Math.floor(Math.random() * 3);
  aHand[y] = hands[a];
  bHand[y] = hands[b];

  console.log("第" + (y + 1) + "回戦");
  console.log("Aさんの手：" + aHand[y]);
  console.log("Bさんの手：" + bHand[y]);

  y = y + 1;
}

// 最後に何を出したかの10回分の履歴を表示する。
console.log("Aさんの手：" + aHand);
console.log("Bさんの手：" + bHand);

// ==========================================
// ### Page 50: practice 04 配列 (配列課題 ③)
// ③0から99までのランダムな数値を10個生成して出力。
// ==========================================

//----------------------------------------------
// ランダムな0から99までの数値を出力する。
// ランダムな数字を表示する。出力例8, 9, 10, 11, 12
// その通知の合計を表示する。293

let sumRandomNumber = 0;
let arrayRandomNumber = [];

for (let n = 1; n <= 10; n++) {
  // 0から99までのランダムな数値を出力
  let randomNumber = Math.floor(Math.random() * 100);

  arrayRandomNumber.push(randomNumber);
  sumRandomNumber = sumRandomNumber + randomNumber;
}

console.log("ランダムな数値：" + arrayRandomNumber);
console.log("1から10までのランダムな数値の合計は" + sumRandomNumber + "です");

//----------------------------------------------
// ==========================================
// ### Page 501 practice 04 配列 (配列課題 ③)
// 0から9までのランダムな数値を10個生成して出力。
// ただし、重複してはだめ。
// 出力例）0 5 3 7 2 9 8 6 1 4
// ==========================================

let uniqueRandomNumbers = [];

while (uniqueRandomNumbers.length < 10) {
  let randomNum = Math.floor(Math.random() * 10);
  // 重複していない場合のみ配列に追加
  if (!uniqueRandomNumbers.includes(randomNum)) {
    uniqueRandomNumbers.push(randomNum);
  } else {
    console.log("重複した数字：" + randomNum + "はスキップします");
  }
}

console.log("重複しないランダムな数値：" + uniqueRandomNumbers);

//----------------------------------------------
// ==========================================
// ➃の課題で出力した10個のランダムな数値を、昇順に並び替えてみよう。
// 出力例）0 5 3 7 2 9 8 6 1 4
// 0 1 2 3 4 5 6 7 8 9
// ==========================================

// 昇順に並び替え（while loopを使用して）
let sortedNumbers = [];
while (uniqueRandomNumbers.length > 0) {
  // 最小値を見つける
  let min = Math.min(...uniqueRandomNumbers);
  // 最小値を新しい配列に追加
  sortedNumbers.push(min);
  // 元の配列から最小値を削除
  uniqueRandomNumbers.splice(uniqueRandomNumbers.indexOf(min), 1);
}
console.log("昇順に並び替えたランダムな数値：" + sortedNumbers);

//----------------------------------------------
// ==========================================
// ➄の課題で出力した10個のランダムな数値を、降順に並び替えてみよう。
// 出力例）0 5 3 7 2 9 8 6 1 4
// 0 1 2 3 4 5 6 7 8 9
// ==========================================

// 降順に並び替え（while loopを使用して）
let descSortedNumbers = [];
while (sortedNumbers.length > 0) {
  // 最大値を見つける
  let max = Math.max(...sortedNumbers);
  // 最大値を新しい配列に追加
  descSortedNumbers.push(max);
  // 元の配列から最大値を削除
  sortedNumbers.splice(sortedNumbers.indexOf(max), 1);
}
console.log("降順に並び替えたランダムな数値：" + descSortedNumbers);
