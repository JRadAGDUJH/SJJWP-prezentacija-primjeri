function zbroji(a, b) {
  return a + b;
}
console.log(zbroji(2, 3));

const pomnozi = (a, b) => a * b;
console.log(pomnozi(4, 5));

class Osoba {
  constructor(ime, godine) {
    this.ime = ime;
    this.godine = godine;
  }

  predstaviSe() {
    return "Ja sam ${this.ime} i imam ${this.godine} godina.";
  }
}

const ana = new Osoba("Ana", 25);
console.log(ana.predstaviSe());