function sharePizza(shares){
    function cutPizzaSlices(slices){
        return slices;
    }
    var sharePizza = cutPizzaSlices(8);
    var sharePizza = 8;
    return `Each person gets ${Number(sharePizza/ shares).toFixed(2)} slices of Pizza`;
}

console.log(sharePizza(2));
console.log(sharePizza(3));

function cutPizzaSlices(slices) {
    return ( function (people) {
        return `each person gets ${(slices / people).toFixed(2)} `
    })
}

var share = cutPizzaSlices(10);
console.log(share(2));
// each person gets 5 slices
