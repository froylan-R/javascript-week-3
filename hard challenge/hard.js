var costumer = (function(data) {
    var pii = {
        name : 'charlie',
        ssn : '555-555-5555'
    };


    return public = {
        getName: function getName () {
            return pii.name;
        }
    }

})()

console.log(costumer.getName());