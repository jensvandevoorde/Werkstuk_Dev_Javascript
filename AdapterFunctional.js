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
    const cost = 1.25;
    this.maskCosts = function () {
        return "Mask costs €" + cost;
    }
    this.mCost = cost;
}

// new interface

function USMarket() {
    const dollarValue = 1.21;

    this.calculate = function (cost) {
        const costInDollar = cost * dollarValue;
        return function maskInDollar() {
            return "Mask costs $" + costInDollar;
        }
    };
}

// adapter interface

function monetaryAdapter(currency) {
    let us = new USMarket();
    let eu = new EUMarket();
    return {
        request: function () {
            return us.calculate(eu.mCost)();
        }
    };
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