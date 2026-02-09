function sortArrayAsc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // もし左の数値と右の数値が左の数値が大きい場合、入れ替えを行う
      if (arr[j] > arr[j + 1]) {
        let saveBox = arr[j];
        // 入れ替え。大きいデータを右に移動
        arr[j] = arr[j + 1];
        arr[j + 1] = saveBox;
      }
    }
  }
  return arr;
}

console.log("配列昇順結果１：" + sortArrayAsc([9, 5, 3, 2, 1]));

console.log("ーーーーーーーーーーーーーーーーーーーーーー【58-５別解】にゃんをつける " + "\n" + "ーーーーーーーーーーーーーーーーー-");

function addNyan(words) {
  // 「。」を「にゃん」におきかえる
  return (words = words.replace(/。/g, "にゃん"));
}

console.log(addNyan("こんにちは。お元気ですか。"));

console.log("ーーーーーーーーーーーーーーーーーーーーーー【66-1】DOM課題➀　１" + "\n" + "ーーーーーーーーーーーーーーーーー-");
const btnRed = document.getElementById("colorChangeBtnRed");
const btnBlue = document.getElementById("colorChangeBtnBlue");
const box1 = document.getElementById("box");

// ボタン青の確認
console.log(btnBlue);

// btnBlue.addEventListener("click", function () {
//   box1.style.backgroundColor = "blue";
// });

btnRed.addEventListener("click", function () {
  box1.style.backgroundColor = "red";
});

btnBlue.addEventListener("click", function () {
  box1.style.backgroundColor = "blue";
  console.log("boxがみつかりません");
});
console.log("ーーーーーーーーーーーーーーーーーーーーーー【66-2】DOM課題➁　2" + "\n" + "ーーーーーーーーーーーーーーーーー-");

const applyColorBtn = document.getElementById("applyColorBtn");

applyColorBtn.addEventListener("click", function () {
  const colorInput = document.getElementById("colorInput").value;
  box1.style.backgroundColor = colorInput;
});

console.log("ーーーーーーーーーーーーーーーーーーーーーー【66-3】DOM課題➂ 3" + "\n" + "ーーーーーーーーーーーーーーーーー-");

const tempNumInput1 = document.getElementById("numInput1");
const tempNumInput2 = document.getElementById("numInput2");

const sumBtn = document.getElementById("sumBtn");
sumBtn.addEventListener("click", function () {
  const num1 = tempNumInput1.value;
  const num2 = tempNumInput2.value;
  const sumResult = Number(num1) + Number(num2);
  const sumResultDiv = document.getElementById("sumResult");
  sumResultDiv.textContent = "足し算の結果は " + sumResult + " だよ";
});

console.log("ーーーーーーーーーーーーーーーーーーーーーー【58-4別解】回数カウント " + "\n" + "ーーーーーーーーーーーーーーーーー-");

let countNum = 0;

const tempPushBtn = document.getElementById("pushBtn");
tempPushBtn.addEventListener("click", function () {
  countNum += 1;
  console.log("ボタンが押された回数：" + countNum);
  const pushCountDiv = document.getElementById("pushCountNum");
  pushCountDiv.textContent = "ボタンが押された回数：" + countNum + " 回";
});
console.log("ーーーーーーーーーーーーーーーーーーーーーー【58-5】DOM課題 " + "\n" + "ーーーーーーーーーーーーーーーーー-");

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log("i:" + i + " j:" + j);
    //要素を作成する
    const tempDiv = document.createElement("button");
    //要素にクラスを追加する
    // tempDiv.classList.add("box_msg" + i + "_" + j);
    //要素にテキストを追加する
    tempDiv.textContent = "押して";
    // tempDiv.textContent = "押して" + tempDiv.classList;
    //親要素に子要素を追加する
    console.log(tempDiv);

    tempDiv.addEventListener("click", function () {
      // const className = getClassName(this);
      // alert("あなたは " + className + " を押したね");
      this.style.backgroundColor = "red";
    });

    document.body.appendChild(tempDiv);
  }
  document.body.appendChild(document.createElement("br"));
}

console.log("ーーーーーーーーーーーーーーーーーーーーーー【66-4】particles.js " + "\n" + "ーーーーーーーーーーーーーーーーー-");
/* 第一引数は要素のid名、第二引数は設定オブジェクト */
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    shape: { type: "circle" },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
    },
  },
});
