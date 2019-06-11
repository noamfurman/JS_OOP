class Dogs {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
}

var bell = new Dogs ("bell","whitedog");
var charlie = new Dogs ("charlie","racistdog");
var boney = new Dogs ("boney","whitedog");

var dogies = [bell, charlie, boney];

function typeCk(dogies,type){
    for(var i = 0; i<dogies.length; i++){
        if(dogies[i].type === type){
            console.log(dogies[i].name);
        }
    }
}

typeCk(dogies,"racistdog");