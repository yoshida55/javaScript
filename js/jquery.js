// アコーディオンメニューを作成する
let firstFlg = true;
let firstFlg1 = true;
let firstFlg2 = true;

// if (firstFlg) {
//   var plusFirst = $(".plus");
//   plusFirst.text("＋");
//   firstFlg = false;

//   console.log("初期表示の処理が実行されました。");
// }

$(function () {
  // アコーディオンのタイトルをクリックしたときの処理
  $("#work").click(function () {
    console.log("クリックされました。");
    // クリックされたタイトルの次の要素（コンテンツ）を取得
    // var content = $(this).next(".accordion-content");

    // 3つの子要素を取得
    var content = $(".accordion-content");

    // その要素自体を取得
    var plusObj = $(".plus");
    // コンテンツが表示されているかどうかをチェック
    // if (content.is(":visible")) {
    //   // コンテンツが表示されている場合は、スライドアップして非表示にする
    //   content.slideUp();
    // } else {
    //   // コンテンツが非表示の場合は、スライドダウンして表示する
    //   content.slideDown();
    // }

    content.slideToggle();
    plusObj.toggleClass("open");
    plusObj.text("");

    if (plusObj.is(".open")) {
      console.log("openあり");
    } else {
      console.log("openなし");
    }
  });
});

$(function () {
  // アコーディオンのタイトルをクリックしたときの処理
  $("#work1").click(function () {
    console.log("クリックされました。");
    // クリックされたタイトルの次の要素（コンテンツ）を取得
    // var content = $(this).next(".accordion-content");
    var content1 = $(".accordion-content1").contents();
    var plusObj1 = $(".plus1");
    // コンテンツが表示されているかどうかをチェック
    // if (content.is(":visible")) {
    //   // コンテンツが表示されている場合は、スライドアップして非表示にする
    //   content.slideUp();
    // } else {
    //   // コンテンツが非表示の場合は、スライドダウンして表示する
    //   content.slideDown();
    // }

    // 初期表示はスライドダウンする
    if (firstFlg1) {
      content1.slideDown();
      firstFlg1 = false;
      return;
    }

    content1.slideToggle();
    plusObj1.toggleClass("open");
    plusObj1.text("");

    if (plusObj1.is(".open")) {
      console.log("openあり1");
    } else {
      console.log("openなし1");
    }
  });
});

$(function () {
  // アコーディオンのタイトルをクリックしたときの処理
  $("#work2").click(function () {
    console.log("クリックされました。");
    // クリックされたタイトルの次の要素（コンテンツ）を取得
    // var content = $(this).next(".accordion-content");
    var content2 = $(".accordion-content2").contents();
    var plusObj2 = $(".plus2");
    // コンテンツが表示されているかどうかをチェック
    // if (content.is(":visible")) {
    //   // コンテンツが表示されている場合は、スライドアップして非表示にする
    //   content.slideUp();
    // } else {
    //   // コンテンツが非表示の場合は、スライドダウンして表示する
    //   content.slideDown();
    // }

    // 初期表示はスライドダウンする
    if (firstFlg2) {
      content2.slideDown();
      firstFlg2 = false;
      return;
    }

    content2.slideToggle();
    plusObj2.toggleClass("open");
    plusObj2.text("");

    if (plusObj2.is(".open")) {
      console.log("openあり2");
    } else {
      console.log("openなし2");
    }
  });
});
