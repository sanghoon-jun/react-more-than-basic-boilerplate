import * as types from '../actions/types';

export const _readTodos = () => {
  return dispatch => {
    dispatch({type: types.READ_TODO});
    // You can implement api request here
    setTimeout(() => {
      dispatch({
        type: types.READ_TODO_SUCCESS,
        data: ['sample1', 'sample2'],
      });
    }, 1000);
  };
};
