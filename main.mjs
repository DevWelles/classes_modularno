import Student from './student.mjs';
import Profesor from './profesor.mjs';
import Kolegij from './kolegij.mjs';

const sime = new Student("Šime", "Šimić");
const zvone = new Student ("Zvonimir", "Dražina");
const antun = new Profesor("Antun", "Nakić");
const ivan = new Profesor ("Ivan", "Ivić")
const react = new Kolegij("React", antun);
const javaScript = new Kolegij("JS", ivan);
const css = new Kolegij("CSS", antun)



sime.dodajKolegij(react);
sime.dodajKolegij(javaScript);
zvone.dodajKolegij(react);
zvone.dodajKolegij(javaScript);
zvone.dodajKolegij(css);
zvone.dodajPolozeniKolegij(css)//ovo samo njegov property da je ppoložio,trebamo staviti i u property od instance css-a tako da kad kad profa pozove funkciju polozio da vidi da je u toj listi

//console.log(zvone.izvjesce());

antun.listaKolegija = [react,css]; //dodajem na ovaj način iako nije baš dobro tako jer se direktno pristupa propertyu, bolje onako napraviti neku metodu za push ili sa set i get metodama
css.listaStudenata = [zvone,sime];
css.polozio(zvone)

//console.log(css.listaStudenataPolozili)
console.log(antun.izvjesce())
console.log()

console.log(css.izvjesce());//tu jos trebam dodti metode za ispis studenata unutar liste kao sto sam napravio i za profesora i studenta
                            // jer sad mi samo vraća [object, Object], ali nisam sad imao više vremena za to
console.log();
console.log(zvone.izvjesce());



console.log(antun.ocijeniIspit(zvone,css));
console.log(antun.ocijeniIspit(sime,css))





