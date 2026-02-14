// jQuery
// Pタグを要素にいれる
// $(".inPTag").append("<p class='myClass'>jQuery</p>");
// $(".myClass").slideToggle(2000);

// HTMLの読み込みが完了してから中の処理を実行する
const accBtnIcon = document.getElementById("acc-btn-icon");

$(function () {
  $(".acc-btn").on("click", function () {
    $(this).next(".acc-panel").slideToggle(200);
    console.log("クリックされました");
    accBtnIcon.classList.toggle("active");
    console.log(accBtnIcon);
  });
});

// $(document).ready(function() {
//   $('.accordion-header').click(function() {
//     $(this).next('.accordion-content').slideToggle();
//     $(this).toggleClass('active');
//   });
// });

// 【functionの説明】
/* ✨
# 2つのfunctionの説明

## 1個目の function
$(function () { ... });
- **ドキュメント読み込み完了を待つ関数**
- `$(document).ready(function(){...})` の省略形
- HTMLの読み込みが完了してから中の処理を実行する

## 2個目の function
$(".accordion-header").click(function () { ... });
- **クリックイベントのコールバック関数**
- `.accordion-header` がクリックされた時に実行される処理
- クリックされた要素に対してスライドトグルとクラス切替を行う

## まとめ
- **1個目**: 「ページ準備完了後に実行」という**タイミング制御**
- **2個目**: 「クリックされたら実行」という**イベント処理**
*/

/* ✨


**推奨される書き方：**

// 推奨：短縮記法

# jQueryでアコーディオンメニューの作り方

## 基本的な実装方法


## HTML構造
<div class="accordion">
  <div class="accordion-header">タイトル1</div>
  <div class="accordion-content">内容1</div>
  
  <div class="accordion-header">タイトル2</div>
  <div class="accordion-content">内容2</div>
</div>

## CSS
.accordion-content {
  display: none;
}

## ポイント
- **slideToggle()**: コンテンツの開閉をアニメーション
- **toggleClass()**: アクティブ状態の切り替え
- 他を閉じる場合: `$('.accordion-content').slideUp()`を追加

これで基本的なアコーディオンが完成します！
*/

/* ✨
「Toggle」は「切り替え」という意味で、**表示/非表示を切り替える動作**を指します。

`slideToggle()`は：
- **非表示の要素** → スライドしながら**表示**
- **表示中の要素** → スライドしながら**非表示**

このように、実行するたびに**表示状態を自動で切り替える（Toggle）**のが特徴です。

つまり「Slide」は**動き方**、「Toggle」は**切り替え機能**を表しています。現在の状態を判断して逆の動作をする点が「Toggle」の意味です。
*/
