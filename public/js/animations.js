$(function () {
  $(window).scroll(function () {
    const security = $("#security").offset().top + 100;
    const popular = $("#popular").offset().top + 100;
    const package = $("#package").offset().top + 100;
    const clients = $("#clients").offset().top + 100;
    const access = $("#access").offset().top + 100;

    let height = window.scrollY + window.innerHeight;
    if (height >= security) {
      $("#security-box-1").addClass("slideRight");
      $("#security-box-2").addClass("slideLeft");
      $("#security-box-3").addClass("slideRight");
      $("#security-box-4").addClass("slideLeft");
      $("#security-header").addClass("fadeIn");
    }
    if (height >= popular) {
      $("#popular-box-1").addClass("slideUp");
      $("#popular-box-2").addClass("slideUp");
      $("#popular-box-3").addClass("slideUp");
      $("#popular-header").addClass("fadeIn");
    }
    if (height >= package) {
      $("#package-header").addClass("fadeIn");
    }
    if (height >= clients) {
      $("#clients-header").addClass("fadeIn");
    }
    if (height >= access) {
      $("#access-header").addClass("fadeIn");
      for (let i = 1; i <= 8; i++) {
        setTimeout(() => {
          $(`#access-box-${i}`).addClass(`fadeIn${i * 50}`);
        }, 100);
      }
    }
  });
});
