// old interface

function EUMarket() {
  const cost = 1.25;
  this.maskCosts = function() {
      return "Mask costs €" + cost;
  }
}

// new interface

function USMarket() {
  const dollarValue = 1.21;

  this.calculate = function(cost) { 
    const costInDollar = cost * dollarValue;
    return function maskInDollar() {
      return "Mask costs $" + costInDollar;
    }
  };
}

// adapter interface

function monetaryAdapter() {
  let us = new USMarket();
  console.log(EUMarket.cost);

  // return {
  //     request: function() {
  //         return us.calculate(cost)();
  //     }
  // };
  this.request = function(){
    return us.calculate(2)();
  }
}


function run() {
  const eu = new EUMarket();
  //const adaptee = new USMarket()
  const adapter = new monetaryAdapter();

  // original shipping object and interface
  let cost = eu.maskCosts();
  console.log(cost);

  // new shipping object with adapted interface
  cost = adapter.request();
  console.log(cost);
}

run();