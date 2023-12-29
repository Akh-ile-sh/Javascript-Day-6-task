class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movieList) {
    let arr = [];

    for (let i = 0; i < movieList.length; i++) {
      if (movieList[i].rating === "PG") {
        arr.push({
          title: movieList[i].title,
          studio: movieList[i].studio,
          rating: movieList[i].rating,
        });
      }
    }

    return arr;
  }
}

const movielist = [
  new Movie("movie1", "studio1", "PG"),
  new Movie("movie2", "studio2", "PG"),
  new Movie("movie3", "studio3", "PG13"),
  new Movie("movie4", "studio4", "PG"),
  new Movie("movie5", "studio5", "PG13"),
];

const pgMovies = Movie.getPG(movielist);
console.log(pgMovies);
