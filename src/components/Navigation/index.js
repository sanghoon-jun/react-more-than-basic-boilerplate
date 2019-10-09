import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = props => {
  return (
    <section className="hero is-primary">
      <div className="hero-body level">
        <div className="level-left">
          <span className="title is-3">Navigation</span>
        </div>
        <div className="level-left">
          <div className="buttons">
            <Link to="/" className="button">
              HOME
            </Link>
            <Link to="/container" className="button">
              CONTAINER
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
