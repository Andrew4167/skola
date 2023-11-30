const simon = new Uzivatel("Šimon", 19);
const john = new Uzivatel("John", 23);
const jane = new Uzivatel("Jane", 45);
const peter = new Uzivatel("Peter", 20);
const jack = new Uzivatel("Jack", 43);
let uzivatele = [simon, john, jack, jane, peter]
const json = JSON.stringify(uzivatele);
localStorage.setItem("users", json)
console.log(JSON.parse(localStorage.getItem("users")))

sessionStorage.seItem("userSimon", JSON.stringify(simon))

uzivatele.forEach(uzivatel => 
    localStorage.setItem("user" + uzivatel.jmeno, 
    JSON.stringify(uzivatel)))

uzivatele.filter(uzivatel => uzivatel.vek > 20)
            .forEach(localStorage.removeItem("user" + uzivatel.vek))
// vytvorit objekt a ulozit do sessionStorage
// zabalit do funkce
// vytvorit tlacitko a priradit mu funkci

window.onload = function(){
    
}