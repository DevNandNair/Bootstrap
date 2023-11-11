import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
  const [data,changeData]=useState(
    [{"name":"tom","rollno":2,"college":"Marian College"},
    {"name":"Eren","rollno":22,"college":"Marian College"},
    {"name":"Naruto","rollno":21,"college":"Marian College"},
    {"name":"Mikasa","rollno":26,"college":"Marian College"},
    {"name":"Sasuke","rollno":24,"college":"Marian College"},
    {"name":"Sakura","rollno":4,"college":"Marian College"},
    {"name":"Obito","rollno":13,"college":"Marian College"},
    {"name":"Kakashi","rollno":5,"college":"Marian College"},
    {"name":"Minato","rollno":7,"college":"Marian College"},
    {"name":"Hiruzen","rollno":8,"college":"Marian College"},
    {"name":"Hinata","rollno":23,"college":"Marian College"}]
  )
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
  <thead>
    <tr>
      
      <th scope="col">name</th>
      <th scope="col">roll no</th>
      <th scope="col">college</th>
    </tr>
  </thead>
  <tbody>
   {data.map(
    (value,index)=>{
      return<tr>
         
      
      <td>{value.name}</td>
      <td>{value.rollno}</td>
      <td>{value.college}</td>
    
      </tr>
    }
   )}

  </tbody>
</table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll