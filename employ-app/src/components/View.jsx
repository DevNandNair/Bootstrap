import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
  const[data,changeData]=useState(
    [{"name":"tanvia","empid":123,"age":45},
    {"name":"savi","empid":123,"age":45},
    {"name":"alan","empid":123,"age":45},
    {"name":"sharon","empid":123,"age":45},
    {"name":"glenn","empid":123,"age":45},
    {"name":"alf","empid":123,"age":45}]
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
                  return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                  <div class="card" >
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Name: {value.name}</li>
                      <li class="list-group-item">Employee id: {value.empid}</li>
                      <li class="list-group-item">Age: {value.age}</li>
                    </ul>
                    <div class="card-footer">
                    
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