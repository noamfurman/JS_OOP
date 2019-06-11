class Recipt {
    constructor(title, serving_size, ingrediants) {
        this.title = title;
        this.serving_size = serving_size;
        this.ingrediants = ingrediants;
    }
}

let borito = new Recipt("borito", 2, ["beef","goakamuli","rice","beans","mexicans"]);
let cake = new Recipt("taim", 10, ["kaki","pipi","hair","blood","eyes"]);


function matkon(x) {

    console.log(x.title)
    console.log("serving:" + x.serving_size)
    console.log("* ingrediants:" + x.ingrediants[0])
    console.log("*    " + x.ingrediants[1])
    console.log("*    " + x.ingrediants[2])
    console.log("*    " + x.ingrediants[3])
    console.log("*    " + x.ingrediants[4])





}

