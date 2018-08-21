import React from 'react';
import { connect } from "react-redux";

import Header from './Header';
import TextInput from './TextInput'
import DateInput from './DateInput'
import Label from './Label'
import SubmitInput from './SubmitInput';

import sendUserData from '../actions/send-data';

const ContactForm = (props) => {
    return (
        
        <form onSubmit={(e) => {
            e.preventDefault();
            props.dispatch(sendUserData({
                name: props.name, 
                lastName: props.lastName, 
                email: props.email, 
                date: props.date})
            )}
        }>
            <div className='container'>
                <Header 
                    title="Contact form" 
                    subtitle="Personal data" 
                />
<div className="widget">
                <TextInput 
                    name='name' 
                    placeholder='Your first name (required)' 
                    value={props.name} 
                />
                <Label 
                    name='nameError' 
                    value={props.nameError}
                />
            
                <TextInput 
                    name='lastName' 
                    placeholder='Your last name (required)' 
                    value={props.lastName}
                />
                <Label 
                    name='lastNameError' 
                    value={props.lastNameError}
                />
                
                <TextInput 
                    name='email' 
                    placeholder='Your e-mail address (required)' 
                    value={props.email}
                />
                <Label 
                    name='emailError' 
                    value={props.emailError}
                />
</div>
                <Header 
                    subtitle="Event date" 
                />
                
                <DateInput 
                    name='date' 
                    value={props.date} 
                />

                <Label 
                    name='dateError' 
                    value={props.dateError} 
                />

                <SubmitInput 
                    title="Send data!"
                />
            </div>
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        lastName: state.lastName,
        email: state.email,
        date: state.date,
        nameError: state.nameError,
        lastNameError: state.lastNameError,
        emailError: state.emailError,
        dateError: state.dateError
    }
};

export default connect(mapStateToProps)(ContactForm);
