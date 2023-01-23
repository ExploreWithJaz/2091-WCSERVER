module.exports = function (firstPerson, SecondPerson){
    this.firstPerson = firstPerson;
    this.SecondPerson = SecondPerson;
    this.greetThisPerson = function () {
        return 'Hello ' + this.firstPerson + ' and ' + this.SecondPerson;
    }
}