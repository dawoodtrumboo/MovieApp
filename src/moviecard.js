import React from 'react'

let starCount = 0;






class MovieCard extends React.Component{

    constructor(){
        super();
        this.state = {
            title:"The Avengers",
            plot:"Supernatural Powers shown in the movie. ",
            price:199,
            rating:8.9,
            stars:0,
        }
    }

    increaseStar =()=>{

        this.setState({
            stars: this.state.stars + 0.5
        });

       
    }
    

    decreaseStar = ()=>{
        if(this.state.stars!=0){
        this.setState({
            stars:this.state.stars - 0.5
        });
    }
    }

    render(){
         const {title,plot,price,rating,stars} = this.state;
        return (
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img alt='Poster' src='https://hips.hearstapps.com/hmg-prod/images/d1pklzbuyaab0la-1552597012.jpg'/>
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
                            <button className='favourite-btn'>Favourite</button>
                            <button className='cart-btn'>Add to Cart</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;