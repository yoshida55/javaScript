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
const inputText = document.getElementById("inputText");
const showTextBtn = document.getElementById("showTextBtn");
showTextBtn.addEventListener("click", function () {
  console.log(typeof inputText.value);
  console.log(Number(inputText.value) + 10);
});

console.log("◯◯◯ーーーーーーーーーーーーーーーーーーーーーー【64-1】DOM課題いろいろな変更" + "\n" + "ーーーーーーーーーーーーーーーーー-");
// ➀divタグからbuttonタグに変更する
const changeBtn = document.getElementById("changeBtn");

// 「変化するよ」ボタンがクリックされたら。
changeBtn.addEventListener("click", function () {
  const changeDiv = document.getElementById("changeDiv");
  const newButton = document.createElement("button");
  newButton.textContent = "私は新しいボタンです";
  changeDiv.replaceWith(newButton);
});

//➁既存のulタグにliタグを追加する

const myList = document.getElementById("myList");
const addItemBtn = document.getElementById("addItemBtn");
addItemBtn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "新しいアイテム";
  myList.appendChild(newItem);
});

console.log("△△△ーーーーーーーーーーーーーーーーーーーーーー【66-1】DOM課題➀　１" + "\n" + "ーーーーーーーーーーーーーーーーー-");
// ➂divタグの色を変える
const changeColorBtn = document.getElementById("changeColorBtn");

changeColorBtn.addEventListener("click", function () {
  const container = document.getElementById("container");
  console.log("aaaaa");
  container.style.backgroundColor = "blue";
});

console.log("▢▢▢ーーーーーーーーーーーーーーーーーーーーーー【66-1】カラーコードを指定する➀　１" + "\n" + "ーーーーーーーーーーーーーーーーー-");

// ➃カラーコード指定
const btnChgColor = document.getElementById("btnChgColor");

btnChgColor.addEventListener("click", function () {
  const container1 = document.getElementById("container");
  const inputText1 = document.getElementById("inputText1");
  console.log("aaaaa");
  console.log(container1);
  console.log(inputText1.value);

  container1.style.backgroundColor = inputText1.value;
});

console.log("■■■ーーーーーーーーーーーーーーーーーーーーーー【66-5】DOM課題➀　5" + "\n" + "ーーーーーーーーーーーーーーーーー-");

// ➄ボタン足し算
const btnSum = document.getElementById("btnSum");

btnSum.addEventListener("click", function () {
  console.log("aaa");
  const inputNum1 = document.getElementById("num1");
  const inputNum2 = document.getElementById("num2");
  const result = Number(inputNum1.value) + Number(inputNum2.value);
  const sumResult = document.getElementById("result");
  sumResult.textContent = result;
});

console.log("！！！ーーーーーーーーーーーーーーーーーーーーーー【66-5】DOM課題➁　5" + "\n" + "ーーーーーーーーーーーーーーーーー-");

// ➅このdivタグ内に１００個のボタンを追加する

const boxTemp = document.getElementById("boxTemp");

for (let j = 0; j < 10; j++) {
  for (let i = 0; i < 10; i++) {
    // 横一列
    const createButton = document.createElement("button");
    createButton.textContent = `ボタン${j + i}`;
    boxTemp.appendChild(createButton);
    createButton.addEventListener("click", function () {
      createButton.style.backgroundColor = "yellow";
    });
  }
  // ループの最後に改行を追加する
  const lineBreak = document.createElement("br");
  boxTemp.appendChild(lineBreak);
}

console.log("!!!ーーーーーーーーーーーーーーーーーーーーーー【68-5】ライブラリ" + "\n" + "ーーーーーーーーーーーーーーーーー-");
