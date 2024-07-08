import React from 'react';
import { Link } from 'react-router-dom';
// import '../../styles/Home.css';
import '../styles/Home.css';

const Home = () => {
  return (
    <div id="div">
      <h5 id="head">A digital initiative by the institute facilitating Teachers,Students and Parents to access and process Academics,Research,Supporting Services at one common platform.</h5>
      <nav id="nav">
          <Link id="l1" to="/parent-login"  class="mx-3 p-5   btn  btn-outline-primary "  >Parent Login</Link>
          <Link id="l2" to="/teacher-login"  class="mx-3 p-5 btn  btn-outline-success"  >Teacher Login</Link>
          <Link id="l3"to="/student-login"  class="mx-3 p-5 btn  btn-outline-secondary"  >Student Login</Link>
        
      </nav>
    </div>
  );
}

export default Home;

