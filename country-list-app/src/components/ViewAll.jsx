import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://testapi.devtoolsdaily.com/countries").then(
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
                                return   <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card" >
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Name:{value.name}</li>
                                        <li class="list-group-item">iso2:{value.iso2}</li>
                                        <li class="list-group-item">iso3:{value.iso3}</li>
                                    </ul>
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