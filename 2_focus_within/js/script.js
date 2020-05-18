document.querySelectorAll("input").forEach((element) => {
  element.addEventListener("focus", ({ target }) => {
    target.parentNode.classList.add("js-focus");
  });
  element.addEventListener("focusout", ({ target }) => {
    target.parentNode.classList.remove("js-focus");
  });
});
