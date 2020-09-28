import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Content = (props) => {
    return (
        <div className="card-content" id={props.id_content}>
        <h2>{props.title}</h2>
        <img src={props.url}/>
        <Link to={"/"+props.category+"/"+props.id_content}>Voir</Link>
        </div>
    );
}

export default Content;
