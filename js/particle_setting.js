//id(particles-js)はHTMLで設定したものを入れる
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#E0FFFF", "#90f8fe", "#25bffe", "#215295", "#fcfdba"], // 複数の色でパーティクルをランダムに着色
    },
    shape: {
      type: ["circle", "star"], // パーティクルの形状（円と星）
    },
    opacity: {
      value: 0.8,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        opacity_min: 0.4,
        sync: false,
      },
    },
    size: {
      value: 6,
      random: true,
      animation: {
        enable: true,
        speed: 2,
        size_min: 2,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce", // 画面端でバウンド
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    line_linked: {
      enable: true, // パーティクル同士を線で結ぶ
      distance: 140, // 線を結ぶ最大距離
      color: "#ffffff",
      opacity: 0.5,
      width: 1,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble", // ホバー時のエフェクト
      },
      onclick: {
        enable: true,
        mode: "push", // クリック時にパーティクルを追加
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 200,
        size: 9,
        duration: 2,
        opacity: 1,
        speed: 3,
      },
      push: {
        particles_nb: 8,
      },
    },
  },
  retina_detect: true,
});
