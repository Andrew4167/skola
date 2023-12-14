
function pripravTlacitko(studenti) {
    const buttonPridej = document.createElement("button");
    buttonPridej.innerText = "Pridej studenty " + studenti.nazev
    buttonPridej.onclick = function() { pridejStudenty(studenti); }

    const buttonVypis = document.createElement("button");
    buttonVypis.innerText = "Vypis studenty " + studenti.nazev
    buttonVypis.onclick = function() { vypisStudenty(studenti); }

    document.body.appendChild(buttonPridej);
    document.body.appendChild(buttonVypis);
}

function pridejStudenty(studenti) {
    const studenti = prompt("Zadej jméno studenta");
    const vek = prompt("Zadej věk");
    const student = new Student(studenti, vek);
    firma.studenti.push(student);
}

function vypisStudenty(studenti) {
    const h3 = document.createElement("h3")
    h3.innerText = "Studenti" + "ㅤ" + studenti.nazev
    const seznam = document.createElement("ul"); // Vytvoříme seznam jako HTML element
    for (const studenti of studenti.studenti) { // Naplníme jej daty
        seznam.innerHTML += `<li><strong>Jméno</strong>: ${student.studenti}</li>`;
        seznam.innerHTML += `<li><strong>Věk</strong>: ${student.vek}</li>`;
    }
    document.body.appendChild(seznam); //Přidáme element do body
}