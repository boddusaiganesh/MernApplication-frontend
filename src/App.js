import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Head from './components/Head'; 
// import Nav from './components/Nav';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Layout from './components/Layout';
// import Home from './components/Home/Home';
import ParentLogin from './components/ParentLogin/ParentLogin';
import TeacherLogin from './components/TeacherLogin/TeacherLogin';
import StudentLogin from './components/StudentLogin/StudentLogin';
import ParentDashboard from './components/ParentLogin/ParentDashboard';
import TeacherDashboard from './components/TeacherLogin/TeacherDashboard';
import StudentDashboard from './components/StudentLogin/StudentDashboard';
import StudentMarks from './components/ParentLogin/StudentMarks';
import Attendance from './components/ParentLogin/Attendance';
import Profile from './components/StudentLogin/Profile';
import CoursesList from './components/StudentLogin/CoursesList';
import StudMarks from './components/StudentLogin/StudMarks';
import Attend from './components/StudentLogin/Attend';
import TeacherProfile from './components/TeacherLogin/TeacherProfile';
import CoursesHandled from './components/TeacherLogin/CoursesHandled';
import UpdateMarks from './components/TeacherLogin/UpdateMarks';
import UpdateAttendance from './components/TeacherLogin/UpdateAttendance';


import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import EditStudent from './components/EditStudent';



function App() {



  return (
   
    <div>
      <BrowserRouter>
      <Head />

      {/* <Header /> */}
      {/* <Layout /> */}
      {/* <Home /> */}

      {/* <Footer /> */}
      <Routes>
      <Route path='/' element={<Layout />} ></Route>
      <Route path="/create-student" element={<CreateStudent />}></Route>
        <Route path="/student-list" element={<StudentList />}></Route>
        <Route path="/edit-student/:id" element={<EditStudent />}></Route>
        <Route path='/register' element={<Signup />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path="/parent-login" element={<ParentLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-marks" element={<StudentMarks />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/stud-marks" element={<StudMarks />} />
        <Route path="/attend" element={<Attend />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses-list" element={<CoursesList />} />
        <Route path="/teacher-profile" element={<TeacherProfile />} />
        <Route path="/courses-handled" element={<CoursesHandled />} />
        <Route path="/update-marks" element={<UpdateMarks />} />
        <Route path="/update-attendance" element={<UpdateAttendance />} />

      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
