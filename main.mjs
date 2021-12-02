import Student from './student.mjs';
import Profesor from './profesor.mjs';
import Kolegij from './kolegij.mjs';

const sime = new Student("Šime", "Šimić");
const zvone = new Student ("Zvonimir", "Dražina");
const antun = new Profesor("Antun", "Nakić");
const react = new Kolegij("React", antun);
const javaScript = new Kolegij("JS", antun);
const css = new Kolegij("CSS", antun)



sime.dodajKolegij(css);
sime.dodajKolegij(javaScript);
zvone.dodajKolegij(react);
zvone.dodajKolegij(javaScript);
zvone.dodajKolegij(css);
antun.dodajKolegij(react);
antun.dodajKolegij(javaScript);
antun.dodajKolegij(css);
zvone.dodajPolozeniKolegij(css)
css.polozio(zvone)


console.log(antun.izvjesce())
console.log()

console.log(css.izvjesce());
console.log();
console.log(zvone.izvjesce());

console.log(antun.ocijeniIspit(zvone,css));
console.log(antun.ocijeniIspit(sime,css))





