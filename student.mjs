import Osoba from './osoba.mjs';

export default class Student extends Osoba{
  constructor(ime, prezime){
    super(ime,prezime);
    this._upisaniKolegiji = [];
    this._polozeniKolegiji = [];
  }
  get upisaniKolegiji(){ //želim samo da se mogu dohvatiti ova 2 propertija koji su array zato koristim get metodu
    return this._upisaniKolegiji; //ne želim da ih se može setati i zato necu staviti set metodu nego se samo preko metode dodaj mogu pushati novi kolegiji u array
  };
  get polozeniKolegiji(){
    return this._polozeniKolegiji;
  };
  prijaviIspit(kolegij) {
    kolegij.listaStudenata.push(this.ime + this.prezime);
  };
  ispisUpisanihKolegija() {
    const kolegiji = this._upisaniKolegiji.map(kolegij => (" " + kolegij.imeKolegija));
    let ispis;
    if (kolegiji.length === 0){
      ispis = "Nisam upisao nove kolegije"
    }else {
      ispis = "Upisao sam" + kolegiji
    }
    return ispis
  };
  ispisPolozenihKolegija() {
    let ispis = this._polozeniKolegiji.map(kolegij => (" " + kolegij.imeKolegija));
    if(ispis.length === 0){
      ispis = "nisam položio ni jedan kolegij"
    } else {
      ispis =  `polozio sam${ispis}`
    }return ispis
  };
  izvjesce () { //tu overwriteamo metodu nasljeđenu od osoba i sad student ima svoje izvješće jer će prvo njega dohvatiti, a onda njegovog pretka samo u slučaju da nenađe metodu u svojoj klasi
    return `Ja sam student ${this.ime} ${this.prezime}. ${this.ispisUpisanihKolegija()} i
    ${this.ispisPolozenihKolegija()}.`
  };
  dodajKolegij(kolegij) {
    this._upisaniKolegiji.push(kolegij);
  };
  dodajPolozeniKolegij (kolegij) {
    this.polozeniKolegiji.push(kolegij);
  }
  
}