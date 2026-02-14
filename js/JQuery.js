// jQuery
// Pタグを要素にいれる
$(".inPTag").append("<p class='myClass'>jQuery</p>");
$(".myClass").slideToggle(2000);

/* ✨
# jQueryでアコーディオンメニューの作り方

## 基本的な実装方法

$(document).ready(function() {
  $('.accordion-header').click(function() {
    $(this).next('.accordion-content').slideToggle();
    $(this).toggleClass('active');
  });
});

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
