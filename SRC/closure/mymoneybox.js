// function moneyBox(coins){
//     let savecoins = 0;
//     savecoins += coins
//     console.log(`coins en moeybox: ${savecoins}`)
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);

console.log(moneyBoxAna(50))


function createPetList() {

  const lista = [];
  function almacenarM(nombre) {
    lista.push(nombre);
    //return lista;
    console.log(lista);
  }
  return almacenarM;
}

const milista = createPetList();

milista("luna");
milista("rocky");