let juegan = "x";

function marcarCasillas(evt) {
    evt.currentTarget.textContent = juegan;
    if (juegan == "x") {
        juegan = "o";
    } else {
        juegan = "x";
    }
}

const casillas = document.getElementsByClassName("casila");
for (const casilla of casillas) {
    casilla.addEventListener("click", marcarCasillas);
}