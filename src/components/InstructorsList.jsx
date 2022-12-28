import React from 'react'
import { Link } from 'react-router-dom';

const InstructorsList =()=> {
  return (
    <div>
        <h1 className='title'>Instructors</h1>
        <h2 className='subtitle'>List of Instructors</h2>
        <Link to="/instructor/add" className="button is-primary mb-2">
        Add New Instructor
      </Link>
        <table className='table is-striped is-fullwidth '>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
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
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default InstructorsList