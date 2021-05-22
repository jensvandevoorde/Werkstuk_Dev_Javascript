//FUNCTIONAL PROGRAMMING - ADAPTER DESIGN PATTERN

// Old interface
function EUMarket() {
  return function (cost) {
    return "Mask(s) cost €" + Math.round(cost);
  }
}

// New interface
function USMarket(value) {
  const dollarValue = value;

  return function (cost) {

    return "Mask(s) cost $" + Math.round(cost * dollarValue);
  };
}

// Adapter interface
function monetaryAdapter(value) {
  const calculateCostOfUSMarket = USMarket(value);

  return function (cost) {
    const calculatedCost = calculateCostOfUSMarket(cost);
    return calculatedCost;
  }
}

function run() {    // niet-pure functie
  let allPrices = [];
  const costOfEUMarket = 1.25;
  const value = 1.21;
  const value2 = 5;
  const value3 = 9;

  // Original mask cost in euro and interface
  let cost = EUMarket()(costOfEUMarket);
  allPrices.push(value, value2, value3);


  console.log(cost);    // side-effect
  console.log(allPrices);   // side-effect

  // New mask cost in dollar with adapted interface
  cost = monetaryAdapter(value)(costOfEUMarket);
  let totalCost = monetaryAdapter(sumArray(allPrices))(costOfEUMarket);   // side-effect
  console.log(cost);    // side-effect
  console.log(totalCost);   //side-effect
}

run();

//JAVASCRIPT - ALGORYTHM

function sumArray(ar) {
  let sum = 0;

  for (let el of ar) {
    if (Array.isArray(el)) {
      el = sumArray(el);
    }
    sum += el;
  }

  return sum;
}