import React, { Component } from 'react'

export default class SerieIdComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {serie: ''}
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/series")
            .then((response) => { return response.json(); })
            .then((result) => {
                for (let i = 0; i < result.length; i++) {
                     if (result[i].id_content == this.props.match.params.id) {
                        console.log(result[i])
                        this.setState({ serie: result[i]})
                    }
                    
                }
            })
    }

    render() {

        const video = <iframe width="1000" height="700" src={this.state.serie.url_video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture " allow="fullscreen"></iframe>
        return (
            <div className="content-page">
                <h2 className="title-content">{this.state.serie.title}({this.state.serie.release_year})</h2>
                <h3>{this.state.serie.description_content}</h3>
                {video}
            </div>
        )
    }
}
