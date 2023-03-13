function laCajaDePandora(num) {
  // proximamente escribiremos codigo aqui
  if (num % 2 === 0) {
    return num.toString(2);
  } else return num.toString(16);
}

console.log("Cambio hecho por ro")
console.log(laCajaDePandora(454345));
