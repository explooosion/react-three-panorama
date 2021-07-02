export const FETCH_EXAMPLE = 'FETCH_EXAMPLE';
export const FETCH_EXAMPLE_SUCCESS = 'FETCH_EXAMPLE_SUCCESS';
export const FETCH_EXAMPLE_ERROR = 'FETCH_EXAMPLE_ERROR';

const initialState = {
  lists: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXAMPLE:
      return { ...state, loading: true };
    case FETCH_EXAMPLE_SUCCESS:
      return { ...state, lists: action.payload, loading: false };
    case FETCH_EXAMPLE_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
