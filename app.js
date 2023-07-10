const Numbers = document.querySelectorAll(".Numbers");

Numbers.forEach((NumbersCounter) => {
  NumbersCounter.innerHTML = "0";

  const updateNumbersCounter = () => {
    const target = +NumbersCounter.getAttribute("data-target");
    const c = +NumbersCounter.innerText;

    const increment = target / 500;

    if (c < target) {
      NumbersCounter.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(updateNumbersCounter, 1);
    } else {
      NumbersCounter.innerText = target;
    }
  };

  updateNumbersCounter();
});

const imageContainer = document.querySelector(".image-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let x = 0;

prevBtn.addEventListener("click", () => {
  x = x + 45;
  rotate();
});

nextBtn.addEventListener("click", () => {
  x = x - 45;
  rotate();
});

function rotate() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

