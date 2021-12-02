export default class Kolegij{
  constructor(imeKolegija, profesor){
    this.imeKolegija = imeKolegija;
    this.profesor = profesor;
    this.listaStudenata = [];
    this.listaStudenataPolozili = [];
  };
  upisiStudenta(student) {
    this.listaStudenata.push(student);
  };
  polozio(student) {
    this.listaStudenataPolozili.push(student);
  };
  izvjesce() {
    return `Ime ovog kolegija je ${this.imeKolegija} predavač na ovom kolegiju je profesor ${this.profesor.ime}
    ${this.profesor.prezime} broj upisanih studenata u ovaj kolegij je ${this.listaStudenata.length}
    imena upisanih su ${this.listaStudenata}, imena onih koji su položili su: ${this.listaStudenataPolozili} `
  };
  prolaz(student) {
    if(this.listaStudenataPolozili.includes(student)){
      return `uspješo položio ispit`
    } else {
      return "pao ispit"
    }
  };

}
