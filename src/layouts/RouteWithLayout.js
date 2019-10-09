import React from 'react';
import {Route} from 'react-router-dom';

const RouteWithLayout = ({component: Component, layout: Layout, ...rest}) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout {...matchProps}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
