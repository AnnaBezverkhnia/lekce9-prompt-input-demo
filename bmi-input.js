// funkce pro výpočet BMI
function vypocitejBMI() {
    let vyskaMetry = parseFloat(document.querySelector('input[name=vyska]').value) / 100;
    let vahaKilogramy = parseInt(document.querySelector('input[name=vaha]').value);

    let BMI = Math.round(vahaKilogramy / Math.pow(vyskaMetry, 2) * 10) / 10;

    vyspiBMI(BMI);
}

// funkce pro zapsání BMI do uživatelského rozhraní
function vyspiBMI(BMI) {
    document.querySelector('#vysledek > span').innerHTML = BMI;
}

// event listener pro hlídání změny ve vstupech
document.querySelectorAll('input').forEach((element) => {
    element.addEventListener('change', vypocitejBMI)
});