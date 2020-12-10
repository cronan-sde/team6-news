import React from 'react';
import Welcome from './welcome/Welcome.jsx';
import User from './user/User.jsx';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            searchBar: '',
            successfulLogin: false
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render () {
        if (this.state.successfulLogin === false) {
            return (
                <div>
                    <Welcome onChangeSearch={this.onChange}/>
                </div>
            )
        } else {
            return (
                <div>
                    <User />
                </div>
            )
        }
    }
}