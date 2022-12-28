import React from 'react'
import { Link } from 'react-router-dom'

const StudentList =()=> {
  return (
    <div>
       <h1 className='title'>Students</h1>
        <h2 className='subtitle'>List of Students</h2>
        <Link to="/students/add" className="button is-primary mb-2">
        Add New Student
      </Link>
        <table className='table is-striped is-fullwidth '>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>RegNo</th>
              <th>Parent</th>
              <th>Class</th>
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
              <td></td>
              <td></td> 
            </tr>
          </tbody>
        </table>
    </div>
  )
}


export default StudentList