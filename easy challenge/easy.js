function exercise(workout) {
    return (function () {
        return `Today's exercise: ${workout}`
    })
}

var swimming = exercise('swimming');
console.log(swimming());

var running = exercise('running');
console.log(running());