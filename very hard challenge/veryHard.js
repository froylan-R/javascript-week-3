class person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
        this.exercise = function () {
            console.log(`${this.name} does not like exercise`);
        };
        this.fetchJob = function () {
            console.log(`${this.name} is a ${this.job}`);
        };
    }
}

// Programmer constructor
class Programmer extends person {
    constructor(name, job, age, languages) {
        super(name, job, age, languages)
        this.languages= languages;
        this.busy = false;
        this.completeTask = function () {
            return this.busy = false;
        };
        this.acceptNewTask = function () {
            return this.busy = true;
        };
        this.offerNewTask = function () {
            const msg = this.busy ? 'would love to take on new responsabilities' : 'cant acept any new responsabilites'
            
            console.log(`${this.name} ${msg}`);
        };
        this.learnLanguage = function (language) {
            this.languages.push(language);
        };
        this.listLanguage = function () {
            console.log(`Learned Languages: ${languages}`);
        }
    }
}


var Joe = new Programmer ('mark', 'Software Engineer', '217', ['html', ' css', ' javascript']);


// Joe.exercise();
// Joe.fetchJob();
// Joe.acceptNewTask();
// Joe.learnLanguage(' react' );
// Joe.offerNewTask();
// Joe.listLanguage();