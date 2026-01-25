console.log("script3 loaded");

// 配列の中から重複している数字を見つける
let numbers = [5, 3, 8, 3, 9, 5, 2, 8, 1];
let duplicates = []; // 重複している数字を入れる配列

console.log("元の配列:", numbers);

// 外側: 確認したい位置（全部の数字をチェックする）
for (let i = 0; i < numbers.length; i++) {
  // 内側: 比較相手（自分より後ろの位置と比較）
  for (let j = i + 1; j < numbers.length; j++) {
    // もし同じ数字が見つかったら
    if (numbers[i] === numbers[j]) {
      // まだ記録していない数字なら追加
      if (!duplicates.includes(numbers[i])) {
        duplicates.push(numbers[i]);
        console.log(
          `重複発見！ ${numbers[i]} が index[${i}] と index[${j}] にある`,
        );
      }
    }
  }
}

console.log("---結果---");
console.log("重複している数字:", duplicates);
console.log("重複の数:", duplicates.length + "個");

console.log("\n========================\n");

// 2つの数字を足して目標値になる組み合わせを見つける
let prices = [100, 250, 180, 320, 150, 400];
let budget = 500; // 予算500円
let combinations = []; // 見つかった組み合わせ

console.log("価格リスト:", prices);
console.log("予算:", budget + "円");
console.log("予算内で買える2つの商品の組み合わせを探します...\n");

// 外側: 1つ目の商品
for (let i = 0; i < prices.length; i++) {
  // 内側: 2つ目の商品（自分より後ろから選ぶ）
  for (let j = i + 1; j < prices.length; j++) {
    let sum = prices[i] + prices[j];

    // 2つの合計が予算以内なら記録
    if (sum <= budget) {
      combinations.push({
        item1: i,
        item2: j,
        price1: prices[i],
        price2: prices[j],
        total: sum,
      });
      console.log(
        `✓ 商品[${i}] ${prices[i]}円 + 商品[${j}] ${prices[j]}円 = ${sum}円`,
      );
    }
  }
}

console.log("\n---結果---");
console.log("予算内の組み合わせ:", combinations.length + "通り");
