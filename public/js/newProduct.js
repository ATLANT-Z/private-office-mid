window.onload = function () {
  const arrNav = function (event) {
    const btn = event.currentTarget;
    const targetTabId = "#" + btn.getAttribute("data-target-id");
    console.log(targetTabId);
    const navParent = btn.closest("[data-tab-nav]");
    const childrenBtn = navParent.querySelectorAll("[data-target-id]");
    const pages = document.querySelectorAll("[id^=tab]");

    childrenBtn.forEach((el) => {
      el.classList.remove("navActivColor");
    });
    pages.forEach((el) => {
      el.classList.remove("active-js-nav");
    });


    btn.classList.add("navActivColor");
    document.querySelector(targetTabId).classList.add('active-js-nav')
  };

  let btnArr = document.querySelectorAll("[data-target-id]");
  btnArr.forEach((element) => {
    element.onclick = arrNav;
  });
};

// for (let j = 0; j < navJs.children.length; j++) {
//     navJs.children[j].classList.remove('navActivColor');
// }
