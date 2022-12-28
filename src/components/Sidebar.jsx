import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import {IoPerson,IoHome,IoLogOut} from 'react-icons/io5';
import {useDispatch,useSelector} from 'react-redux'


const Sidebar=()=> {
  return (
    <div>
      <aside className='menu pl-2 has-shadow'>
      <p className='menu-label'>General</p>
      <ul className='menu-list'>
        <li>
          <NavLink to={"/dashboard"}>
            <IoHome/> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Students"}>
            <IoPerson/> Students
          </NavLink>
        </li>
        <li>
          <NavLink to={"/parents"}>
            <IoPerson/> Parents
          </NavLink>
        </li>
        <li>
          <NavLink to={"/instructor"}>
            <IoPerson/> Instructors
          </NavLink>
        </li>
        <li>
          <NavLink to={"/users"}>
            <IoPerson/> Users
          </NavLink>
        </li>
        <li>
          <NavLink to={"/classes"}>
            <IoHome/> Classes
          </NavLink>
        </li>
        <li>
          <NavLink to={"/assignments"}>
            <IoHome/> Assigment
          </NavLink>
        </li>
        <li>
          <NavLink to={"/assignments"}>
            <IoHome/> Diaries
          </NavLink>
        </li>
        <li>
          <NavLink to={"/assignments"}>
            <IoHome/> Review & Ratings
          </NavLink>
        </li>
        <li>
          <NavLink to={"/assignments"}>
            <IoHome/> Course Mangement
          </NavLink>
        </li>
        <li>
          <NavLink to={"/lecture"}>
            <IoHome/> Lesson planning
          </NavLink>
        </li>
        <p className='menu-label'>Settings</p>
        <ul className='menu-list'>
          <li>
            <button className='button is-white'>
              <IoLogOut/> Logout
            </button>
          </li>
        </ul>
      </ul>

      </aside>
    </div>
  )
}

export default Sidebar