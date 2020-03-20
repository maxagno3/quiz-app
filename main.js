//Factory Method.
// Problem : Copy of all methods in all objects.
// function newQuestion (title, option = [], index) {
//     let newObj = {};
//     newObj.title = title;
//     newObj.option = option;
//     newObj.index = index;
//     newObj.checkAnswer = function (value){
//         return newObj.option[index] === value;
//     }
//     newObj.getAnswer = function(){
//         return newObj.option[index];
//     }
//     return newObj;
// }

// let question = newQuestion('Where is Taj Mahal located?', ['Mexico', 'Italy', 'India', 'China'], 2);
// console.log(question);
// console.log(question.getAnswer());
// console.log(question.checkAnswer('India'));
// console.log(question.checkAnswer('Mexico'));

// __proto__ type :
// Problem : 1.Gets messier if used for multiple users.
//           2.Need to maintain separate variables.
// function newQuestion (title, option = [], index) {
//     let newObj = Object.create(quizMethod);
//     newObj.title = title;
//     newObj.option = option;
//     newObj.answerIndex = index;
//     return newObj;
// }

// let quizMethod = {
//     checkAnswer: function (value) {
//         return this.option[this.answerIndex] === value;
//     },
//     getAnswer: function () {
//         return this.option[this.answerIndex];
//     }
// }

// let question = newQuestion('Where is Taj Mahal located?', ['Mexico', 'Italy', 'India', 'China'], 2);
// console.log(question);
// console.log(question.getAnswer());
// console.log(question.checkAnswer('India'));
// console.log(question.checkAnswer('Mexico'));

// Function prototype Method :
// Problem : Readability is bad.
// function newQuestion(title, option = [], index) {
//     let newObj = Object.create(newQuestion.prototype);
//     newObj.title = title;
//     newObj.option = option;
//     newObj.answerIndex = index;
//     return newObj;
// }

// newQuestion.prototype.checkAnswer = function (value) {
//     return this.option[this.answerIndex] === value;
// }

// newQuestion.prototype.getAnswer = function () {
//     return this.option[this.answerIndex];
// }

// let question = newQuestion('Where is Taj Mahal located?', ['Mexico', 'Italy', 'India', 'China'], 2);
// console.log(question);
// console.log(question.getAnswer());
// console.log(question.checkAnswer('India'));

// pseudoclassical method.
// function newQuestion(title, option = [], index) {
//     this.title = title;
//     this.option = option;
//     this.answerIndex = index;
// }

// newQuestion.prototype.checkAnswer = function (value) {
//     return this.option[this.answerIndex] === value;
// }

// newQuestion.prototype.getAnswer = function () {
//     return this.option[this.answerIndex];
// }

// let question = new newQuestion('Where is Taj Mahal located?', ['Mexico', 'Italy', 'India', 'China'], 2);
// console.log(question);
// console.log(question.getAnswer());
// console.log(question.checkAnswer('India'));

// Class method.
class newQuestion {
    constructor(title, option = [], index){
        this.title = title;
        this.option = option;
        this.answerIndex = index;
    }
    checkAnswer (value) {
        return this.option[this.answerIndex] === value;
    }
    getAnswer () {
        return this.option[this.answerIndex];
    }
}

let question = new newQuestion('Where is Taj Mahal located?', ['Mexico', 'Italy', 'India', 'China'], 2);
console.log(question);
console.log(question.getAnswer());
console.log(question.checkAnswer('India'));