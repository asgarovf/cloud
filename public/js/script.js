$(document).ready(function () {
  $(this).scrollTop(0);
});

$(function () {
  $(document).scroll(function () {
    var $nav = $("#navbar");
    var $navItems = $(".nav-links a span");
    var $navBrand = $(".nav-brand span");
    var $social = $(".social");
    var $bars = $(".bars");
    var $navigationSmall = $(".navigation-small");
    $nav.toggleClass("active", $(this).scrollTop() > 50);
    $nav.toggleClass("fixed-top", $(this).scrollTop() > 50);
    $navBrand.toggleClass("active", $(this).scrollTop() > 50);
    $navItems.toggleClass("active", $(this).scrollTop() > 50);
    $social.toggleClass("active", $(this).scrollTop() > 50);
    $bars.toggleClass("active", $(this).scrollTop() > 50);
    $navigationSmall.toggleClass("active", $(this).scrollTop() > 50);
    if ($navigationSmall.hasClass("active")) {
      $nav.addClass("header-deactivate");
      $navigationSmall.addClass("sm-activate");
    } else {
      $nav.removeClass("header-deactivate");
      $navigationSmall.removeClass("sm-activate");
    }
  });
});

$(function () {
  var $bars = $(".bars");
  var $navigationSmall = $(".navigation-small");
  var $navToggle = $("#navToggle");

  $bars.click(() => {
    if ($navigationSmall.hasClass("collapsed")) {
      $navigationSmall.removeClass("collapsed");
      $navigationSmall.slideUp();
      $navToggle.addClass("fa-bars").removeClass("fa-times");
    } else {
      $navigationSmall.addClass("collapsed");
      $navigationSmall.slideDown();
      $navToggle.addClass("fa-times").removeClass("fa-bars");
    }
  });
});

$(function () {
  for (let i = 1; i <= 4; i++) {
    $(`#sm-nbh__${i}`).text($(`#nbh__${i}`).text());
  }

  for (let i = 1; i <= 3; i++) {
    $(`#sm-nb__1-${i}`).text($(`#nb__1-${i}`).text());
  }
  for (let i = 1; i <= 3; i++) {
    $(`#sm-nb__2-${i}`).text($(`#nb__2-${i}`).text());
  }
});

$(function () {
  $("#home-small").click(() => {
    if ($("#home-small-menu").hasClass("drop")) {
      $("#home-small-menu").slideUp();
      $("#home-small-menu").removeClass("drop");
    } else {
      $("#home-small-menu").slideDown();
      $("#home-small-menu").addClass("drop");
    }
  });
  $("#services-small").click(() => {
    if ($("#services-small-menu").hasClass("drop")) {
      $("#services-small-menu").slideUp();
      $("#services-small-menu").removeClass("drop");
    } else {
      $("#services-small-menu").slideDown();
      $("#services-small-menu").addClass("drop");
    }
  });
});

$(function () {
  $("#home").mouseover(() => {
    $("#services-menu").addClass("d-none");
    $("#home-menu").removeClass("d-none");
    $("#home-menu").addClass("home-menu-animation");
  });
  $("#home-menu").mouseover(() => {
    $("#home-menu").removeClass("d-none");
    $("#home-menu").addClass("home-menu-animation");
  });
  $("#home-menu").mouseout(() => {
    $("#home-menu").addClass("d-none");
  });

  $("#services").mouseover(() => {
    $("#home-menu").addClass("d-none");
    $("#services-menu").removeClass("d-none");
    $("#services-menu").addClass("services-menu-animation");
  });
  $("#services-menu").mouseover(() => {
    $("#services-menu").removeClass("d-none");
    $("#services-menu").addClass("services-menu-animation");
  });
  $("#services-menu").mouseout(() => {
    $("#services-menu").addClass("d-none");
  });

  $(" #test, #contact").mouseover(() => {
    $("#home-menu").addClass("d-none");
    $("#services-menu").addClass("d-none");
  });

  $(
    "#brand,#main-landing,#main-section-1,#main-section-2,#main-about-us,#main-process,#main-contact,#main-faq"
  ).mouseover(() => {
    $("#home-menu").addClass("d-none");
    $("#services-menu").addClass("d-none");
  });
});

(function () {
  document.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    var eventDoc, doc, body;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX =
        event.clientX +
        ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
        ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
      event.pageY =
        event.clientY +
        ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
        ((doc && doc.clientTop) || (body && body.clientTop) || 0);
    }

    // Use event.pageX / event.pageY here

    var y = event.pageY - window.scrollY;

    if (y < 20) {
      $("#home-menu").addClass("d-none");
      $("#services-menu").addClass("d-none");
    }
  }
})();

var owl = $("#owl-1");
owl.owlCarousel({
  loop: true,
  nav: false,
  items: 3,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
  smartSpeed: 1000,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
});

$(".trigger-button").click(function () {
  owl.trigger("next.owl.carousel");
});

var owl2 = $("#owl-2");
owl2.owlCarousel({
  loop: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    992: {
      items: 2,
    },
  },
  smartSpeed: 1000,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
});

$("#owl-button-1").click(function () {
  console.log("left");
  owl2.trigger("prev.owl.carousel");
});

$("#owl-button-2").click(function () {
  owl2.trigger("next.owl.carousel");
});

$(function () {
  $("#offer-btn-1").click(() => {
    $("#underline-1").addClass("offer-items-animation");
    $(`#offer-1`).removeClass("d-none");
    for (let i = 1; i <= 4; i++) {
      if (i !== 1) {
        $(`#offer-${i}`).addClass("d-none");
        $(`#underline-${i}`).removeClass("offer-items-animation");
      }
    }
  });
  $("#offer-btn-2").click(() => {
    $("#underline-2").addClass("offer-items-animation");
    $(`#offer-2`).removeClass("d-none");
    for (let i = 1; i <= 4; i++) {
      if (i !== 2) {
        $(`#offer-${i}`).addClass("d-none");
        $(`#underline-${i}`).removeClass("offer-items-animation");
      }
    }
  });
  $("#offer-btn-3").click(() => {
    $("#underline-3").addClass("offer-items-animation");
    $(`#offer-3`).removeClass("d-none");
    for (let i = 1; i <= 4; i++) {
      if (i !== 3) {
        $(`#offer-${i}`).addClass("d-none");
        $(`#underline-${i}`).removeClass("offer-items-animation");
      }
    }
  });
  $("#offer-btn-4").click(() => {
    $("#underline-4").addClass("offer-items-animation");
    $(`#offer-4`).removeClass("d-none");
    for (let i = 1; i <= 4; i++) {
      if (i !== 4) {
        $(`#offer-${i}`).addClass("d-none");
        $(`#underline-${i}`).removeClass("offer-items-animation");
      }
    }
  });
});

$(function () {
  $("#team-1").mouseover(() => {
    $("#team-item-hovered-1").addClass("team-item-hovered-animation");
    $("#team-item-content-1").addClass("team-item-hovered-close-animation");
  });
  $("#team-1").mouseout(() => {
    $("#team-item-hovered-1").removeClass("team-item-hovered-animation");
    $("#team-item-content-1")
      .addClass("team-item-hovered-animation")
      .removeClass("team-item-hovered-close-animation");
  });

  $("#team-2").mouseover(() => {
    $("#team-item-hovered-2").addClass("team-item-hovered-animation");
    $("#team-item-content-2").addClass("team-item-hovered-close-animation");
  });
  $("#team-2").mouseout(() => {
    $("#team-item-hovered-2").removeClass("team-item-hovered-animation");
    $("#team-item-content-2")
      .addClass("team-item-hovered-animation")
      .removeClass("team-item-hovered-close-animation");
  });

  $("#team-3").mouseover(() => {
    $("#team-item-hovered-3").addClass("team-item-hovered-animation");
    $("#team-item-content-3").addClass("team-item-hovered-close-animation");
  });
  $("#team-3").mouseout(() => {
    $("#team-item-hovered-3").removeClass("team-item-hovered-animation");
    $("#team-item-content-3")
      .addClass("team-item-hovered-animation")
      .removeClass("team-item-hovered-close-animation");
  });

  $("#team-4").mouseover(() => {
    $("#team-item-content-4").addClass("team-item-hovered-close-animation");
    $("#team-item-hovered-4").addClass("team-item-hovered-animation");
  });
  $("#team-4").mouseout(() => {
    $("#team-item-hovered-4").removeClass("team-item-hovered-animation");
    $("#team-item-content-4")
      .addClass("team-item-hovered-animation")
      .removeClass("team-item-hovered-close-animation");
  });
});

$(function () {
  $("#q1-h").click(() => {
    if ($("#q1-b").hasClass("collapsed")) {
      $("#q1-b").slideUp();
      $("#q1-b").removeClass("collapsed");
      $("#q1-h-1").removeClass("active");
      $("#q1-icon").addClass("ti-plus").removeClass("ti-minus");
    } else {
      $("#q1-b").slideDown();
      $("#q1-h-1").addClass("active");
      $("#q1-b").addClass("collapsed");
      $("#q1-icon").addClass("ti-minus").removeClass("ti-plus");
    }
  });

  $("#q2-h").click(() => {
    if ($("#q2-b").hasClass("collapsed")) {
      $("#q2-b").slideUp();
      $("#q2-b").removeClass("collapsed");
      $("#q2-h-1").removeClass("active");
      $("#q2-icon").addClass("ti-plus").removeClass("ti-minus");
    } else {
      $("#q2-b").slideDown();
      $("#q2-b").addClass("collapsed");
      $("#q2-h-1").addClass("active");
      $("#q2-icon").addClass("ti-minus").removeClass("ti-plus");
    }
  });

  $("#q3-h").click(() => {
    if ($("#q3-b").hasClass("collapsed")) {
      $("#q3-b").slideUp();
      $("#q3-b").removeClass("collapsed");
      $("#q3-h-1").removeClass("active");
      $("#q3-icon").addClass("ti-plus").removeClass("ti-minus");
    } else {
      $("#q3-b").slideDown();
      $("#q3-b").addClass("collapsed");
      $("#q3-h-1").addClass("active");
      $("#q3-icon").addClass("ti-minus").removeClass("ti-plus");
    }
  });

  $("#q4-h").click(() => {
    if ($("#q4-b").hasClass("collapsed")) {
      $("#q4-b").slideUp();
      $("#q4-b").removeClass("collapsed");
      $("#q4-h-1").removeClass("active");
      $("#q4-icon").addClass("ti-plus").removeClass("ti-minus");
    } else {
      $("#q4-b").slideDown();
      $("#q4-b").addClass("collapsed");
      $("#q4-h-1").addClass("active");
      $("#q4-icon").addClass("ti-minus").removeClass("ti-plus");
    }
  });

  $("#q5-h").click(() => {
    if ($("#q5-b").hasClass("collapsed")) {
      $("#q5-b").slideUp();
      $("#q5-b").removeClass("collapsed");
      $("#q5-h-1").removeClass("active");
      $("#q5-icon").addClass("ti-plus").removeClass("ti-minus");
    } else {
      $("#q5-b").slideDown();
      $("#q5-b").addClass("collapsed");
      $("#q5-h-1").addClass("active");
      $("#q5-icon").addClass("ti-minus").removeClass("ti-plus");
    }
  });
  $("#q6-h").click(() => {
    if ($("#q6-b").hasClass("collapsed")) {
      $("#q6-b").slideUp();
      $("#q6-b").removeClass("collapsed");
      $("#q6-h-1").removeClass("active");
      $("#q6-icon").addClass("ti-plus").removeClass("ti-minus");
    } else {
      $("#q6-b").slideDown();
      $("#q6-b").addClass("collapsed");
      $("#q6-h-1").addClass("active");
      $("#q6-icon").addClass("ti-minus").removeClass("ti-plus");
    }
  });
  $("#q7-h").click(() => {
    if ($("#q7-b").hasClass("collapsed")) {
      $("#q7-b").slideUp();
      $("#q7-b").removeClass("collapsed");
      $("#q7-h-1").removeClass("active");
      $("#q7-icon").addClass("ti-plus").removeClass("ti-minus");
    } else {
      $("#q7-b").slideDown();
      $("#q7-b").addClass("collapsed");
      $("#q7-h-1").addClass("active");
      $("#q7-icon").addClass("ti-minus").removeClass("ti-plus");
    }
  });
  $("#q8-h").click(() => {
    if ($("#q8-b").hasClass("collapsed")) {
      $("#q8-b").slideUp();
      $("#q8-b").removeClass("collapsed");
      $("#q8-h-1").removeClass("active");
      $("#q8-icon").addClass("ti-plus").removeClass("ti-minus");
    } else {
      $("#q8-b").slideDown();
      $("#q8-b").addClass("collapsed");
      $("#q8-h-1").addClass("active");
      $("#q8-icon").addClass("ti-minus").removeClass("ti-plus");
    }
  });
  $("#q9-h").click(() => {
    if ($("#q9-b").hasClass("collapsed")) {
      $("#q9-b").slideUp();
      $("#q9-b").removeClass("collapsed");
      $("#q9-h-1").removeClass("active");
      $("#q9-icon").addClass("ti-plus").removeClass("ti-minus");
    } else {
      $("#q9-b").slideDown();
      $("#q9-h-1").addClass("active");
      $("#q9-b").addClass("collapsed");
      $("#q9-icon").addClass("ti-minus").removeClass("ti-plus");
    }
  });

  $("#q10-h").click(() => {
    if ($("#q10-b").hasClass("collapsed")) {
      $("#q10-b").slideUp();
      $("#q10-b").removeClass("collapsed");
      $("#q10-h-1").removeClass("active");
      $("#q10-icon").addClass("ti-plus").removeClass("ti-minus");
    } else {
      $("#q10-b").slideDown();
      $("#q10-b").addClass("collapsed");
      $("#q10-h-1").addClass("active");
      $("#q10-icon").addClass("ti-minus").removeClass("ti-plus");
    }
  });

  $("#q11-h").click(() => {
    if ($("#q11-b").hasClass("collapsed")) {
      $("#q11-b").slideUp();
      $("#q11-b").removeClass("collapsed");
      $("#q11-h-1").removeClass("active");
      $("#q11-icon").addClass("ti-plus").removeClass("ti-minus");
    } else {
      $("#q11-b").slideDown();
      $("#q11-b").addClass("collapsed");
      $("#q11-h-1").addClass("active");
      $("#q11-icon").addClass("ti-minus").removeClass("ti-plus");
    }
  });

  $("#q12-h").click(() => {
    if ($("#q12-b").hasClass("collapsed")) {
      $("#q12-b").slideUp();
      $("#q12-b").removeClass("collapsed");
      $("#q12-h-1").removeClass("active");
      $("#q12-icon").addClass("ti-plus").removeClass("ti-minus");
    } else {
      $("#q12-b").slideDown();
      $("#q12-b").addClass("collapsed");
      $("#q12-h-1").addClass("active");
      $("#q12-icon").addClass("ti-minus").removeClass("ti-plus");
    }
  });

  $("#q13-h").click(() => {
    if ($("#q13-b").hasClass("collapsed")) {
      $("#q13-b").slideUp();
      $("#q13-b").removeClass("collapsed");
      $("#q13-h-1").removeClass("active");
      $("#q13-icon").addClass("ti-plus").removeClass("ti-minus");
    } else {
      $("#q13-b").slideDown();
      $("#q13-b").addClass("collapsed");
      $("#q13-h-1").addClass("active");
      $("#q13-icon").addClass("ti-minus").removeClass("ti-plus");
    }
  });
  $("#q14-h").click(() => {
    if ($("#q14-b").hasClass("collapsed")) {
      $("#q14-b").slideUp();
      $("#q14-b").removeClass("collapsed");
      $("#q14-h-1").removeClass("active");
      $("#q14-icon").addClass("ti-plus").removeClass("ti-minus");
    } else {
      $("#q14-b").slideDown();
      $("#q14-b").addClass("collapsed");
      $("#q14-h-1").addClass("active");
      $("#q14-icon").addClass("ti-minus").removeClass("ti-plus");
    }
  });
  $("#q15-h").click(() => {
    if ($("#q15-b").hasClass("collapsed")) {
      $("#q15-b").slideUp();
      $("#q15-b").removeClass("collapsed");
      $("#q15-h-1").removeClass("active");
      $("#q15-icon").addClass("ti-plus").removeClass("ti-minus");
    } else {
      $("#q15-b").slideDown();
      $("#q15-b").addClass("collapsed");
      $("#q15-h-1").addClass("active");
      $("#q15-icon").addClass("ti-minus").removeClass("ti-plus");
    }
  });
  $("#q16-h").click(() => {
    if ($("#q16-b").hasClass("collapsed")) {
      $("#q16-b").slideUp();
      $("#q16-b").removeClass("collapsed");
      $("#q16-h-1").removeClass("active");
      $("#q16-icon").addClass("ti-plus").removeClass("ti-minus");
    } else {
      $("#q16-b").slideDown();
      $("#q16-b").addClass("collapsed");
      $("#q16-h-1").addClass("active");
      $("#q16-icon").addClass("ti-minus").removeClass("ti-plus");
    }
  });
});

$(function () {
  $("#nav-1").click(() => {
    $("#q-u-1").addClass("active");
    $("#nav-1").addClass("active");
    $("#question-1").removeClass("d-none");
    for (let i = 1; i <= 4; i++) {
      if (i !== 1) {
        $(`#q-u-${i}`).removeClass("active");
        $(`#nav-${i}`).removeClass("active");
        $(`#question-${i}`).addClass("d-none");
      }
    }
  });
  $("#nav-2").click(() => {
    $("#q-u-2").addClass("active");
    $("#nav-2").addClass("active");
    $("#question-2").removeClass("d-none");
    for (let i = 1; i <= 4; i++) {
      if (i !== 2) {
        $(`#q-u-${i}`).removeClass("active");
        $(`#nav-${i}`).removeClass("active");
        $(`#question-${i}`).addClass("d-none");
      }
    }
  });
  $("#nav-3").click(() => {
    $("#q-u-3").addClass("active");
    $("#nav-3").addClass("active");
    $("#question-3").removeClass("d-none");
    for (let i = 1; i <= 4; i++) {
      if (i !== 3) {
        $(`#q-u-${i}`).removeClass("active");
        $(`#nav-${i}`).removeClass("active");
        $(`#question-${i}`).addClass("d-none");
      }
    }
  });
  $("#nav-4").click(() => {
    $("#q-u-4").addClass("active");
    $("#nav-4").addClass("active");
    $("#question-4").removeClass("d-none");
    for (let i = 1; i <= 4; i++) {
      if (i !== 4) {
        $(`#q-u-${i}`).removeClass("active");
        $(`#nav-${i}`).removeClass("active");
        $(`#question-${i}`).addClass("d-none");
      }
    }
  });
});
