import React from 'react';
import { Link } from 'react-router-dom';

function News() {
  return (
    <div className="container">
        <Link to="/">
          <button>Домой</button>
        </Link>
        <Link to="/About">
          <button>  Страница два  </button>
        </Link>
</div>
);
}

export default News;