export default class Kolegij{
  constructor(imeKolegija, profesor){
    this.imeKolegija = imeKolegija;
    this.profesor = profesor;
    this._listaStudenata = [];
    this._listaStudenataPolozili = [];
  };
  get listaStudenata(){
    return this._listaStudenata;
  };
  get listaStudenataPolozili(){
    return this._listaStudenataPolozili;
  }
  upisiStudenta(student) {
    if(this.listaStudenata.includes(student)){
      return
    } else {
      this.listaStudenata.push(student);
    }
  };
  polozio(student) {
    if(this.listaStudenataPolozili.includes(student)){
      return
    } else {
      this.listaStudenataPolozili.push(student);
    }
  };
  izvjesce() {
    return `Ime ovog kolegija je ${this.imeKolegija} predavač na ovom kolegiju je profesor ${this.profesor.ime}
    ${this.profesor.prezime} broj upisanih studenata u ovaj kolegij je ${this.listaStudenata.length}
    ${this.ispisListeStudenata()} ${this.ispislisteStudenataPolozili()} `
  };
  prolaz(student) {
    if(this.listaStudenataPolozili.includes(student)){
      return `uspješo položio ispit`
    } else {
      return "pao ispit"
    }
  };
  ispisListeStudenata() {
    let ispis = this.listaStudenata.map(student => (" " + student.ime + " " + student.prezime));
    if(ispis.length === 0){
      ispis = "Nema upisanih studenata u ovaj kolegij."
    } else {
      ispis =  `Imena upisanih su${ispis}.`
    }
    return ispis 
  };
  ispislisteStudenataPolozili() {
    let ispis = this.listaStudenataPolozili.map(student => (" " + student.ime + " " + student.prezime));
    if(ispis.length === 0){
      ispis = "Još nitko nije položio ispit"
    } else {
      ispis =  `Imena studenata koji su položili ispit su${ispis}`
    }
    return ispis 
  };
}
