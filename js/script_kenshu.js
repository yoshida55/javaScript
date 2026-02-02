// function pushBtn() {
//   const exam = document.getElementById("exam");
//   exam.innerHTML = "書き換えました！";
//   exam.style.color = "red";
// }

const exam = document.getElementById("exam");
exam.addEventListener("click", function () {
  alert("クリックされました！");
});

// テキストボックに入力された数値に10を足してコンソールに表示する
const inputtext = document.getElementById("inputText");
const sowTextBtn = document.getElementById("showTextBtn");
sowTextBtn.addEventListener("click", function () {
  console.log(typeof inputtext.value);
  console.log(Number(inputtext.value) + 10);
});

// divタグからbottonタグに変更する
const henkouBtn = document.getElementById("henkouBtn");
henkouBtn.addEventListener("click", function () {
  const henkouDiv = document.getElementById("henkouDiv");

  const newButton = document.createElement("button");
  henkouDiv.replaceWith(newButton);
});

//   divタグをボタンに変更するよ

const myList = document.getElementById("myList");
const addItemBtn = document.getElementById("addItemBtn");
addItemBtn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "新しいアイテム";
  myList.appendChild(newItem);
});

console.log("ーーーーーーーーーーーーーーーーーーーーーー【64-1】DOM課題いろいろな変更" + "\n" + "ーーーーーーーーーーーーーーーーー-");

console.log("ーーーーーーーーーーーーーーーーーーーーーー【66-1】DOM課題➀　１" + "\n" + "ーーーーーーーーーーーーーーーーー-");
const henkouBtn1 = document.getElementById("henkouBtn1");

henkouBtn1.addEventListener("click", function () {
  const container = document.getElementById("container");
  console.log("aaaaa");
  container.style.backgroundColor = "red";
});

console.log("ーーーーーーーーーーーーーーーーーーーーーー【66-1】カラーコードを指定する➀　１" + "\n" + "ーーーーーーーーーーーーーーーーー-");

const btnChgColor = document.getElementById("btnChgColor");

btnChgColor.addEventListener("click", function () {
  const container1 = document.getElementById("container");
  const inputText1 = document.getElementById("inputText1");
  console.log("aaaaa");
  console.log(container1);
  console.log(inputText1.value);

  container1.style.backgroundColor = inputText1.value;
});

console.log("ーーーーーーーーーーーーーーーーーーーーーー【66-5】DOM課題➀　5" + "\n" + "ーーーーーーーーーーーーーーーーー-");

const btnSum = document.getElementById("btnSum");

btnSum.addEventListener("click", function () {
  console.log("aaa");
  const inputNum1 = document.getElementById("num1");
  const inputNum2 = document.getElementById("num2");
  const result = Number(inputNum1.value) + Number(inputNum2.value);
  const sumResult = document.getElementById("result");
  sumResult.textContent = result;
});
