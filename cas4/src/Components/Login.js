import React from 'react';
import { Input } from './Input';

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            inputType: "password"
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    togglePassword = () => {
        this.setState({
            inputType: this.state.inputType === "password"? "text": "password"
        })
    }

    render() {
        return (
            <div id="login">
                <form onSubmit={this.submitForm}>
                    <Input
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={this.handleChange}
                    />
                    <Input
                        type={this.state.inputType}
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        toggle={this.togglePassword}
                    />
                    <button className="action-button">Sign In</button>
                </form>
            </div>
        )
    }
}