
class Movie{
    constructor(title, director, genre, releaseYear, rating){
        this.title = title
        this.director = director
        this.genre = genre
        this.releaseYear = releaseYear
        this.rating = rating
    }

    getOverview(){
        console.log(`${this.title} is an ${this.genre} movie directed by ${this.director}, was realeased in ${this.releaseYear}. The rating is ${this.rating}`);
    }
}

const movie1 = new Movie('Lord of the rings', 'Barrie Osborne', 'Adventure', 2001, 4.5)
const movie2 = new Movie('Batman', 'Charles', 'Action', 2006, 4.3)

movie1.getOverview()
movie2.getOverview()