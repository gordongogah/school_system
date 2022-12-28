import React from 'react'

const FormScheduleClass =()=> {
    return (
      <div>
        <h1 className='title'>Class</h1>
      <h2 className='subtitle'>Schedule Class</h2>
      <div className='card-content'>
        <div className='content'>
        <form className='box'>
        <div className='field'>
                    <label className='label'>Class</label>
                    <div className='control'>
                      <input type="text" className="input" placeholder="Name"/>
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label'>Start</label>
                    <div className='control'>
                      <input type="text" className="input" placeholder="starting time"/>
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label'>Ends</label>
                    <div className='control'>
                      <input type="text" className="input" placeholder="ending time"/>
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label'>Zoom Link</label>
                    <div className='control'>
                      <input type="text" className="input" placeholder="Zoom Link"/>
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

export default FormScheduleClass