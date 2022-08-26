const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActivrClasses();
    panel.classList.add("active");
  });
});

function removeActivrClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
