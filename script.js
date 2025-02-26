function loadSection(sectionId, filePath) {
    fetch(filePath)
        .then(response => response.text()) 
        .then(data => {
            document.getElementById(sectionId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

document.addEventListener("DOMContentLoaded", function () {
    loadSection("header", "header.html");
    loadSection("header2", "header2.html");
    loadSection("cover", "cover.html");
    loadSection("blue", "blue.html");
    loadSection("Welcome", "Welcome.html");
    loadSection("Our-Departments", "Our-Departments.html");
    loadSection("quote", "quote.html");
    loadSection("Leading-edge", "Leading-edge.html");
    loadSection("Expert-Doctors", "Expert-Doctors.html");
    loadSection("above-footer", "above-footer.html");
    loadSection("footer", "footer.html");
});

document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector(".c-header");
  let headerOffset = header.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.scrollY > headerOffset) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
});