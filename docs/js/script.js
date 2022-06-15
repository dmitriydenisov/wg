const counters = document.querySelectorAll("[data-counter]");
if (counters) {
  counters.forEach((counter) => {
    counter.addEventListener("click", (e) => {
      const target = e.target;
      e.preventDefault();
      if (target.closest(".counter__button")) {
        if (
          target.closest(".counter").querySelector("input").value == "" &&
          (target.classList.contains("counter__button_minus") ||
            target.classList.contains("counter__button_plus"))
        ) {
          target.closest(".counter").querySelector("input").value = 1;
          e.preventDefault();
        }

        let value = parseInt(
          target.closest(".counter").querySelector("input").value
        );

        if (target.classList.contains("counter__button_plus")) {
          value++;
          e.preventDefault();
        } else {
          --value;
          e.preventDefault();
        }

        if (value <= 1) {
          value = 1;
          target
            .closest(".counter")
            .querySelector(".counter__button_minus")
            .classList.add("disabled");
        } else {
          target
            .closest(".counter")
            .querySelector(".counter__button_minus")
            .classList.remove("disabled");
        }

        target.closest(".counter").querySelector("input").value = value;
      }
    });
  });
}

const counter = document.querySelectorAll("[data-counter]");

if (counters) {
  counters.forEach((counter) => {
    counter.addEventListener("click", (e) => {
      const target = e.target;
      e.preventDefault();
      if (target.closest(".popup-counter__button")) {
        if (
          target.closest(".popup-counter").querySelector("input").value == "" &&
          (target.classList.contains("counter__button_minus") ||
            target.classList.contains("counter__button_plus"))
        ) {
          target.closest(".popup-counter").querySelector("input").value = 1;
          e.preventDefault();
        }

        let value = parseInt(
          target.closest(".popup-counter").querySelector("input").value
        );

        if (target.classList.contains("counter__button_plus")) {
          value++;
          e.preventDefault();
        } else {
          --value;
          e.preventDefault();
        }

        if (value <= 1) {
          value = 1;
          target
            .closest(".popup-counter")
            .querySelector(".counter__button_minus")
            .classList.add("disabled");
        } else {
          target
            .closest(".popup-counter")
            .querySelector(".counter__button_minus")
            .classList.remove("disabled");
        }

        target.closest(".popup-counter").querySelector("input").value = value;
      }
    });
  });
}
const mobilecounter = document.querySelectorAll("[data-counter]");

if (counters) {
  counters.forEach((counter) => {
    counter.addEventListener("click", (e) => {
      const target = e.target;
      e.preventDefault();
      if (target.closest(".menu-counter__button")) {
        if (
          target.closest(".menu-counter").querySelector("input").value == "" &&
          (target.classList.contains("counter__button_minus") ||
            target.classList.contains("counter__button_plus"))
        ) {
          target.closest(".menu-counter").querySelector("input").value = 1;
          e.preventDefault();
        }

        let value = parseInt(
          target.closest(".menu-counter").querySelector("input").value
        );

        if (target.classList.contains("counter__button_plus")) {
          value++;
          e.preventDefault();
        } else {
          --value;
          e.preventDefault();
        }

        if (value <= 1) {
          value = 1;
          target
            .closest(".menu-counter")
            .querySelector(".counter__button_minus")
            .classList.add("disabled");
        } else {
          target
            .closest(".menu-counter")
            .querySelector(".counter__button_minus")
            .classList.remove("disabled");
        }

        target.closest(".menu-counter").querySelector("input").value = value;
      }
    });
  });
}

const swiperRestaurant = new Swiper(".restaurant__slider", {
  slidesPerView: 4,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1264: {
      slidesPerView: 4,
      spaceBetween: 5,
    },

    884: {
      slidesPerView: 3,
    },
    764: {
      slidesPerView: 3.5,
    },
    500: {
      slidesPerView: 3,
    },
    417: {
      slidesPerView: 2.4,
    },
    320: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1.2,
    },
  },
});

const swiperConfectionery = new Swiper(".confectionery__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1264: {
      slidesPerView: 4,
      spaceBetween: 5,
    },

    884: {
      slidesPerView: 3,
    },
    764: {
      slidesPerView: 3.5,
    },
    500: {
      slidesPerView: 3,
    },
    417: {
      slidesPerView: 2.4,
    },
    320: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1.2,
    },
  },
});

var swiperStock = new Swiper(".stock__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1264: {
      slidesPerView: 2.7,
    },

    884: {
      slidesPerView: 2,
    },
    764: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper(".deliverySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1264: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

    884: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    764: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    582: {
      slidesPerView: 2.7,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1.7,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1.3,
    },
  },
});

var swiper = new Swiper(".deliciousSwiper", {
  freeMode: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1437: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },

    1322: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    989: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    908: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    708: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1.5,
    },
  },
});

let unlock = true;
const timeout = 800;

const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".close__popup");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
      curentPopup.classList.add("open");
      curentPopup.addEventListener("click", function (e) {
        if (!e.target.closest(".popup__content")) {
          popupClose(e.target.closest(".popup"));
        }
      });
    }
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper");

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }

  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = "0px";
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener("keydown", function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMibile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
const test = document.querySelector(".menu__list");
const tests1 = test.querySelectorAll(".popup-link");
for (const test1 of tests1) {
  test1.addEventListener("click", function () {
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
  });
}
if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}

const menu = document.querySelector(".more--open");
const menuBtn = document.querySelector(".more");
if (menu) {
  menu.addEventListener("click", function () {
    this.classList.add("open");
  });
  document.addEventListener("click", function (e) {
    const click = e.composedPath().includes(menuBtn);
    if (!click) {
      menu.classList.remove("open");
    }
  });
}

const tabNavItems = document.querySelectorAll(".menu__header-item");
const tabContentItems = document.querySelectorAll(".menu__items");
const cards = document.querySelector(".delivery-content-cards");
if (cards) {
  const tabBtns = cards.querySelectorAll(".delivery-content-card");
  for (const tabBtn of tabBtns) {
    tabBtn.addEventListener("click", activeTab);
  }
}

for (const tabNavItem of tabNavItems) {
  tabNavItem.addEventListener("click", activeTab);
}

function activeTab() {
  for (const tabNavItem of tabNavItems) {
    tabNavItem.classList.remove("menu__header-item--active");
  }
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  }
  this.classList.add("menu__header-item--active");
  let tabName = this.getAttribute("data-variant");
  activeTabContent(tabName);
}

function activeTabContent(tabName) {
  for (const tabContentItem of tabContentItems) {
    tabContentItem.classList.remove("menu__items--active");
    if (tabContentItem.getAttribute("data-variant") === tabName) {
      tabContentItem.classList.add("menu__items--active");
    }
  }
}

const btnMore = document.querySelector(".more");
if (btnMore) {
  btnMore.addEventListener("click", function () {
    document.querySelector(".more--open").classList.toggle("open");
  });
}

const inputText = document.querySelector(".text");
if (inputText) {
  const reg = /[0-9]/g;
  inputText.oninput = function () {
    this.value = this.value.replace(reg, "");
  };
}

const inputNumbers = document.querySelectorAll(".number");

const reg1 = /[A-Za-zА-Яа-я]/g;
for (const inputNumber of inputNumbers) {
  inputNumber.oninput = function () {
    inputNumber.value = inputNumber.value.replace(reg1, "");
  };
}

const btnBuy = document.querySelector(".buy-check-button");
const popupOrder = document.querySelector(".popup-order");
const thanksLink = document.querySelector(".popup-thanks-link");
const thanks = document.querySelector(".popup-thanks");

if (btnBuy) {
  btnBuy.addEventListener("click", function () {
    popupOrder.classList.add("open");
  });
}
if (thanksLink) {
  thanksLink.addEventListener("click", function () {
    thanks.classList.add("open");
  });
}
if (document.querySelector(".datepicker")) {
  var datepicker = new Datepicker("#datepicker");

  var datepickerBanket = new Datepicker("#datepickerBanket");
}
// const timesInput = document.querySelector("#time");
const timesInputs = document.querySelectorAll(".timeInput");
const timesWrapper = document.querySelector(".time");
const times = document.querySelectorAll(".time__item");

for (const timesInput of timesInputs) {
  timesInput.addEventListener("click", function () {
    timesWrapper.classList.add("active");
  });

  for (const time of times) {
    time.addEventListener("click", function () {
      timesInput.value = time.innerText;
      timesWrapper.classList.remove("active");
    });
  }
}
const timeWrapper1 = document.querySelector(".timeInput1");
const timeBrone = document.querySelector(".time1");
if (timeWrapper1) {
  timeWrapper1.addEventListener("click", function () {
    timeBrone.classList.add("active");
  });

  for (const time of times) {
    time.addEventListener("click", function () {
      timeWrapper1.value = time.innerText;
      timeBrone.classList.remove("active");
    });
  }
  document.addEventListener("click", function (e) {
    const click = e.composedPath().includes(timeWrapper1);
    if (!click) {
      timeBrone.classList.remove("active");
    }
  });
}

const timeWrapper2 = document.querySelector(".timeInput2");
const timeBrone2 = document.querySelector(".time2");
if (timeWrapper2) {
  timeWrapper2.addEventListener("click", function () {
    timeBrone2.classList.add("active");
  });
}

for (const time of times) {
  time.addEventListener("click", function () {
    timeWrapper2.value = time.innerText;
    timeBrone2.classList.remove("active");
  });

  document.addEventListener("click", function (e) {
    const click = e.composedPath().includes(timeWrapper2);
    if (!click) {
      timeBrone2.classList.remove("active");
    }
  });
}

const deliveryBtn = document.querySelector(".delivery-btn");
const deliveryPopup = document.querySelector(".delivery-popup");
if (deliveryPopup) {
  deliveryBtn.addEventListener("click", function (event) {
    event.preventDefault();
    deliveryPopup.classList.add("open");
  });
}

const tabOrders = document.querySelectorAll(".btn-items__item");
const tabContentOrders = document.querySelectorAll(".tab-сontent-order");

for (const tabOrder of tabOrders) {
  tabOrder.addEventListener("click", activeTabOrder);
}

function activeTabOrder() {
  for (const tabOrder of tabOrders) {
    tabOrder.classList.remove("active");
  }
  this.classList.add("active");
  let tabName = this.getAttribute("data-variant");
  activeTabContentOrder(tabName);
}

function activeTabContentOrder(tabName) {
  for (const tabContentOrder of tabContentOrders) {
    tabContentOrder.classList.remove("active");
    if (tabContentOrder.getAttribute("data-variant") === tabName) {
      tabContentOrder.classList.add("active");
    }
  }
}

const tabNavItems111 = document.querySelectorAll(".menu__header-item");
const tabContentItems111 = document.querySelectorAll(".menu__items");
const cards111 = document.querySelector(".delivery-content-cards");
if (cards) {
  const tabBtns = cards.querySelectorAll(".delivery-content-card");
  for (const tabBtn of tabBtns) {
    tabBtn.addEventListener("click", activeTab);
  }
}

for (const tabNavItem of tabNavItems) {
  tabNavItem.addEventListener("click", activeTab);
}

function activeTab() {
  for (const tabNavItem of tabNavItems) {
    tabNavItem.classList.remove("menu__header-item--active");
  }
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  }
  this.classList.add("menu__header-item--active");
  let tabName = this.getAttribute("data-variant");
  activeTabContent(tabName);
}

function activeTabContent(tabName) {
  for (const tabContentItem of tabContentItems) {
    tabContentItem.classList.remove("menu__items--active");
    if (tabContentItem.getAttribute("data-variant") === tabName) {
      tabContentItem.classList.add("menu__items--active");
    }
  }
}
