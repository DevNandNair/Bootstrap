import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (response)=>{
                changeData(response.data)
            }
        ) 
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            
                        {data.map(
                            (value,index)=>{
                                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card text-bg-dark">
                                    <img src="https://img.freepik.com/premium-photo/book-library-with-old-open-textbook-stack-piles-literature-text-archive-reading-desk_779468-5822.jpg" class="card-img" alt="..." />
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">{value.title}</h5>
                                        <p class="card-text">{value.body}</p>
                                        <p class="card-text"><small>{value.id}</small></p>
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

export default ViewAll