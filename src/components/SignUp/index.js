import React, { Component } from 'react';
import Laptop from '../../img/laptop.svg';
import './styles.css';

class SignUp extends Component {
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
                    <form className="signUp" onSubmit={this.signSubmit}>
                        <h1>Cadastre-se</h1>
                        <input type="text" className="nameInput" placeholder='Digite seu nome' required/>

                        <input type="email" className="emailInput" placeholder='Digite um email' required/>

                        <input type="password" className="passwordInput" placeholder='Digite uma senha' required
                        onChange={(e) =>{this.setState({signPassword1: e.target.value})}}/>

                        <input type="password" className="password2Input" placeholder='Repita sua senha' required
                        onChange={(e)=>this.setState({signPassword2: e.target.value})}/>
                        
                        <button type="submit" className='buttonSubmit'>Criar conta</button>
                    </form>

                    <form className="signIn">
                        <h1>Log-In</h1>
                        <input type="email" className="emailLoginInput" placeholder='Digite seu email de cadastro' />
                        <input type="password" className="passwordLoginInput" placeholder='Digite sua senha' />
                        <button type="submit" className="buttonLogin">Log in</button>
                    </form>
                </div>

            </section>
        );
    }
}

export default SignUp;