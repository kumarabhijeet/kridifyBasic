import React from 'react';
import './login.css';
import firebase from 'firebase';
import Dashboard from './dashboard';
class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            loginLoading: false,
            loginLoading3:false,
            succes:false
        };

        this.finalSubmit = this.finalSubmit.bind(this);
    }
    clickOnRegister() {
        this.setState({
            loginLoading: true
        }, () => { this.props.onChangeValue(this.state.loginLoading) })
    }

    finalSubmit(event) {
        // let succes = false;
        event.preventDefault();
        // alert("loggggggin");
        firebase.database().ref(`message`)
            .on('value', function (data) {
                console.log('----------------->', data.val())
                var retrieveData = data.val();
                var email = document.getElementById("loginEmailId").value;
                console.log("page email...",email);
                var password = document.getElementById("loginPassId").value;
                console.log("page password...",password);
                var keys = Object.keys(retrieveData);
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
                    console.log("kkkkk", k);
                    var finalEmail = retrieveData[k].email;
                     console.log("firebase email....",finalEmail)
                    var finalPass = retrieveData[k].password;
                    console.log("firebase password....",finalPass)
                    if (finalEmail === email && finalPass === password) {
                        this.setState({succes : true});
                        alert("final.....");
                        break;
                    }
                    else {
                        this.setState({succes : false});
                        alert("login failed...")
    
                    }
                }

            })

        if (this.state.succes) {
            alert("dashboard displayed....")
            this.setState({
                loginLoading3: true
            })
        } else {
            alert("dashboard not displayed....")
            this.setState({
                loginLoading3: false
            })
        }

    }

    render() {
        return (
            <div> {this.state.loginLoading3?<Dashboard/>:<div className="loginPage">
               <form onSubmit={this.finalSubmit} id="loginForm">
                    {
                        this.state.loginLoading ? '' : <div><h1 className="welcome">Welcome</h1>
                            <p class="loremText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                Donec auctor neque sed pretium luctus.</p>

                            <div class="inputDiv"><input class="inputText" id="loginEmailId" type="text" placeholder="Email Address" /></div>
                            <div class="inputDiv"><input class="inputText" id="loginPassId" type="password" placeholder="Password" /></div>

                            <div><input type="submit" value="Login" class="loginText" /></div>
                            <p class="forgotText">Forgot Password</p>
                            <span>|</span>
                            <p class="registerText" onClick={this.clickOnRegister.bind(this)}>Register</p></div>
                    }
                </form>
               </div>}
            
            </div>
        )
    }
}
export default Login;