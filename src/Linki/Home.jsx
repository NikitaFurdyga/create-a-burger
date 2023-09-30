import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
   <div className="container">
        <Link to="/About">
          <button> Страница два</button>
        </Link>
        <Link to="/News">
          <button>Страница три</button>
        </Link>
   </div>
  );
}

export default Home;