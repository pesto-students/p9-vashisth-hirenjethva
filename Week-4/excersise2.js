var Person = function() {};

Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}


var Teacher = function() {};

Teacher.prototype.teach = function(topic) {
    console.log(topic);
}

var him = new Teacher();

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

him.initialize("Hiren",22);

him.teach("Inheritance");


