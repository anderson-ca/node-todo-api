let dog = {
  sound: 'woof!',
  bark: function() {
    console.log(this.sound);
  }
}

dog.bark(); // woof!

let otherBark = dog.bark;

otherBark(); // undefined

let otherBoundBark = dog.bark.bind(dog);

otherBoundBark();

let otherOtherBoundBark = otherBark.bind(dog);

otherOtherBoundBark();
