// $(function () {
//   $(".plus, .plus1, .plus2").text("＋"); // ← これが初期表示

//   // 全アコーディオンを一つにまとめる
//   $("#work, #work1, #work2").click(function () {
//     var content = $(this).next();
//     var plusObj = $(this).find(".plus, .plus1, .plus2");

//     content.slideToggle();

//     if (plusObj.text() === "＋") {
//       plusObj.text("ー");
//     } else {
//       plusObj.text("＋");
//     }
//   });
// });

$(function () {
  $(".plus, .plus1, .plus2").text("＋"); // ← これが初期表示

  // アコーディオンのタイトルをクリックしたときの処理
  $("#work, #work1, #work2").click(function () {
    var plus = $(this).find(".plus, .plus1, .plus2");
    var accordionContent = $(this).next(".accordion-content, .accordion-content1, .accordion-content2");

    accordionContent.slideToggle();

    if (plus.text() === "＋") {
      plus.text("ー");
    } else {
      plus.text("＋");
    }
  });
});

// $("#work1").click(function () {
//   console.log("クリックされました。");
//   var content1 = $(".accordion-content1");
//   var plusObj1 = $(".plus1");

//   content1.slideToggle();
//   if (plusObj1.text() === "＋") {
//     plusObj1.text("ー");
//   } else {
//     plusObj1.text("＋");
//   }
// });

// // アコーディオンのタイトルをクリックしたときの処理
// $("#work2").click(function () {
//   console.log("クリックされました。");
//   // クリックされたタイトルの次の要素（コンテンツ）を取得
//   // var content = $(this).next(".accordion-content");
//   var content2 = $(".accordion-content2");
//   var plusObj2 = $(".plus2");

//   content2.slideToggle();
//   if (plusObj2.text() === "＋") {
//     plusObj2.text("ー");
//   } else {
//     plusObj2.text("＋");
//   }
// });
