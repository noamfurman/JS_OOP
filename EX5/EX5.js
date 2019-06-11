class Dog {
    constructor(name, type, age, cuddle) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.cuddle = cuddle;
    }
}
let dog1 = new Dog ("kyrie", "poodle", 1.5, false);

let dog2 = new Dog ("borki", "labrador", 3, true);

let dog3 = new Dog ("marko", "poodle", 7, true);

function describeDogs(Dog){
    g = (Dog.cuddle ? "loves to cuddle" : "dosen't loves to cuddle");
    console.log("this is " + Dog.name + " a " + Dog.type + "." + " he is a " + Dog.age + " old and " + g)
}

describeDogs(dog1);
describeDogs(dog2);
describeDogs(dog3);