import axios from 'axios'

export const READ_EVENTS = 'READ_EVENT';
export const CREATE_EVENTS = 'READ_EVENT';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERY_STING = '?token=token123';

export const readEvent = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERY_STING}`);
    dispatch({type: READ_EVENTS, response})
};

export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERY_STING}`, values);
    dispatch({type: CREATE_EVENTS, response})
};