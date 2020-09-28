import React, { Component } from 'react'
import Loading from './Loading'
import Content from './Content'
import NotFound from './NotFound'

export default class MoviesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoading: true,
            error: false
            }
    }

    componentDidMount(){
        fetch("http://localhost:3000/movies")
        
            .then((response) => { 
            console.log(response)
             return response.json(); })
            .then((result) => {
                if (result) {
                    window.setTimeout(()=>this.setState({ movies: result, isLoading: false }), 1000)
                }
        })
 
    }
    
    render() {

        const item = this.state.movies.map((movie, i) => 
        <Content id_content = {movie.id_content} url={movie.url} title={movie.title} category="movie"/>
        )
        const showError = () => {
            if(!this.state.error){

           return (this.state.isLoading ? <Loading/> : item )
        }
            else{
                return (<NotFound/>)
            }  
        }
        return (
            <main>
                <div className="title-page">
                    <h2 >Popular Movies</h2>
                </div>
                {showError()}
            </main>
        )
    }
}
