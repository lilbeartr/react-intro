import React from 'react'
import ReactDOM from 'react-dom'
import { SearchForm } from './search-form'
import axios from 'axios'

const Header = (props) => (

        <header> 
            <h1> {props.title} </h1>
            <SearchForm />
        </header>

)

const MovieList = (props) => (
    <ul>
    {props.movies.map((movie, i) => {
        return (
            <li key={i}>{movie.Title}</li>
        )
    })}
    </ul>
)


class App extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    onSearch(query) {
        axios.get(`http://www.omdbapi.com/?s=${query}&plot=short&r=json`)
        .then(response => {
            const movies = response.data.Search 
            this.setState({
                movies: movies
            })
        })
    }
    render() {
            return (
                <section>
                    <h1> Movie Collection</h1>
                    <SearchForm onSearchSubmit={this.onSearch.bind(this)} />
                    <MovieList movies={this.state.movies} />
                 </section>

    )  

    }
}






const element = document.getElementById('app')
ReactDOM.render(<App />, element)