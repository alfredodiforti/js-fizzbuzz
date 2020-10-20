//stampare i numeri da 1 a 100
for (i=1; i <= 100; i++) {
  var numero = 0;
  numero = numero + i ;
  if (numero % 3 == 0 && numero % 5 == 0) {
    numero = 'FizzBuzz';
  }
  else if (numero % 3 == 0) {
    numero = 'Fizz';
  }
  else if (numero % 5 == 0) {
    numero = 'Buzz';
  }
  console.log(numero);
}
