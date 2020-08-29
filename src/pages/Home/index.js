import React, { Component } from 'react';
import SignUp from '../../components/SignUp';
import './styles.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="homePage">
            <SignUp/>
            </div>
         );
    }
}
 
export default Home;