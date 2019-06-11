class Book {
    constructor(title, description, author, red) {
        this.title = title;
        this.description = description;
    }
}

let bok1 = new Book("Jungle book", "The book the jungle book Most of the characters are animals such as Shere Khan the tiger and Baloo the bear, though a principal character is the boy or man-cub Mowgli, who is raised in the jungle by wolves. The stories are set in a forest in India; one place mentioned repeatedly is  (Seoni), in the central state of Madhya Pradesh.", "Rudyard Kipling", false);
let bok2 = new Book("Never Ending Story", "a book that centers on a boy, Bastian Balthazar Bux, an overweight and strange child who is neglected by his father after the death of Bastian's mother. While escaping from some bullies, Bastian bursts into the antiquarian book store of Carl Conrad Coreander, where he finds his interest held by a book called The Neverending Story. Unable to resist, he steals the book and hides in his school's attic, where he begins to read.", " Michael Ende", true);


function books(stories) {
    b = (stories.red ? "read" : "didn't read");
    console.log("the book " + stories.title + " is " + stories.description + " by " + stories.author + " and " + b)
}
