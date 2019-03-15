import React, {Component} from 'react';
import './css/style.css'



class  Main extends Component {
    validateForm = () =>{
        var regex_for_mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var regex_for_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;  
       
    
        if(regex_for_mail.test(this.email.value) == false){
            this.email.style.borderColor = "1px solid #e8a0a1";
            this.pEmail.innerText = "Please insert valid Email"
            return this.pEmail.style.display = "block";
        }
        if (regex_for_pass.test(this.pass.value) == false){
            this.pass.style.borderColor = "1px solid #e8a0a1";
            this.pPass.innerText = "Password is not match!"
            return this.pPass.style.display = "block";
        };
        if (this.pass.value!== this.confPass.value){
            console.log(this.pass.value)
            this.confPass.style.borderColor = "red";
        };
    }
      pages = (event) => {
        if (event.target.id === "signup") {
          this.page1.style.background = "linear-gradient(to right, #a1abe9 0%, #71ead7 100%)";
          this.page2.style.background = "none";
          this.SignUP.style.display = "none";
          this.SignIn.style.display = "block";
        };
        if (event.target.id === "signin") {
          this.page2.style.background = "linear-gradient(to right, #a1abe9 0%, #71ead7 100%)";
          this.page1.style.background = "none";
          this.SignIn.style.display = "none";
          this.SignUP.style.display = "block";
        };
      };
    



    render (){
        return (
            <React.Fragment>
            <div className="main_bg">
                <div className="container">
                    <div className="first_item"></div>
                    <div className="second_item">
                            <div className="reg_form">
                                    <div className="sign_up" onClick={this.pages}   ref={el=>this.page1=el} onClick={this.pages} ><p className="signup_p">Sign Up</p> </div>
                                    <div className="Login"  onClick={this.pages} ref={el=>this.page2=el} onClick={this.pages} ><p className="login_p">Login</p></div>
                            </div>
                            <div id="form_sectiion">  
                                <form id="signUp_form"  ref={el=>this.SignIn=el} >
                                    <input type="name" ref ={el => this.name = el} className="inputs" id="form_name" value="" placeholder="John Doe"/>
                                    <input type="email"ref={el=>this.email=el} className="inputs" id="form_email" value="" placeholder="e-mail"/>
                                    <p id="pemail" ref ={el => this.pEmail = el}></p>
                                    <input type="password"  ref={el=>this.pass=el} className="inputs" id="form_psw" value="" placeholder="password"   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
                                    <input type="password"  ref={el =>this.confPass= el} className="inputs" id="confirm_psw" value="" placeholder="confirm password" />
                                    <p id="ppass" ref ={el => this.pPass = el}></p>
                                    <input type="checkbox" className="checkbox"/> 
                                    <span>I agree all statemen in <a href="#"> Term and conditons</a></span>
                                    <input type="button" id="button" value="SIGN UP" onClick= {this.validateForm}/>
                                    <span className="sec_span">Already Have Account? <a href="#"> Login</a></span>
                                </form>
                                <form id="login_form" ref={el=>this.SignUP=el}>
                                        <input type="name" onChange={this.userNameChange} ref={input=>this.userName=input} className="inputs" id="login_username" value="" placeholder="Username"/>
                                        <input type="password" className="inputs" id="login_password" value="" placeholder="Password"/>
                                        <p id="mess_pass2"></p>
                                        <input type="checkbox" className="checkbox"/> 
                                         <span>Remember me <a href="#"> / Forget password?</a></span>
                                        <input type="button"   id="button" value="Login"  />
    
                                </form>
                            </div>
                           
                        
                </div>
                
            </div>

            </div>
            </React.Fragment>


        );
        }
    
}
export default Main