import React from 'react'
import { Link } from 'react-router-dom'

const ParentList =()=>{
  return (
    <div>
       <h1 className='title'>Parents</h1>
        <h2 className='subtitle'>List of Parents</h2>
        <Link to="/parents/add" className="button is-primary mb-2">
        Add New Parent
      </Link>
        <table className='table is-striped is-fullwidth '>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Student</th>
              <th>Password</th>
              <th>Created By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td> 
            </tr>
          </tbody>
        </table>
    </div>
  )
}


export default ParentList