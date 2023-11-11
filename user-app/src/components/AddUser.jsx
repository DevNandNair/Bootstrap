import React from 'react'
import Navbar from './Navbar'

const AddUser = () => {
  return (
    <div>
         <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <label htmlFor="" className="form-label">Username</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"></div>
                    <label htmlFor="" className="form-label">Email</label>
                     <input type="email" name="" id="" className="form-control" />
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"></div>
                    <label htmlFor="" className="form-label">Ph No</label>
                        <input type="text" className="form-control" />
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"></div>
                    <label htmlFor="" className="form-label">Website</label>
                        <input type="text" className="form-control" />
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddUser