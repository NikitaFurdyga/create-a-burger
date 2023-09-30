import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
   <div className="container">
        <Link to="/">
          <button>Домой</button>
        </Link>
        <Link to="/News">
          <button>Страница три</button>
        </Link>
   </div>
  );
}

export default About;