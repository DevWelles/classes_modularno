import Osoba from './osoba.mjs';

export default class Profesor extends Osoba{
  constructor(ime,prezime){
    super(ime,prezime);
    this._listaKolegija = [];
  };
  get listaKolegija() {
    return this._listaKolegija;
  }
  ocijeniIspit(student,kolegij) {
    return `Student ${student.ime} ${student.prezime} je ${kolegij.prolaz(student)} iz kolegija ${kolegij.imeKolegija}.`
  };
  izvjesce() {
    return `Ja sam profesor ${this.ime} ${this.prezime}. ${this.ispisKolegija()}.`
  };
  ispisKolegija() {
    let ispis = this.listaKolegija.map(kolegij => (" " + kolegij.imeKolegija));
    if(ispis.length === 0){
      ispis = "Trenutno ne predajem ni jedan kolegij"
    } else {
      ispis =  `Predajem${ispis}`
    }
    return ispis 
  };
  dodajKolegij(kolegij) {
    if(this.listaKolegija.includes(kolegij)){
      return
    } else {
      this.listaKolegija.push(kolegij);
    }
  };
}