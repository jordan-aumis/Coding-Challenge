import React, { Component } from 'react'
import fbLogo from './facebook-white.svg'
import instLogo from './instagram-white.svg'
import ttrLogo from './twitter-white.svg'
import appStore from './app-store.svg'
import playStore from './play-store.svg'
import windowStore from './windows-store.svg'
export default class Footer extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <footer>
                <ul>
                    <li className="termes">
                        <a>Home |</a><a> Terms and conditions |</a><a> Privacy Policy |</a><a> Collection Statement |</a><a> Help |</a> <a>Manage Account </a>
                    </li>
                </ul>
                <nav className="footer-nav">
                    <ul className="left-list">
                        <li>
                            <img src={fbLogo} width="20px"></img>
                        </li>
                        <li>
                            <img src={ttrLogo} width="30px"></img>
                        </li>
                        <li>
                            <img src={instLogo} width="30px"></img>
                        </li>
                    </ul>
                    <ul className="right-list">
                        <li>
                            <img src={appStore} width=""></img>
                        </li>
                        <li>
                            <img src={playStore} width=""></img>
                        </li>
                        <li>
                            <img src={windowStore} width="110px"></img>
                        </li>
                    </ul>
                </nav>
            </footer>
        )
    }
}
