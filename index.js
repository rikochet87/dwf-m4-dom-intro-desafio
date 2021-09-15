const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaEL = document.querySelector(".lista");
  const itemsEls = document.querySelectorAll(".lista li");

  for (const el of itemsEls) {
    el.remove();
  }
  for (const item of cosasQueAprendimos) {
    const newLiEL = document.createElement("li");
    newLiEL.textContent = item.tema;
    const laClaseQueLeVoyAAsignarAlLi = item.tema || "item";
    newLiEL.classList.add(laClaseQueLeVoyAAsignarAlLi);
    listaEL.appendChild(newLiEL);
  }
}

main();
