import React from 'react'

let starCount = 0;






class MovieCard extends React.Component{

    

   
    

   

    render(){
         const {title,plot,price,rating,stars,fav,cart,poster} = this.props.movies;
        return (
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img alt='Poster' src={poster}/>
                    </div>
                    <div className='right'>
                        <div className='title'>{title}</div>
                        <div className='plot'>{plot}</div>
                        <div className='price'>Rs {price}</div>

                        <div className='footer'>
                            <div className='rating'>{rating}</div>
                            <div className='star-dis'>
                                <img src='https://cdn-icons-png.flaticon.com/128/8690/8690041.png' className='str-btn' onClick={this.decreaseStar} />
                                <img className='stars' src='https://cdn-icons-png.flaticon.com/128/956/956100.png'/>
                                <img src='https://cdn-icons-png.flaticon.com/128/748/748113.png' className='str-btn' onClick={this.increaseStar}/>
                                <span className='starCount'>{stars}</span>
                                </div>
                            {/* {fav?<button  className='unfavourite-btn'  onClick={this.favourite}>Un-favourite</button>:<button className='favourite-btn' onClick={this.favourite}>Favourite</button>} */}
                            <button  className={fav?"unfavourite-btn":"favourite-btn"}  onClick={this.handleFav}>{fav?"Un-favourite":"Favourite"}</button>
                            <button className={cart?"removeCart-btn":"cart-btn"} onClick={this.handleCart}>{cart?"Remove from Cart":"Add to Cart"}</button>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;