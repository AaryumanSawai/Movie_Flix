import {Component} from "react"

class MovieCard extends Component 
{
    
    
    

    
     
    render(){
        const {title,plot,poster,rating, price,stars,fav,added} = this.props.movies;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className = "left">
                        <img src={poster}/>
                    </div>
                    <div className="right">
                        <div className="title">
                            {title}
                        </div>
                        <div className="plot">
                            {plot}
                        </div>
                        <div className="price">
                            Rs: {price}
                        </div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">  
                            <img alt="decrease" onClick={()=>this.props.subStar(this.props.movies)} src="https://cdn-icons-png.flaticon.com/128/43/43625.png" className="str-btn"/>
                            <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                            className="stars" /> 

                            <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/748/748113.png" className="str-btn" onClick={()=>this.props.addStars(this.props.movies)}/>
                            <span>{stars}</span>
                            </div>
                            
                            <button onClick={()=>this.props.addFav(this.props.movies)}className={fav?"unfavourite-btn":"favourite-btn"}>{fav?"unfavourite":"favourite"}</button>
                            <button onClick={()=>{this.props.addCart(this.props.movies); }} className={added?"unfavourite-btn":"cart-btn"}> {added?"Remove from cart":"Add to cart" }</button>
                        </div>

                    </div>

                </div>
            </div>
        )


    }

    




}

export default MovieCard;