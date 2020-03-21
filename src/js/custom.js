//tabs
let tabs = function () {
  const modifiers = {
    buttonActive: "tabs__button--active",
    contentActive: "tabs__content--active"
  };

  const attributes = {
    tabIndex: "data-tab-index"
  };

  const elsButton = document.querySelectorAll(".js-tabs__button");
  const elsContent = document.querySelectorAll(".js-tabs__content");

  const changeTab = index => {
    elsButton.forEach(el => {
      el.classList.remove(modifiers.buttonActive);
      if (el.getAttribute(attributes.tabIndex) === index) {
        el.classList.add(modifiers.buttonActive);
      }
    });

    elsContent.forEach(el => {
      el.classList.remove(modifiers.contentActive);
      if (el.getAttribute(attributes.tabIndex) === index) {
        el.classList.add(modifiers.contentActive);
      }
    });
  };

  elsButton.forEach(el => {
    el.addEventListener("click", e => {
      const tabIndex = el.getAttribute(attributes.tabIndex);
      console.log(this);
      e.preventDefault();
      changeTab(tabIndex);
    });
  });
};
tabs();

//ChangeTextButtonMore/Less
let showMoreText = function () {
  const tabsList = document.querySelectorAll('.tabs-list');
  tabsList.forEach(el => {
    if (el.firstElementChild.clientHeight > 180) {
      el.nextElementSibling.style.display = 'block';
    }
  });
};
showMoreText();

//Show/hidden Pros&Cons
(function () {
  let items = document.querySelector('.cards');
  items.addEventListener('click', func);

  function func(el) {
    el.preventDefault();
    let target = el.target;

    if (target.classList.contains('tabs__less')) {
      target.previousElementSibling.classList.add('show-more');
      target.classList.add('tabs__more');
      target.classList.remove('tabs__less');
      target.textContent = 'Show less';

    } else if (target.classList.contains('tabs__more')) {

      target.previousElementSibling.classList.remove('show-more');
      target.classList.add('tabs__less');
      target.classList.remove('tabs__more');
      target.textContent = 'Show more';
    }
  }
  
})();
  