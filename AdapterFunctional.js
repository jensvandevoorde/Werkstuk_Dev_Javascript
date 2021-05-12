function EUMarket() {

}

function USMarket() {
    let cost = 1.50;
    return function () {
        return "Mask costs $" + cost;
    }

}

function monetaryAdapter(us) {
    us = USMarket();
    console.log(us());
}
monetaryAdapter();