import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const BlogAuth = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row ">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                </div><div className="card"><div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="Password" className="form-label">Password</label>
                        <input type="password" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <Link to="view" type='button' className='btn btn-success'>Login</Link>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <Link to="/register">new user click here</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogAuth