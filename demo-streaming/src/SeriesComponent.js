import React, { Component } from 'react'
import Content from './Content'
import Loading from './Loading'
import NotFound from './NotFound'
import { Redirect } from 'react-router-dom';
export default class SeriesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            isLoading: true,
            error: false
            }
    }

     componentDidMount(){
            fetch("http://localhost:3000/series")
            .then((response) => { return response.json(); })
            .then((result) => {
                if (result) {
                    window.setTimeout(()=>this.setState({ series: result, isLoading: false}), 1000)
                }
            }) 
             if (this.state.series < 1){
                    console.log("error");
                    this.setState({error: true})
                } 
    }
    
    render() {
        const item = this.state.series.map((serie, i) => 
        <Content id_content = {serie.id_content} url={serie.url} title={serie.title} category="serie"/>
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
                    <h2 >Popular Series</h2>
                </div>
                 {showError()}
            </main>
        )
    }
}
