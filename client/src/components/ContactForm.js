import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import TextInput from "./TextInput"
import DateInput from "./DateInput"
import Label from "./Label"
import SubmitInput from "./SubmitInput";

import sendUserData from "../actions/send-data";

export const ContactForm = (props) => (
    <form 
        autoComplete="on" 
        onSubmit={(e) => {
            e.preventDefault();
            props.dispatch(sendUserData({
                name: props.name, 
                lastName: props.lastName, 
                email: props.email, 
                date: props.date })
            )}
        }>

        <div className="container">
            <Header 
                title="Contact form" 
                subtitle="Personal data" 
            />

            <TextInput 
                name="name" 
                placeholder="Your first name (required)" 
                type="text"
                pattern="([a-zA-Z]){2,30}"
                value={props.name}
            />
        
            <TextInput 
                name="lastName" 
                placeholder="Your last name (required)" 
                type="text"
                pattern="([a-zA-Z]){2,30}"
                value={props.lastName}
            />
            
            <TextInput 
                name="email" 
                placeholder="Your e-mail address (required)" 
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                value={props.email}
            />

            <Header 
                subtitle="Event date" 
            />
            
            <DateInput 
                name="date" 
                value={props.date} 
            />

            <Label 
                name="errorLabel" 
                value={props.connectionError} 
            />

            <SubmitInput 
                title="Send data!"
            />
        </div>
    </form>
);

const mapStateToProps = (state) => (
    {
        name: state.name,
        lastName: state.lastName,
        email: state.email,
        date: state.date,
        connectionError: state.connectionError
    }
);

export default connect(mapStateToProps)(ContactForm);
