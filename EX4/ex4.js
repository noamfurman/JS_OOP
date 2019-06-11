class Jewel {
    constructor(type, price, karat, length_cm) {
        this.type = type;
        this.price = price;
    }
}

let silverRing = new Jewel ("ring", 1500);
let tennisNecklace = new Jewel ("necklace", 3500);

function getHigherPrice (Jewel1, Jewel2){
    if (Jewel1.price > Jewel2.price){
        console.log("the" + Jewel.type + "cost more");
        return Jewel1;
    }
    else{
        console.log("the" + Jewel.type + "cost more");
        return Jewel2.type
    }
}
