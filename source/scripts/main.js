const pics = [
    "../source/images/img1.jpg",
    "../source/images/img2.jpg",
    "../source/images/img3.jpg",
    "../source/images/img4.jpg",
    "../source/images/img5.jpg",
    "../source/images/img6.jpg",
];

const gallery = document.querySelector(".gallery");
for (let i = 0; i < pics.length; i++) {
  const img = document.createElement("img");
  img.src = pics[i];
  gallery.appendChild(img);
}

const modal = document.createElement("div");
modal.classList.add("modal");
gallery.appendChild(modal);

const modalImg = document.createElement("img");
modal.appendChild(modalImg);

const images = document.querySelectorAll(".gallery img");
images.forEach(img => {
  img.addEventListener("click", e => {
    modalImg.src = e.target.src;
    modal.classList.add("open");
  });
});

modal.addEventListener("click", () => {
    modal.classList.remove("open");
  });