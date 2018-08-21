import * as types from './action-types';
import errors from '../func/validateData'
import API from '../func/API'

const sendUserData = (payload = {}) => {
    const checkForErrors = errors({ name: payload.name, lastName: payload.lastName, email: payload.email, date: payload.date });
    if (checkForErrors.name === '' &&
    checkForErrors.lastName === '' && 
    checkForErrors.email === '' && 
    checkForErrors.date === '') { return API(payload) }
    else {
        return ({
            type: types.SEND_USER_DATA_FAIL, 
            nameError: checkForErrors.name, 
            lastNameError: checkForErrors.lastName, 
            emailError: checkForErrors.email, 
            dateError: checkForErrors.date
        })
    }
};

export default sendUserData;

