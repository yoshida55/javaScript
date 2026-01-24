console.log("script2 loaded");
debugger;
// 配列　７．５、９，　３
// 元のの番号（配列）
originalNumbers = [3, 2, 1];

// 昇順後の結果（配列）
let lineUPnumbers = [];

lineUpNum(originalNumbers);


//　もとの番号をうけとって
function lineUpNum(originalNumbers) {

  // もとの番号の長さを取得する（元の昇順する目的の配列）
  let length = originalNumbers.length;

  // target: 確定させたい位置
  for (let target = 0; target < length; target++) {
    
    // compare: 比較相手（ターゲットの次の数字から最後まで）
    for (let compare = target + 1; compare < length; compare++) {
      
      if (originalNumbers[target] > originalNumbers[compare]) {
        // 入れ替え作業
        let storage = originalNumbers[target];
        originalNumbers[target] = originalNumbers[compare];
        originalNumbers[compare] = storage;
      }
    }
  }
}


console.log("配列昇順結果");
