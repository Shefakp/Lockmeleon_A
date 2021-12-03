

// -----------------  Табы  --------------------
$(".nav-wrapp__link").hover(function (e) {
  e.preventDefault();
  $(".news-body-tab").removeClass("news-body-tab--active");
  $(".nav-wrapp__link").removeClass("tab-active");

  $($(this).attr("href")).addClass("news-body-tab--active");
  $(this).addClass("tab-active");
});

// -----------------  Селект  --------------------

// переменная не переназначается, поэтому используем const
// используем querySelectorAll, чтобы собрать массив со всеми сущностями .select
const select = document.querySelectorAll(".select");

// если массив не пустой, пробегаемся в цикле по каждой найденой сущности
if (select.length) {
  select.forEach((item) => {
    // достаем из текущей сущности .select__current
    const selectCurrent = item.querySelector(".select__current");

    item.addEventListener("click", (event) => {
      const el = event.target.dataset.choice;
      const text = event.target.innerText;

      // Проверяем является ли это choosen и не выбрано ли его значение уже
      if (el === "choosen" && selectCurrent.innerText !== text) {
        selectCurrent.innerText = text;
      }

      item.classList.toggle("is-active");
    });
  });
}


// -----------------  Гамбургер  --------------------
$(".hamburger").click(function (event) {
  $(".hamburger").toggleClass("hamburger__active"),
    $(".mobile__menu ").toggleClass("mobile__menu__active");
});

// ----------------- Аккордион --------------------
/**
 * Классы для аккордиона
 */
const accordeon = {
  CLASS: 'accordion',
  CLASS_ACTIVE: 'accordion__active',
}

/**
 * acc - неизменная переменная для работы с аккордионом
 */
const acc = document.querySelectorAll(`.${accordeon.CLASS}`);
let openedAccordeon = null;

/**
 * использует nextElementSibling для открытия или закрытия аккордиона
 */
function closeAccordeon(acc) {
  acc.nextElementSibling.style.maxHeight = 0;
  acc.classList.remove(accordeon.CLASS_ACTIVE);
}


function openAccordeon(acc) {
  acc.nextElementSibling.style.maxHeight = `${acc.nextElementSibling.scrollHeight}px`;
  acc.classList.add(accordeon.CLASS_ACTIVE);
}

/**
 * Проверка на открытие аккордиона !nextElementSibling!
 */
function isAccordeonOpen(acc) {
  acc.nextElementSibling && !acc.nextElementSibling.style.maxHeight
}

/**
 * Итерация, реализация переключения открытого аккордиона
 *
 */
for (const accordeon of acc) {
  accordeon.addEventListener("click", function () {
    const currentAccordeon = this;

    openedAccordeon && closeAccordeon(openedAccordeon);

    if (isAccordeonOpen(currentAccordeon)) {
      closeAccordeon(currentAccordeon);
    } else {
      openAccordeon(currentAccordeon);
      openedAccordeon = currentAccordeon;
    }
  });
};

// --------------

const accordionList = document.getElementsByClassName("accordion--multiple");
const classNameActive = "accordion--active";

for (const accordion of accordionList) {
  accordion.addEventListener("click", function () {
    this.classList.toggle(classNameActive);
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$(document).ready(function () {
  var button = $('.btn-up');
  $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
          button.fadeIn();
      } else {
          button.fadeOut();
      }

  });
  button.on('click', function () {
      $('body, html').animate({
          scrollTop: 0
      }, 800);
      return false;
  });
});

jQuery(function ($) {
  $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
          $('.header').addClass('header-fixed');
      } else {
          $('.header').removeClass('header-fixed');
      }
  });
});


$(document).ready(function() {
  $(".block10-button").click(function(){
  $(".block10").fadeOut();
  $(".block10-double").fadeIn();
  });
});

$(document).ready(function() {
  $(".block10-double-b").click(function(){
  $(".block10-double").fadeOut();
  $(".block10").fadeIn();
  });
});











