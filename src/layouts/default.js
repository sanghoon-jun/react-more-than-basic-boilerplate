import React from 'react';
import Navigation from '../components/Navigation';

const DefaultLayout = props => {
  return (
    <div>
      <Navigation />
      <div className="section">
        <div className="container">{props.children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
