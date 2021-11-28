document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";

let home = document.querySelectorAll("a");

home.forEach((element) => {
  element.style.fontSize = "40px";
});

let backColor = (color) => {
  document.body.style.backgroundImage = "url(" + color + ")";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover"
  document.body.style.backgroundPosition = "center"
};

home[0].addEventListener("click", () => {
  home[1].style.fontSize = "40px";
  home[2].style.fontSize = "40px";

  backColor(
    "https://images.pexels.com/photos/10155843/pexels-photo-10155843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  );
  home[0].style.fontSize = "50px";
  

});

home[1].addEventListener("click", () => {
  home[2].style.fontSize = "40px";
  home[0].style.fontSize = "40px";
  backColor(
    "https://images.pexels.com/photos/10324751/pexels-photo-10324751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  );
  home[1].style.fontSize = "50px";
});

home[2].addEventListener("click", () => {
  home[0].style.fontSize = "40px";
  home[1].style.fontSize = "40px";
  backColor(
    "https://images.pexels.com/photos/5633616/pexels-photo-5633616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  );
  home[2].style.fontSize = "50px";
});

function getContent(fragmentId, callback) {
  let pages = {
    home: "This is the Home page. Welcome to my site.",
    about: "This page will describe what my site is about",
    contact: "Contact me on this page if you have any questions",
  };

  callback(pages[fragmentId]);
}

function loadContent() {
  let contentDiv = document.getElementById("app");
  fragmentId = location.hash.substr(1);

  getContent(fragmentId, function (content) {
    contentDiv.innerHTML = content;
    contentDiv.style.marginTop = "50px";
    contentDiv.style.fontSize = "32px";
    contentDiv.style.color = "pink";
  });
}

if (!location.hash) {
  location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent);
