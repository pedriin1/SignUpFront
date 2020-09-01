import React, { Component } from 'react';
import signUp2 from '../../img/signUp.png';
import './styles.css'
import signUp from '../../img/lock.png'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signPassword1: '',
            signPassword2: '',
            verificacao: '',
            password: '',
            flag: ''
        }
        this.signSubmit = this.signSubmit.bind(this);

    }
    signSubmit(e){
        if(this.state.flag === '1'){
            console.log('oi')
        }
        e.preventDefault()
    }
    render() {
        return (
            <div>


                <section className="signUpsection">
                    <div className="image">
                        <img src={signUp2} alt="" />
                    </div>
                    <form className="signUp" onSubmit={this.signSubmit}>
                        <input type="email" className="emailInput" placeholder='Digite um email' required />
                        <div className='firstAndLastName'>
                            <input type="text" className='firstNameSign' placeholder="Primeiro Nome" />
                            <input type="text" className='lastNameSign' placeholder="Segundo Nome" />
                        </div>
                        <input type="text" className='nameSign' placeholder="Telefone" required/>

                        <input type="password" className="passwordInput" placeholder='Digite uma senha' required
                            onChange={(e) => { this.setState({ signPassword1: e.target.value }) }} />

                        <input type="password" className="password2Input" placeholder='Repita sua senha' required
                            onChange={async (e) =>  {this.setState({ signPassword2: e.target.value })

                            if(this.state.signPassword1 !== this.state.signPassword2){

                              await this.setState({verificacao : 'As senhas são diferentes'})
                              await this.setState({flag : ''})
                              console.log(this.state.signPassword1 + ' ' + this.state.signPassword2)

                            } if(this.state.signPassword1 === this.state.signPassword2){
                                await this.setState({verificacao : ''})
                                await this.setState({flag : '1'})
                            }}} />

                        <p className='verify'>{this.state.verificacao}</p>
                        <input type="file" id="file" className='inputArquivo' />

                        <div className="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" id="customCheckInline1" className="custom-control-input" required />
                            <label className="custom-control-label" htmlFor="customCheckInline1">Clicando em Aceitar você estará concordando <br /> com os <a href='#'>Termos de Uso</a></label>
                        </div>

                        <button type="submit" className='btn btn-primary'>Criar conta</button>

                    </form>
                </section>
            </div>
        );
    }
}

export default SignUp;