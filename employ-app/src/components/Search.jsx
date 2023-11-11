import React from 'react'
import Navbar from './Navbar'

const Search = () => {
  return (
    <div>
         <Navbar/>
        
    <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Employee id</label>
                    <input type="text" className="form-control" />
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <buttton class="btn btn-info">Search</buttton>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Search