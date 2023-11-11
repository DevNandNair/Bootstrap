import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewProducts = () => {
    const [data, changeData] = useState([] )

    const fetchData=()=>{
        axios.get().then(
            (response)=>{
                changeData(response.data)

            }
        )
        
        
    }

    useEffect(()=>{fetchData()},[])
    return (
        <div>
            
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                           {data.map(
                            (value,index)=>{
                                return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card" >
                                    <img src={value.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">id:  {value.id}</p>
                                        <p class="card-text">name: {value.title}</p>
                                        <p class="card-text">Price: {value.price}</p>
                                        
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

export default ViewProducts