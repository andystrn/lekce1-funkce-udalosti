// tady je místo pro náš program

//document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c
}

function secti2() {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}


/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
}

let ctverec = document.querySelector(".ctverecek")
function zmenBarvu() {
  ctverec.style.backgroundColor = "green";
}




