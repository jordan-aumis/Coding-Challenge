import React, { Component } from 'react'

export default class MovieIdComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {movie: ''}
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/movies")
            .then((response) => { return response.json(); })
            .then((result) => {
                for (let i = 0; i < result.length; i++) {
                     if (result[i].id_content == this.props.match.params.id) {
                        console.log(result[i])
                        this.setState({ movie: result[i]})
                    }
                    
                }
            })
    }

    render() {
        console.log(this.props.match.params.id);
        console.log(this.state.movie.title);
        console.log(this.state.movie.url_video);
        const video = <iframe width="1000" height="700" src={this.state.movie.url_video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture " allow="fullscreen"></iframe>
        return (
            <div className="content-page">
                <h2 className="title-content">{this.state.movie.title}({this.state.movie.release_year})</h2>
                <h3>{this.state.movie.description_content}</h3>
                {video}
            </div>
        )
    }
}
