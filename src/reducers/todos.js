import * as types from '../actions/types';

const initialState = {
  isLoaded: false,
  data: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case types.READ_TODO:
      return {
        ...initialState,
        isLoaded: false,
        data: [],
      };
    case types.READ_TODO_SUCCESS:
      return {
        ...initialState,
        isLoaded: true,
        data: action.data,
      };
    default:
      return state;
  }
};

export default todos;
