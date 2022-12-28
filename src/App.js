import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Students from "./pages/Students";
import Parents from "./pages/Parents";
import Instructor from "./pages/Instructor";
import AddStudents from "./pages/AddStudents";
import AddParent from "./pages/AddParent";
import AddUser from "./pages/AddUser";
import AddInstructor from "./pages/AddInstructor";
import EditPArents from "./pages/EditPArents";
import EditStudents from "./pages/EditStudents";
import EditUsers from "./pages/EditUsers";
import EditInstructors from "./pages/EditInstructors";
import Class from "./pages/Class";
import AddClass from "./pages/AddClass";
import EditClassSchedule from "./pages/EditClassSchedule";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/users/add" element={<AddUser />}/>
          <Route path="/users/edit/:id" element={<EditUsers />}/>
          <Route path="/students" element={<Students />}/>
          <Route path="/students/add" element={<AddStudents />}/>
          <Route path="/students/edit/:id" element={<EditStudents />}/>
          <Route path="/parents" element={<Parents />}/>
          <Route path="/parents/add" element={<AddParent />}/>
          <Route path="/parents/edit/:id" element={<EditPArents />}/>
          <Route path="/instructor" element={<Instructor />}/>
          <Route path="/instructor/add" element={<AddInstructor />}/>
          <Route path="/instructor/edit/:id" element={<EditInstructors />}/>
          <Route path="/classes" element={<Class />}/>
          <Route path="/classes/add" element={<AddClass />}/>
          <Route path="/classes/edit/:id" element={<EditClassSchedule />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
