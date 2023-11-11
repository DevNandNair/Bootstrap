import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const View = () => {
    const[data,changeData]=useState(
        [{"id":1,"movie":"The Shawshank Redemption","rating":9.2,"image":"images/shawshank.jpg","imdb_url":"https://www.imdb.com/title/tt0111161/"},{"id":2,"movie":"The Godfather","rating":9.2,"image":"images/godfather.jpg","imdb_url":"https://www.imdb.com/title/tt0068646/"},{"id":3,"movie":"The Dark Knight","rating":9,"image":"images/dark_knight.jpg","imdb_url":"https://www.imdb.com/title/tt0468569/"},{"id":4,"movie":"Pulp Fiction","rating":8.9,"image":"images/pulp_fiction.jpg","imdb_url":"https://www.imdb.com/title/tt0110912/"},{"id":5,"movie":"The Lord of the Rings: The Return of the King","rating":9,"image":"images/lotr_return_king.jpg","imdb_url":"https://www.imdb.com/title/tt0167260/"},{"id":6,"movie":"The Good, the Bad and the Ugly","rating":8.8,"image":"images/good_bad_ugly.jpg","imdb_url":"https://www.imdb.com/title/tt0060196/"},{"id":7,"movie":"Fight Club","rating":8.8,"image":"images/fight_club.jpg","imdb_url":"https://www.imdb.com/title/tt0137523/"},{"id":8,"movie":"The Lord of the Rings: The Fellowship of the Ring","rating":8.8,"image":"images/lotr_fellowship.jpg","imdb_url":"https://www.imdb.com/title/tt0120737/"},{"id":9,"movie":"Forrest Gump","rating":8.8,"image":"images/forrest_gump.jpg","imdb_url":"https://www.imdb.com/title/tt0109830/"},{"id":10,"movie":"Inception","rating":8.8,"image":"images/inception.jpg","imdb_url":"https://www.imdb.com/title/tt1375666/"}]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                           {data.map(
                            (value,index)=>{
                                return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card" >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" class="card-img-top" alt="..."/>
                            
                                    <div class="card-body">
                                        
                                        <p class="card-text">Name: {value.movie}</p>
                                        <p class="card-text">Rating: {value.rating}</p>
                                        <p class="card-text">id: {value.id}</p>
                                        <Link to={value.imdb_url}>Know more</Link>
                                    </div>
                                </div>
                            </div>

                            }
                           )}
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default View