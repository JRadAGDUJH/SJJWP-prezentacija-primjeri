let x = 5;
console.log("x=", x);

try {
  let rezultat = 10 / 0;
  nepostojecaFunkcija();
} catch (greska) {
  console.error("Uhvaćena greška:", greska.message);
}

let podatak = "tekst";
if (typeof podatak === "string") {
  console.log(podatak.toUpperCase());
} else {
  console.error("Očekivan je string.");
}