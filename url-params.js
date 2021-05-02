// získání GET parametrů
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// element s výsledky
const resultElement = document.querySelector('#seznam-parametru');

// procházení parametrů a vytváření jednotlivých položek
for (const entry of urlParams.entries()) {
    let listItemElement = document.createElement('li');
    listItemElement.innerHTML = `${entry[0]}: ${entry[1]}`;
    resultElement.appendChild(listItemElement);
}

//Příklady:
// ?a=2&b=3
// ?jmeno=Jana&prijmeni=Czechita
// ?vaha=80&vyska=180&pohlavi=muž