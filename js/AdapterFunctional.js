// OLD INTERFACE

function EUMarket() {
    return function (cost) {
        return "Mask costs €" + cost;
    }
}

// NEW INTERFACE

function USMarket(value) {
   const dollarValue = value;

    return function (cost) {
        return "Mask costs $" + cost * dollarValue;
    };
}

// ADAPTER INTERFACE

function monetaryAdapter(value) {
    const calculateCostOfUSMarket = USMarket(value);
        
    return function (cost) {
        const calculatedCost = calculateCostOfUSMarket(cost);
        return calculatedCost;
    }
}

function run() {
    const costOfEUMarket = 1.25;
    const value = 1.21;

    // Original mask cost in euro and interface
    let cost = EUMarket()(costOfEUMarket);
    console.log(cost);

    // New mask cost in dollar with adapted interface
    cost = monetaryAdapter(value)(costOfEUMarket);
    console.log(cost);
}

run();