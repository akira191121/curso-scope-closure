const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);
    
    function parent(){//funcion interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner,myNumber,myGlobal);
        }

        return child();
    }

   return parent();
}

myFunction();



export function sumWithClosure(firstNum) {
  // Tu código aquí 👈
  let a = firstNum;
  return function (secondNum) {
    let b = secondNum;
    if (!b) {
      return a;
    } else {
      return a + b;
    }
  }
}