import axios from 'axios';

import { FETCH_EXAMPLE, FETCH_EXAMPLE_SUCCESS, FETCH_EXAMPLE_ERROR } from '../reducers/example';

const URL = '';

/**
 * FETCH USERS - redux saga
 */
export const getUsers = async () =>
    axios.get(URL)
    .then(res => res)
    .catch(err => err);

/**
 * FETCH EXAMPLE - redux thunk
 */
export const getExample = () => async dispatch => {
  await dispatch({ type: FETCH_EXAMPLE });
  await axios
    .get(URL)
    .then(res => dispatch({ type: FETCH_EXAMPLE_SUCCESS, payload: res.data }))
    .catch(res => dispatch({ type: FETCH_EXAMPLE_ERROR, payload: res }))
}
