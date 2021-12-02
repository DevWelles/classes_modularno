export default class Osoba {
  constructor(ime="",prezime="") {
    this.ime = ime;
    this.prezime = prezime;
  }
  izvjesce (){
    return `Ja sam ${this.ime} ${this.prezime}. Volim sve što vole mladi`
  };
}


