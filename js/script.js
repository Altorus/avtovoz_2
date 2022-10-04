(function ($) {
  var mainwindow = $(window);

  // rev-slider
  if (jQuery("#slider1").length) {
    jQuery("#slider1").revolution({
      sliderType: "standard",
      sliderLayout: "fullwidth",
      delay: 5000,
      navigation: {
        keyboardNavigation: "on",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        onHoverStop: "on",
        arrows: {
          style: "zeus",
          tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
          enable: true,
          rtl: false,
          hide_onmobile: false,
          hide_onleave: false,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          hide_under: 0,
          hide_over: 9999,
          tmp: "",
        },
      },
      parallax: {
        type: "scroll",
        origo: "slidercenter",
        speed: 1000,
        levels: [
          5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55,
        ],
        type: "scroll",
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1170, 1024, 778, 480],
      gridheight: [850, 768, 960, 720],
    });
  }
  // rev-slider
  if (jQuery("#slider2").length) {
    jQuery("#slider2").revolution({
      sliderType: "standard",
      sliderLayout: "fullwidth",
      delay: 5000,
      navigation: {
        keyboardNavigation: "on",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        onHoverStop: "on",
        arrows: {
          style: "zeus",
          tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
          enable: true,
          rtl: false,
          hide_onmobile: false,
          hide_onleave: false,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          hide_under: 0,
          hide_over: 9999,
          tmp: "",
        },
      },
      parallax: {
        type: "scroll",
        origo: "slidercenter",
        speed: 1000,
        levels: [
          5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55,
        ],
        type: "scroll",
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1170, 1024, 778, 480],
      gridheight: [650, 768, 960, 720],
    });
  }
  // rev-slider
  if (jQuery("#slider3").length) {
    jQuery("#slider3").revolution({
      sliderType: "standard",
      sliderLayout: "fullwidth",
      delay: 5000,
      navigation: {
        keyboardNavigation: "on",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        onHoverStop: "on",
        arrows: {
          style: "zeus",
          tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
          enable: true,
          rtl: false,
          hide_onmobile: false,
          hide_onleave: false,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          hide_under: 0,
          hide_over: 9999,
          tmp: "",
        },
      },
      parallax: {
        type: "scroll",
        origo: "slidercenter",
        speed: 1000,
        levels: [
          5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55,
        ],
        type: "scroll",
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1170, 1024, 778, 480],
      gridheight: [800, 768, 960, 720],
    });
  }
  //Hide Loading Box (Preloader)
  function stylePreloader() {
    if ($(".preloader").length) {
      $(".preloader").delay(200).fadeOut(500);
    }
  }

  $(function () {
    var $grid = $(".list-project").isotope({
      itemSelector: ".project",
      //layoutMode: 'fitRows'
      //filter: '.project_category-snow-removal',
      percentPosition: true,
      masonry: {
        columnWidth: ".project",
      },
    });
    // filter items on button click
    $(".filter").on("click", "li", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
      $(this).addClass("active");
    });
  });

  //Accordion Box
  if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function () {
      var outerBox = $(this).parents(".accordion-box");
      var target = $(this).parents(".accordion");

      if ($(this).hasClass("active") !== true) {
        $(".accordion .acc-btn").removeClass("active");
      }

      if ($(this).next(".acc-content").is(":visible")) {
        return false;
      } else {
        $(this).addClass("active");
        $(outerBox).children(".accordion").removeClass("active-block");
        $(outerBox)
          .children(".accordion")
          .children(".acc-content")
          .slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc-content").slideDown(300);
      }
    });
  }

  if ($("#accordion > .panel").length) {
    $("#accordion > .panel").on("show.bs.collapse", function (e) {
      var heading = $(this).find(".panel-heading");
      heading.addClass("active-panel");
    });
    $("#accordion > .panel").on("hidden.bs.collapse", function (e) {
      var heading = $(this).find(".panel-heading");
      heading.removeClass("active-panel");
    });
  }

  //--service-list--
  if ($(".slide-partener").length) {
    $(".slide-partener").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 4000,
      items: 1,
      dots: false,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 2,
          margin: 0,
        },
        600: {
          items: 2,
        },
        800: {
          items: 4,
        },
        1024: {
          items: 5,
        },
        1200: {
          items: 5,
        },
      },
    });
  }

  //--letest-project--
  if ($(".single-slide").length) {
    $(".single-slide").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoplay: 4000,
      items: 1,
      dots: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1024: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }

  //--partener--
  if ($(".news-slide").length) {
    $(".news-slide").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      smartSpeed: 500,
      autoplay: 4000,
      items: 1,
      dots: false,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  //--team--
  if ($(".slideteam").length) {
    $(".slideteam").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoplay: 4000,
      items: 1,
      dots: false,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 3,
        },
        1024: {
          items: 4,
        },
        1200: {
          items: 4,
        },
      },
    });
  }
  //--team--
  if ($(".slidetest4").length) {
    $(".slidetest4").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      smartSpeed: 500,
      autoplay: 4000,
      items: 1,
      dots: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 2,
        },
        1200: {
          items: 2,
        },
      },
    });
  }

  //--team--
  if ($(".partener_slide2").length) {
    $(".partener_slide2").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      smartSpeed: 500,
      autoplay: 4000,
      items: 1,
      dots: false,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 2,
        },
        1200: {
          items: 2,
        },
      },
    });
  }

  //LightBox / Fancybox
  if ($(".fancybox").length) {
    $(".fancybox").fancybox({
      openEffect: "fade",
      closeEffect: "fade",
      helpers: {
        media: {},
      },
    });
  }

  // FAQs
  if ($(".fp-faq").length) {
    $(".fp-faq").on("click", "h2", function () {
      var $faq = $(this).closest(".fp-faq");

      $faq.find(".toggle-content").slideToggle(500, function () {
        $faq.toggleClass("active");
      });
    });
  }
  if ($(".fp-accordion").length) {
    $(".fp-accordion").on("click", "h2, .icons", function () {
      var $faq = $(this).closest(".fp-accordion");

      $faq.find(".toggle-content").slideToggle(500, function () {
        $faq.toggleClass("active");
      });
    });
  }

  //Update header style + Scroll to Top
  function scrolltotop() {
    if ($(".scroll-to-top").length) {
      var windowpos = mainwindow.scrollTop();
      if (windowpos >= 250) {
        $(".scroll-to-top").fadeIn(300);
      } else {
        $(".scroll-to-top").fadeOut(300);
      }
    }
  }

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }

  // slider-range
  if ($("#slider-range").length) {
    $(function () {
      $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
          $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        },
      });
      $("#amount").val(
        "$" +
          $("#slider-range").slider("values", 0) +
          " - $" +
          $("#slider-range").slider("values", 1)
      );
    });
  }

  //Input Quantity Up & Down
  function quantity_changer() {
    $("#quantity-holder")
      .on("click", ".quantity-plus", function () {
        var $holder = $(this).parents(".quantity-holder");
        var $target = $holder.find("input.quantity-input");
        var $quantity = parseInt($target.val(), 10);
        if ($.isNumeric($quantity) && $quantity > 0) {
          $quantity = $quantity + 1;
          $target.val($quantity);
        } else {
          $target.val($quantity);
        }
      })
      .on("click", ".quantity-minus", function () {
        var $holder = $(this).parents(".quantity-holder");
        var $target = $holder.find("input.quantity-input");
        var $quantity = parseInt($target.val(), 10);
        if ($.isNumeric($quantity) && $quantity >= 2) {
          $quantity = $quantity - 1;
          $target.val($quantity);
        } else {
          $target.val(1);
        }
      });
  }

  //counter number changer
  function counter_number() {
    var timer = $(".timer");
    if (timer.length) {
      timer.appear(function () {
        timer.countTo();
      });
    }
  }

  /* ==========================================================================
       Contact Form Validation and Ajax
       ========================================================================== */

  $("#contact-form").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        minlength: 5,
        email: true,
      },
      phone: {
        required: true,
      },
      message: {
        required: true,
        minlength: 10,
      },
    },
    messages: {
      name: "Please specify your name",
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: "Please specify your phone number",
      message: {
        required: "Please specify your message",
        minlength: jQuery.validator.format("At least {0} characters required!"),
      },
    },
    submitHandler: function (e) {
      var $t = $(e);
      $.ajax({
        type: "POST",
        url: $t.attr("action"),
        data: $t.serialize(),
        beforeSend: function () {
          $("#loading").show();
        },
        complete: function () {
          $("#loading").hide();
        },
        success: function (res) {
          $(".contact-form-message")
            .show()
            .html(res)
            .delay(10000)
            .fadeOut("slow");
          $("input[name='name']").val("");
          $("input[name='email']").val("");
          $("input[name='phone']").val("");
          $("textarea[name='message']").val("");
        },
      });
    },
  });

  /* ==========================================================================
       When document is ready, do
       ========================================================================== */

  $(document).on("ready", function () {
    counter_number();
    quantity_changer();
  });

  /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

  mainwindow.on("scroll", function () {
    scrolltotop();
  });

  /* ==========================================================================
       When document is loading, do
       ========================================================================== */

  mainwindow.on("load", function () {
    stylePreloader();
  });

  /* ==========================================================================
       When Window is resizing, do
       ========================================================================== */

  mainwindow.on("resize", function () {});

  let heightHeader = $("#masthead").height() + 60;
  // fixed_offset = $('.main-bar').height() + 10;
  function scrollBlock() {
    $("html, body").animate(
      { scrollTop: $(".form-order-section").offset().top - heightHeader },
      1000
    );

    console.log($(".form-order[data-tab=2]").offset().top - heightHeader);
  }

  // Tab-main
  $("#order-form ul li").click(function () {
    var id = $(this).attr("data-tab"),
      content = $('.form-order[data-tab="' + id + '"]');

    $("#order-form ul li.active").removeClass("active");
    $(this).addClass("active");

    $(".form-order.active").removeClass("active");
    content.addClass("active");
    validateInputs();
  });

  $('input[name="auto"]').on("click", function () {
    let content = $('.form-order[data-tab="2"]');

    $(".select-car label").addClass("hidden");
    $($(this).parent()).removeClass("hidden");
    $(".select-car span").addClass("action");
    $("#order-form ul li:nth-of-type(1)").addClass("done");

    $("#order-form ul li.active").removeClass("active");
    $('#order-form ul li[data-tab="2"]').addClass("active");

    $(".select-car").addClass("select");
    $(".form-order.active").removeClass("active");
    content.addClass("active");
    $("#order-form ul li:nth-of-type(1)").removeClass("warning");
    scrollBlock();
  });

  $(".select-car span").click(function () {
    $(this).toggleClass("action");
    $('input[name="auto"]').prop("checked", false);

    $(".select-car label").toggleClass("hidden");
    $(".select-car").removeClass("select");
  });

  $(".next").click(() => {
    let content = $('.form-order[data-tab="3"]');

    $("#order-form ul li.active").removeClass("active");
    $('#order-form ul li[data-tab="3"]').addClass("active");

    $(".form-order.active").removeClass("active");
    content.addClass("active");
    scrollBlock();
  });

  $(".skip").click(() => {
    let content = $('.form-order[data-tab="3"]');

    $("#order-form ul li.active").addClass("done");
    $("#order-form ul li.active").removeClass("active");
    $('#order-form ul li[data-tab="3"]').addClass("active");

    $(".form-order.active").removeClass("active");
    content.addClass("active");
    scrollBlock();
  });

  $(".done-order").click(() => {
    let from = $(".from").val();
    let to = $(".to").val();
    let dateShipping = $("#datepicker").val();
    let content = $('.form-order[data-tab="4"]');

    $("#order-form ul li.active").removeClass("active");
    $("#order-form ul li:nth-of-type(3)").addClass("done");
    $('#order-form ul li[data-tab="4"]').addClass("active");

    $(".form-order.active").removeClass("active");
    content.addClass("active");
    readyOrder();
    scrollBlock();
  });

  function readyOrder() {
    let typeAuto = $('input[name="auto"]:checked').val();
    let fromCity = $(".from").val();
    let toCity = $(".to").val();
    let dateShipping = $("#datepicker").val();
    if (typeAuto !== undefined && fromCity != '' && toCity != '' && dateShipping != '') {
      $("#result").html(
        `Вы хотите доставить ${typeAuto} из ${fromCity} в ${toCity}. Желаемая дата отправки-${dateShipping}`
      );
    } else {
      $("#result").html("Вы не заполнили важные поля");
    }
  }

  $(".ready-order").click(() => {
    let name = $(".name").val(),
      phone = $(".phone").val();
    fromCity = $(".from").val();
    toCity = $(".to").val();
    dateShipping = $("#datepicker").val();
    if (name == "") {
      $(".name").addClass("warning-inputs");
    } else {
      $(".name").removeClass("warning-inputs");
    }
    if (phone == "") {
      $(".phone").addClass("warning-inputs");
    } else {
      $(".phone").removeClass("warning-inputs");
    }
    if (fromCity == "") {
      $(".from").addClass("warning-inputs");
      $("#order-form ul li:nth-of-type(3)").addClass("warning");
    } else {
      $(".from").removeClass("warning-inputs");
      $("#order-form ul li:nth-of-type(3)").remoceClass("warning");
    }
    if (toCity == "") {
      $(".to").addClass("warning-inputs");
      $("#order-form ul li:nth-of-type(3)").addClass("warning");
    } else {
      $(".from").removeClass("warning-inputs");
      $("#order-form ul li:nth-of-type(3)").remoceClass("warning");
    }
    if (dateShipping == "") {
      $("#datepicker").addClass("warning-inputs");
      $("#order-form ul li:nth-of-type(3)").addClass("warning");
    } else {
      $(".from").removeClass("warning-inputs");
      $("#order-form ul li:nth-of-type(3)").remoceClass("warning");
    }
  });

  $(".name").click(function () {
    $(".name").removeClass("warning-inputs");
  });
  $(".phone").click(function () {
    $(".phone").removeClass("warning-inputs");
  });
  $(".from").click(function () {
    $(".from").removeClass("warning-inputs");
  });
  $(".to").click(function () {
    $(".to").removeClass("warning-inputs")
  });
  $(".datepicker").click(function () {
    $(".datepicker").removeClass("warning-inputs")
  });

  function validateInputs(item) {
    let typeAuto = $('input[name="auto"]:checked').val();
    if (typeAuto === undefined) {
      $("#order-form ul li:nth-of-type(1)").addClass("warning");
    }
  }

  $("#myModal").on("shown.bs.modal", function () {
    $("#myInput").trigger("focus");
  });

  // mask for phone input
  window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll("#phone"), function (input) {
      var keyCode;

      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
        i = new_value.indexOf("_");
        if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i);
        }
        var reg = matrix
          .substr(0, this.value.length)
          .replace(/_+/g, function (a) {
            return "\\d{1," + a.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
          !reg.test(this.value) ||
          this.value.length < 5 ||
          (keyCode > 47 && keyCode < 58)
        )
          this.value = new_value;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, true);
      input.addEventListener("keydown", mask, false);
    });
  });
})(window.jQuery);
