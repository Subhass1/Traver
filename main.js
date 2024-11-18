/* const header = document.getElementById("header"); // Get the navbar element

const sticky = header.offsetTop; // Get the offset position of the navbar

window.addEventListener("scroll", () => {
  if (window.scrollY >= sticky) {
    header.classList.add("sticky"); // Use `header` instead of `navbar`
  } else {
    header.classList.remove("sticky"); // Use `header` instead of `navbar`
  }
}); */


const header = document.getElementById("header");
const placeholder = document.createElement("div");
placeholder.style.height = `${header.offsetHeight}px`;
placeholder.style.display = "none"; // Initially hidden
header.parentNode.insertBefore(placeholder, header);

window.addEventListener("scroll", () => {
  if (window.scrollY >= header.offsetTop) {
    header.classList.add("sticky");
    placeholder.style.display = "block";
  } else {
    header.classList.remove("sticky");
    placeholder.style.display = "none";
  }
});

