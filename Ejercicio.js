const myList = ["velma", "scout", "jane", "john", "harry"];

// Bucle For para Imprimir Nombres de la Lista:
for (let i = 0; i < myList.length; i++) {
  console.log(myList[i]);
}

// Bucle While para Imprimir Nombres de la Lista:
let i = 0;
while (i < myList.length) {
  console.log(myList[i]);
  i++;
}

//Función de Flecha para Devolver "Hello World":
const sayHello = () => {
  return "Hello World";
}

console.log(sayHello());