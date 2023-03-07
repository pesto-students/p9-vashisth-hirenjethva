const person = {
    fullName: function(city, country, methodnames) {
      console.log("This is from " +  methodnames +" method. " + this.firstName + " " + this.lastName + " leaves in " + city + " which is in " + country);
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  person.fullName.call(person1, "Oslo", "Norway", "Call");
  /*
  The diffrence between call and apply is 
  call method takes arguments seprately 
  and 
  apply method takes as an array.
  */
  person.fullName.apply(person1, ["Oslo", "Norway", "Apply"]);


  /*
With the bind() method, an object can borrow a method from another object.

  */

const userDetail = {
    firstName:"Hiren",
    lastName: "Jethva",
    display: function () {
      console.log(this.firstName + " " + this.lastName);
    }
  }
  
  let display = userDetail.display.bind(userDetail);
  setTimeout(display, 3000);  //Hiren Jethva