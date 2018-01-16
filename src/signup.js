import React from 'react';
import firebase from 'firebase';
import './signup.css';
import Login from "./login";
// import { Field } from 'redux-form';
var config = {
    apiKey: "AIzaSyBLLJ276KUoqKR8DDkJyT47rr7KSd16CN0",
    authDomain: "fir-web-learn-d4360.firebaseapp.com",
    databaseURL: "https://fir-web-learn-d4360.firebaseio.com",
    projectId: "fir-web-learn-d4360",
    storageBucket: "fir-web-learn-d4360.appspot.com",
    messagingSenderId: "409826122402"
};
firebase.initializeApp(config);

function saveMessage(name, email, phone, password) {
    var newMesaageRef = firebase.database().ref('message').push();
    newMesaageRef.set({
        name: name,
        email: email,
        phone: phone,
        password: password
    });
}

/*const required = value => (value ? undefined : 'Required')
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
const number = value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined
const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
    value && /.+@aol\.com/.test(value)
        ? 'Really? You still use AOL for your email?'
        : undefined
const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined
export const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Invalid phone number, must be 10 digits'
        : undefined
export const password = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined

const renderField = ({
  input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched &&
                    ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
            </div>
        </div>
    )*/

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            registerSuccess: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        alert("hiiiii");
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var password = document.getElementById("pass").value;
        console.log("+++", name, email, phone, password);
        saveMessage(name, email, phone, password);
        document.getElementById("myForm").reset();
        this.setState({
            registerSuccess: false
        })
    }

    render() {

        return (<div>
            {this.state.registerSuccess ? <div className="signupText">

                <form onSubmit={this.handleSubmit} id="myForm">
                    <h1 className="signup">Sign up</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                        Donec auctor neque sed pretium luctus.</p>
                    <div class="addPhotoButton"><button class="addphotoClass">Add<br /> Photo</button></div>
                    <div class="inputDiv">
                        <input id="name"
                            class="inputText"
                            type="text"
                            placeholder="Name and Surname" />

                    </div>
                    <div class="inputDiv">
                        <input id="email"
                            class="inputText"
                            type="text"
                            placeholder="Email Address" />
                        {/*<Field id="email"
                            class="inputText"
                            name="email"
                            type="email"
                            component={renderField}
                            label="Email"
                            validate={email}
                            warn={aol}
                        />*/}
                    </div>
                    <div class="inputDiv">
                        <input id="phone"
                            class="inputText"
                            type="text"
                            placeholder="Phone" />
                        {/*<Field id="phone"
                            class="inputText"
                            name="phone"
                            type="number"
                            component={renderField}
                            label="Phone number"
                            validate={[required, phoneNumber]}
                        />*/}
                    </div>
                    <div class="inputDiv">
                        <input id="pass"
                            class="inputText"
                            type="password"
                            placeholder="Password" />
                        {/*<Field id="pass"
                            class="inputText"
                            name="password"
                            type="password"
                            component={renderField}
                            label="Password"
                            validate={[required, password]}
                        />*/}
                    </div>
                    <div><input type="submit" value="Register" class="registerText" /></div>
                </form>
            </div> : <Login />}

        </div>
        );
    }
}

export default Signup;