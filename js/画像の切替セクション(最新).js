// 下の画像をクリックしたら、上の画像が切り替わるようにするには、JavaScriptを使用してイベントリスナーを追加する必要があります。以下は、基本的な例です。
$(function () {
  $(".img").click(function () {
    // 画像を取得
    var newSrc = $(this).attr("src");

    $(".MainImg").attr("src", newSrc);
    // 大きな画像の要素を取得
  });
});
