
//arrange the prices from small to big
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
            if (i !== min) {
                [array[i], array[min]] = [array[min], array[i]];
            }
        }
    }
    return array;
} (function test() {
    const prices = [9, 3, 2, 0.5, 1];
    console.log(selectionSort(prices));
})();

//calculate the total price


function sumArray(ar) {
    let sum = 0;

    for (let el of ar) {
        if (Array.isArray(el)) {
            el = sumArray(el);
        }
        sum += el;
    }

    return sum;
} (function test() {
    const prices = [9, 3, 2, 0.5, 1];
    console.log(sumArray(prices));
})();

