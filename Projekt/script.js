// Pole pro ukládání uživatelů
let users = [];

// Funkce pro zobrazení formulářů podle vybrané akce v menu
function showRegistration() {
    hideAllForms();
    document.getElementById("registration").style.display = "block";
}

function showLogin() {
    hideAllForms();
    document.getElementById("login").style.display = "block";
}

function showUsers() {
    hideAllForms();
    displayUserList();
    document.getElementById("userList").style.display = "block";
}

// Funkce pro skrytí všech formulářů
function hideAllForms() {
    document.getElementById("registration").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("userList").style.display = "none";
}

// Funkce pro registraci uživatele
function registerUser() {
    // Získání hodnot z formuláře
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let status = document.getElementById("status").checked ? "Aktivní" : "Neaktivní";

    // Vytvoření objektu uživatele
    let newUser = {
        name: name,
        surname: surname,
        username: username,
        password: password,
        age: age,
        gender: gender,
        status: status
    };

    // Přidání uživatele do pole
    users.push(newUser);

    // Uložení pole uživatelů do local storage
    localStorage.setItem("users", JSON.stringify(users));

    // Vyčištění formuláře
    document.getElementById("registrationForm").reset();

    // Zobrazení potvrzovací zprávy
    alert("Uživatel byl úspěšně zaregistrován!");
}

// Funkce pro přihlášení uživatele
function loginUser() {
    // Získání hodnot z formuláře
    let loginUsername = document.getElementById("loginUsername").value;
    let loginPassword = document.getElementById("loginPassword").value;

    // Načtení uložených uživatelů z local storage
    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Kontrola existence uživatelského jména
    let foundUser = storedUsers.find(user => user.username === loginUsername);

    if (foundUser) {
        // Kontrola správnosti hesla
        if (foundUser.password === loginPassword) {
            alert("Úspěšné přihlášení!");
        } else {
            alert("Chybné heslo!");
        }
    } else {
        alert("Uživatel s tímto jménem neexistuje!");
    }

    // Vyčištění formuláře
    document.getElementById("loginForm").reset();
}

// Funkce pro zobrazení výpisu uživatelů
function displayUserList() {
    // Načtení uložených uživatelů z local storage
    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Výpis uživatelů na stránku
    let userOutput = document.getElementById("userOutput");
    userOutput.innerHTML = "";

    storedUsers.forEach(user => {
        let listItem = document.createElement("li");
        listItem.textContent = `${user.name} ${user.surname} - ${user.username}, ${user.age} let, ${user.gender}, Status: ${user.status}`;
        userOutput.appendChild(listItem);
    });
}