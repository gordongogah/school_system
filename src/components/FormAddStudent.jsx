import React from 'react'

const FormAddStudent =()=> {
  return (
    <div>
    <h1 className='title'>Student</h1>
    <h2 className='subtitle'>Add New Student</h2>
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
                  <label className='label'>RegNo</label>
                  <div className='control'>
                    <input type="text" className="input" placeholder="regno"/>
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Parent</label>
                  <div className='control'>
                    <input type="text" className="input" placeholder="parent"/>
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Password</label>
                  <div className='control'>
                    <input type="password" className="input" placeholder="*****"/>
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Class</label>
                  <div className='control'>
                   <div className='select is-fullwidth'>
                    <select>
                      <option value="admin">Class 1</option>
                      <option value="user">Class II</option>
                      <option value="user">Class III</option>
                      <option value="user">Class IV</option>
                      <option value="user">Class V</option>
                      <option value="user">Class VI</option>
                      <option value="user">Class VII</option>
                      <option value="user">Class VIII</option>
                      <option value="user">Class IX</option>
                      <option value="user">Class XX</option>
                      <option value="user">Class XI</option>
                      <option value="user">Class XII</option>
                    </select>
                   </div>
                  </div>
                </div>
                <div className='field'>
                  <div className='control'>
                  <button className='button is-success '>Save</button>
                  </div>
                 
                </div>
              </form> 
      </div>
    </div>
    </div>
  )
}

export default FormAddStudent