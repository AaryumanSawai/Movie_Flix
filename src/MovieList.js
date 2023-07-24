import MovieCard from "./moviecard.js";
import {Component} from "react";
class MovieList extends Component 
{
    
    render(){
        const {movies, handleIncStar, handleDecStar, handleFav, handleCart, count} = this.props;
        //console.log(movies);
        return (
            <>
                
                {movies.map((movie)=>(<MovieCard movies={movie} addStars={handleIncStar} subStar={handleDecStar} addFav={handleFav} addCart={handleCart}/>))}
            </>

        );
    }

}
export default MovieList;

