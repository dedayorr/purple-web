const navlist = document.getElementsByClassName("ul-list")[0];
const hamburger = document.getElementsByClassName("hamburger")[0];
const all = document.getElementById("all");
const animal = document.getElementById("animals");
const flower = document.getElementById("flowers");
const planet = document.getElementById("planets");
const dropOne = document.getElementById("drop-one");
const dropTwo = document.getElementById("drop-two");
const dropMenu = document.getElementsByClassName("dropMenu")[0];
const dropMenuTwo = document.getElementsByClassName("dropMenuTwo")[0];

hamburger.addEventListener("click", () => {
  navlist.classList.toggle("show");
});

dropOne.addEventListener("mouseover", () => {
  dropMenu.classList.toggle("reveal");
});

dropTwo.addEventListener("click", () => {
  dropMenuTwo.classList.toggle("unblock");
});

const galleries = [
  {
    category: "flower",
    img: "/images/flower 1.jpg",
  },
  {
    category: "flower",
    img: "/images/flower 2.jpg",
  },
  {
    category: "animal",
    img: "/images/animal 1.jpg",
  },
  {
    category: "animal",
    img: "/images/animal 2.jpg",
  },
  {
    category: "planet",
    img: "/images/planet 1jpg.jpg",
  },
  {
    category: "planet",
    img: "/images/planet 2.jpg",
  },
];

let gallery = galleries;
let galleryBox = document.getElementsByClassName("image-select")[0];
galleryBox.innerHTML = ``;
gallery.forEach((element) => {
  const img = document.createElement("img");
  img.src = element.img;
  img.alt = element.category;

  galleryBox.appendChild(img);
});
// ALL ANIMAL
all.addEventListener("click", (e) => {
  gallery = galleries;
  galleryBox.innerHTML = ``;
  gallery.forEach((element) => {
    const img = document.createElement("img");
    img.src = element.img;
    img.alt = element.category;
    console.log(gallery, "gallerrys");
    galleryBox.appendChild(img);
  });
});

// FILTERED ANIMAL
animal.addEventListener("click", (e) => {
  const filteredAnimal = galleries.filter(
    (gallery) => gallery.category === "animal"
  );
  gallery = filteredAnimal;

  galleryBox.innerHTML = ``;
  gallery.forEach((element) => {
    const img = document.createElement("img");
    img.src = element.img;
    img.alt = element.category;
    console.log(gallery, "gallerrys");

    galleryBox.appendChild(img);
  });
});

// FILTERED FLOWER
flower.addEventListener("click", (e) => {
  const filteredFlower = galleries.filter(
    (gallery) => gallery.category === "flower"
  );
  gallery = filteredFlower;

  galleryBox.innerHTML = ``;
  gallery.forEach((element) => {
    const img = document.createElement("img");
    img.src = element.img;
    img.alt = element.category;

    galleryBox.appendChild(img);
  });
});

// FILTERED PLANET
planet.addEventListener("click", (e) => {
  const filteredPlanet = galleries.filter(
    (gallery) => gallery.category === "planet"
  );
  gallery = filteredPlanet;

  galleryBox.innerHTML = ``;
  gallery.forEach((element) => {
    const img = document.createElement("img");
    img.src = element.img;
    img.alt = element.category;

    galleryBox.appendChild(img);
  });
});
