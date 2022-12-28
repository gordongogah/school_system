import React from 'react'
import { Link } from 'react-router-dom'

const ClassList =() => {
    return (
      <div>
         <h1 className='title'>Classes</h1>
          <h2 className='subtitle'>Classes Schedules</h2>
          <Link to="/classes/add" className="button is-primary mb-2">
          Schedule Class
        </Link>
          <table className='table is-striped is-fullwidth '>
            <thead>
              <tr>
                <th>No</th>
                <th>Class</th>
                <th>Starts</th>
                <th>Ends</th>
                <th>Zoom Link</th>
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
              </tr>
            </tbody>
          </table>
      </div>
    )
  }

export default ClassList