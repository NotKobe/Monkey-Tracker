/* All of this code is used for the panels that are used for our users reviews about how great our app is 
:]
*/

const panels = document.querySelectorAll(".panel"); //In the CSS file panels is the class they are called

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};