// 下段の画像をクリックすると、上段の画像が切り替わる。
$(function () {
  // サムネイル画像をクリックしたときの処理
  $(".gallery_img").on("click", function () {
    // クリックされたサムネイル画像のsrc属性を取得
    const imgSrc = $(this).attr("src");
    // メイン画像のsrc属性をクリックされたサムネイル画像のsrc属性に変更
    $(".gallery_main").attr("src", imgSrc);
  });
});
