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

dropOne.addEventListener("mouseover",()=>{
    dropMenu.classList.toggle("reveal")
})

dropTwo.addEventListener("click",()=>{
    dropMenuTwo.classList.toggle("unblock")
    
})



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

let gallery = "";
for (let images of galleries) {
  gallery += `
    <img src="${images.img}" alt="">
          `;
}
document.getElementsByClassName("image-select")[0].innerHTML = gallery;


const filteredFlower = galleries.filter(
  (gallery) => gallery.category === "flower"
);

const filteredPlanet = galleries.filter(
  (gallery) => gallery.category === "planet"
);

const filteredAnimal = galleries.filter(
  (gallery) => gallery.category === "animal"
);

// ALL IMAGES
all.addEventListener("click", ()=>{
    for (let images of galleries) {
        gallery += `
          <img src="${images.img}" alt="">
                `;
      }
      document.getElementsByClassName("image-select")[0].innerHTML = gallery;
})

// FILTERED ANIMAL
animal.addEventListener("click", (e) => {
  let gallery = "";
  for (let images of filteredAnimal) {
    console.log(images);
    gallery += `
    <img src="${images.img}" alt="">
          `;
  }
  document.getElementsByClassName("image-select")[0].innerHTML = gallery;
});

// FILTERED FLOWER
flower.addEventListener("click", (e) => {
  let gallery = "";
  for (let images of filteredFlower) {
    gallery += `
    <img src="${images.img}" alt="">
          `;
  }
  document.getElementsByClassName("image-select")[0].innerHTML = gallery;
});

// FILTERED PLANET
planet.addEventListener("click", (e) => {
  let gallery = "";
  for (let images of filteredPlanet) {
    gallery += `
        <img src="${images.img}" alt="">
              `;
  }
  document.getElementsByClassName("image-select")[0].innerHTML = gallery;
});
