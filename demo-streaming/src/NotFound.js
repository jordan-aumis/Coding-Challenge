import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {redirect: false}
    }
    
    componentDidMount=()=>{
        window.setTimeout(()=>this.setState({redirect: true}), 4000)
    }

    render() {
        const show = this.state.redirect ? <Redirect to="/"/> : <h2>Oops something went wrong</h2>

        return (
            <main className="error">
                {show}
            </main>
         
        )
    }
}
