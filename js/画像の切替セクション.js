// 画像切り替え機能
$(function () {
  // サムネイル画像をクリックしたとき
  $(".gallery_img").on("click", function () {
    // クリックした画像のsrcを取得

    // ★attrはHTML要素の**属性（attribute）を取得または設定**するメソッドです。
    // ★$("img").attr("src");  // "photo.jpg" を取得
    // ★$("img").attr("alt");  // "写真" を取得

    const src = $(this).attr("src");

    // ★画像を取得してSRCで切り替える
    // メイン画像エリアに表示
    $(".gallery_main").attr("src", src);
  });
});
