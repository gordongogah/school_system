import React from 'react'

const FormEditInstructor =()=> {
  return (
    <div>
      <h1 className='title'>Instructor</h1>
    <h2 className='subtitle'>Edit Instructor</h2>
    <div className='card-content'>
      <div className='content'>
      <form className='box'>
      <div className='field'>
                  <label className='label'>Name</label>
                  <div className='control'>
                    <input type="text" className="input" placeholder="Name"/>
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Email</label>
                  <div className='control'>
                    <input type="text" className="input" placeholder="Email"/>
                  </div>
                </div>
               
                <div className='field'>
                  <div className='control'>
                  <button className='button is-success '>Update</button>
                  </div>
                 
                </div>
              </form> 
      </div>
    </div>
    </div>
  )
}

export default FormEditInstructor