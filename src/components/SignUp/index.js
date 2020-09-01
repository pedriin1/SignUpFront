import React, { Component } from 'react';
import signUp2 from '../../img/signUp.png';
import './styles.css'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {

            signPassword1: '',
            signPassword2: '',
            verificacao: '',
            flag: '',

            email: '',
            first_name: '',
            last_name: '',
            fone: '',
            password: '',
            img: ''

        }
        this.signSubmit = this.signSubmit.bind(this);

    }
    signSubmit(e) {
        if (this.state.flag === '1') {
            console.log('oi')
            var url = '';
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: this.state.email, first_name: this.state.first_name,
                    last_name: this.state.last_name, fone: this.state.fone, password: this.state.password
                })
            };
            requestOptions.headers["Authorization"] = "Token 89cc7e6ffc781d3dee5507f531013bcd0c9009ba"
            fetch(url, requestOptions)
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('token', data.token);
                    if (localStorage.getItem('token') === 'undefined') {
                        localStorage.removeItem('token')
                        this.setState({ erro: true })
                    }
                    this.setState({ token: data.token });
                })
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
                            <input type="text" className='firstNameSign' placeholder="Primeiro Nome"
                                onChange={(e) => { this.setState({ first_name: e.target.value }) }} />
                            <input type="text" className='lastNameSign' placeholder="Segundo Nome"
                                onChange={(e) => { this.setState({ last_name: e.target.value }) }} />
                        </div>


                        <input type="text" className='nameSign' placeholder="Telefone" required
                            onChange={(e) => { this.setState({ fone: e.target.value }) }} />


                        <input type="password" className="passwordInput" placeholder='Digite uma senha' required
                            onChange={(e) => { this.setState({ signPassword1: e.target.value }) }} />


                        <input type="password" className="password2Input" placeholder='Repita sua senha' required
                            onChange={async (e) => {
                                this.setState({ signPassword2: e.target.value })

                                if (this.state.signPassword1 !== this.state.signPassword2) {

                                    await this.setState({ verificacao: 'As senhas são diferentes' })
                                    await this.setState({ flag: '' })
                                    console.log(this.state.signPassword1 + ' ' + this.state.signPassword2)

                                } if (this.state.signPassword1 === this.state.signPassword2) {
                                    await this.setState({ verificacao: '' })
                                    await this.setState({ flag: '1' })
                                }
                            }} />

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