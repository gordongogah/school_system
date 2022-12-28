import React from 'react'
import { Link } from 'react-router-dom'

const UserList =()=> {
    return (
      <div>
          <h1 className='title'>Users</h1>
          <h2 className='subtitle'>List of Users</h2>
          <Link to="/users/add" className="button is-primary mb-2">
        Add New User
      </Link>
          <table className='table is-striped is-fullwidth '>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
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
              </tr>
            </tbody>
          </table>
      </div>
    )
  }

export default UserList