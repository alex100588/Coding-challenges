class Book{
    constructor(title, author, ISBN, numCopies){
        this.title = title
        this.author = author
        this.ISBN = ISBN
        this.numCopies = numCopies
    }
     getAvailability = function(){
        if(this.numCopies === 0){
            console.log('Out of stock');
        }else if(this.numCopies < 10){
            console.log('Low stock');
        }else{
            console.log('In stock');
        }
     }
}

const book1 = new Book('Titlu', 'Charles', 12, 12)
const book2 = new Book('Titlu', 'Charles', 12, 0)
const book3 = new Book('Titlu', 'Charles', 12, 8)


book1.getAvailability(book1)
book2.getAvailability(book2)
book3.getAvailability(book3)