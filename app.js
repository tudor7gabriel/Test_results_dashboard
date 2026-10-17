const input = document.getElementById("fisier");
const mesaj = document.getElementById("mesaj");

input.addEventListener("change", () => {
  const fisier = input.files[0];
  if (!fisier) return;

  Papa.parse(fisier, {
    header: true,
    skipEmptyLines: true,
    complete: (rezultat) => {
      console.log(rezultat.data);
      mesaj.textContent = "Am citit " + rezultat.data.length + " rânduri.";
    }
  });
});