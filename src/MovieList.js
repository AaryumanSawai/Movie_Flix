import MovieCard from "./moviecard.js";
import {Component} from "react"

class MovieList extends Component 
{
    handleIncStar = (movie) => {
      const {movies} = this.state;
      const mid = movies.indexOf(movie);
      movies[mid].stars+=0.5;
      this.setState(
        {
          movies:movies
        }
      )
    }


    handleDecStar = (movie) => {
      const {movies} = this.state;
      const mid = movies.indexOf(movie);
      movies[mid].stars-=0.5;
      this.setState(
        {
          movies:movies
        }
      )
    }

    handleFav = (film) => {
      const{movies} = this.state;
      const ind = movies.indexOf(film);
      movies[ind].fav = !movies[ind].fav
      this.setState({movies:movies});
    }

    handleCart = (film) => 
    {
      const{movies} = this.state;
      const ind = movies.indexOf(film);
      movies[ind].added = !movies[ind].added;
      this.setState({movies:movies});

    }


    constructor(){
        super();
        this.state = {
            movies : [
                {
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  stars: 0,
                  fav: false,
                  added: false                  
                },
                {
                  title: 'The Dark Knight',                  
                  plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',            
                  price: 199,            
                  stars: 0,            
                  fav: false,
                  added: false                  
                },
                {
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  stars: 0,            
                  fav: false,
                  added: false                  
                }]
        }
    }
    render(){
        const {movies} = this.state;
        return (
            <>
                {movies.map((movie)=>(<MovieCard movies={movie} addStars={this.handleIncStar} subStar={this.handleDecStar} addFav={this.handleFav} addCart={this.handleCart}/>))}
            </>

        );
    }

}
export default MovieList;
