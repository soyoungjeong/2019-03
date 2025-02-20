import { useReducer } from 'react';

function defaultReducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useFetch(reducer = defaultReducer) {
  const [state, dispatch] = useReducer(reducer, {
    loading: null,
    data: null,
    error: false,
  });

  const fetchToAPI = query =>
    fetch(`${process.env.REACT_APP_API_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query }),
    });

  const fetchData = async (query, callback = () => {}) => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await fetchToAPI(query);
      const { data } = await response.json();
      dispatch({ type: 'SUCCESS', data });
      callback(data);
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  return { state, dispatch, fetchData };
}

export default useFetch;

/**
 * honor code: https://react.vlpt.us/
 */
