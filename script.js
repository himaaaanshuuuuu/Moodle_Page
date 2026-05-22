function toggleAnnouncements() {
  let box = document.getElementById("announcement-box");

  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}



const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", function() {

    links.forEach(item => {
      item.classList.remove("active");
    });

    this.classList.add("active");
  });
});