function currencyFormatter(separator, symbol, symbolFirst, value) {

    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) {

        return symbol + ' ' + result
    }
    else {

        return result + ' ' + symbol;
    }
}
function getDollarFormatter(formatter) {
    function dollarFormatter(value) {
        return formatter(',', '$', true, value);
    }

    return dollarFormatter;
}


let formatter = getDollarFormatter(currencyFormatter);
console.log(formatter(5345));
console.log(formatter(3.1429));
console.log(formatter(2.709));


