import React, { Component } from 'react'

export default class Header extends Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <header>
                <nav className="header-nav">
                <h1 className="header-title">Demo Streaming</h1>
                    <ul>
                        <li>Log-in</li>
                        <li>Start your free trial</li>
                    </ul>
                </nav>
            </header>
        )
    }
}
