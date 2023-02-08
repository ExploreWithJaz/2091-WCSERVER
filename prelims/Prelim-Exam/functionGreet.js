module.exports = function (name) {
  this.name = name;
  this.greeting1 = function () {
    return 'Hello' + this.name;
  };
  this.greeting2 = function () {
    return 'Congrats' + this.name;
  };
  this.greeting3 = function () {
    return 'Goodbye' + this.name;
  };
};
