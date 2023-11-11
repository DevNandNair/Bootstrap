import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then(
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
                                return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card" >
                                    <img src={value.thumbnailUrl} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Title:{value.title}</h5>
                                        <p class="card-text">Album id:{value.albumId}</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">id:{value.id}</li>
                                        
                                       
                                    </ul>
                                    <div class="card-body">
                                        <a href="#" class="card-link">URL:{value.url}</a>
                                       
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