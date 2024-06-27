const images = [
  {
    url: "./images/img-1.png",
    alt: "People and laptop",
  },
  {
    url: "./images/img-2.png",
    alt: "Hand and lamp",
  },
  {
    url: "./images/img-3.png",
    alt: "Smart phone",
  },
  {
    url: "./images/img-4.png",
    alt: "Empty meeting-room",
  },
  {
    url: "./images/img-5.png",
    alt: "Lounge zone",
  },
  {
    url: "./images/img-6.png",
    alt: "People in office",
  },
];

const gallery = document.querySelector(".gallery");

const galleryItems = images.map((image) => {
  const li = document.createElement("li");
  li.classList.add("gallery-item");

  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;

  li.appendChild(img);
  return li;
});

gallery.append(...galleryItems);
