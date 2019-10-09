import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Navigation from '../Navigation';
import {_readTodos} from '../../actions/todos';

const Container = props => {
  const {readTodos, isLoaded, data} = props;

  useEffect(
    () => {
      if (!isLoaded) readTodos();
    },
    [isLoaded, readTodos],
  );

  return (
    <div>
      <Navigation />
      <div className="section">
        <div className="container">
          {' '}
          {!isLoaded ? (
            'loading'
          ) : (
            <ul>
              {data.map((todo, i) => (
                <li key={i}>{todo}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {isLoaded: state.todos.isLoaded, data: state.todos.data};
};
const mapDispatchToProps = dispatch => {
  return {
    readTodos: () => dispatch(_readTodos()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
