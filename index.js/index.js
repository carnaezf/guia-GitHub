function laCajaDePandora(num) {
  // proximamente escribiremos codigo aqui
  if (num % 4 === 0) {
    return num.toString(2);
  } else return num.toString(16);
}

console.log(20);
console.log(laCajaDePandora(454345));
