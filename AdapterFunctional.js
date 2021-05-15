/*function EUMarket() {

}

function USMarket(cost) {

    return function () {
        return "Mask costs $" + cost;
    }

}

function monetaryAdapter() {
    const us = USMarket(2.3);
    console.log(us());
}
monetaryAdapter(); */

// old interface
function EUMarket() {
    //nt FP
    const cost = 1.25;
    this.mCost = cost;

    return function () {
        return "Mask costs €" + cost;
    }
}

// new interface
function USMarket(value) {
   const dollarValue = value;

    return function (cost) {
        return "Mask costs $" + cost * dollarValue;
    };
}

// adapter interface
function monetaryAdapter() {
    let calculateCostOfUSMarket = USMarket();

    return function (cost) {
        const calculatedCost = calculateCostOfUSMarket();
        return calculatedCost;
    }
}

function run() {
    const eu = new EUMarket();
    const adaptee = new USMarket()
    const adapter = new monetaryAdapter();

    // original shipping object and interface
    let cost = eu();
    console.log(cost);

    // new shipping object with adapted interface
    cost = USMarket(1.21)(1.25);
    cost = adapter(1.25);
    console.log(cost);
}

run();