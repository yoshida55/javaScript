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
const p1 = document.getElementById("box");

btnBlue.addEventListener("click", function () {
  p1.style.backgroundColor = "blue";
  console.log("boxがみつかりません");
});

btnRed.addEventListener("click", function () {
  p1.style.backgroundColor = "red";
  console.log("boxがみつかりません");
});




