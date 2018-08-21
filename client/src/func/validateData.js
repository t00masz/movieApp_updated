import today from './getDate'

const checkName = name => {
    const regex = /^([a-zA-Z ]){2,30}$/;
    return !regex.test(name);
}

const checkEmail = email => {
    const regex = /^([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)/;
    return !regex.test(email);
}

const errors = dataToValidate => {
    const error = {name: '', lastName: '', email: '', date: ''}
    if (checkName(dataToValidate.name)){ error.name = 'Name is incorrect.' }
    if (checkName(dataToValidate.lastName)){ error.lastName = 'Last name is incorrect.' }
    if (checkEmail(dataToValidate.email)){ error.email = 'E-mail address is incorrect.' }
    if (dataToValidate.date < today()) { error.date = 'This date has already passed.' };
    if (!dataToValidate.date || dataToValidate.date === 0){ error.date = 'Date is required.' };
    return error
}

export default errors;