// JQERYで実装。Windowsが読み込まれたあとに、アコーディオンの機能を実装するためのコードです。
$(function () {
  // アコーディオンのタイトル要素をクリックしたときのイベントリスナーを設定します。
  $(".header_container").on("click", function () {
    // クリックされたタイトル要素の次の兄弟要素（アコーディオンの内容）を取得します。
    var content = $(this).nextAll(".header_item");
    // アコーディオンを開くか閉じるかを判断します。
    content.slideToggle(300, function () {
      // 開いた時にflexレイアウトを適用
      if ($(this).is(":visible")) {
        $(this).css("display", "flex");
      }
    }); // アコーディオンの内容をスライドで表示/非表示にします。
  });
});
