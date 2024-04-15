" use strict ";

/* So I implemented ' active ' class to the card with the larger flex. 
Whenever it is clicked it needs to remove the active class from the other then adding it into itself. 
*/

// const panels = document.querySelector(".panel"); There are 4 panels so can' t apply this.
const panels = document.querySelectorAll(".panel"); // Applying to all panels, adding them into a node list. - like an array. -
// - so it can be targetted like an array panels[0] etc. -

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});

/* Hoisting. Function expression, declaration situation. So it can be used in the previous function stored in ' forEach '. */
function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

/* Adding ' removeActiveClass() ' function before adding ' active ' class simply removing all the other ' active ' classes so there won' t be 3- 4 active classes at the same time in the script. */
