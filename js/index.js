const $ = document.querySelector.bind(document);

const btn = $("#btn");

const spaces = { x: 10, y: 10 };
const nameFileOut = "outFile";

btn.addEventListener("click", () => {
  const text = $("#text").value;

  const pdf = new jsPDF();

  pdf.text(text, spaces.x, spaces.y);

  pdf.save(nameFileOut);
});
