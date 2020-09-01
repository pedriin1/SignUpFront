import React, { Component } from 'react';
import Laptop from '../../img/laptop.png';
import './styles.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signName: '',
            signEmail: '',
            signPassword1: '',
            signPassword2: '',
        }
        this.signSubmit = this.signSubmit.bind(this);
    }
    signSubmit(e){
        if(this.state.signPassword1 === this.state.signPassword2){
            console.log('As senhas sao iguais');
        }else{
            console.log('as senhas n sao iguais');
        }
        
        e.preventDefault();
    }
    render() {
        return (
            <section className="signUpAndLogin">
                <img src={Laptop} alt="Icon" className='iconSign' />
                
                <div className="forms">
                    <form className="signIn">
                        <h1>Log-In</h1>
                        <input type="email" className="emailLoginInput" placeholder='Digite seu email de cadastro' />
                        <input type="password" className="passwordLoginInput" placeholder='Digite sua senha' />
                        <button type="submit" className="buttonLogin">Log in</button>
                    </form>
                    <span>Não possui cadastro? </span>
                </div>

            </section>
        );
    }
}

export default SignIn;