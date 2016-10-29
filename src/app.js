import React from 'react'
import ReactDOM from 'react-dom'
import { SearchForm } from './search-form'
import axios from 'axios'
import {
    Router,
    Route,
    hashHistory,
    Link
} from 'react-router'

const Header = (props) => (

        <header> 
            <h1> {props.title} </h1>
            <SearchForm />
        </header>

)

const Home = () => (
    <section>
        <Nav />
        <h1>This is HOME</h1>
    </section>

)

const Nav = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
        </ul>
    </nav>
)

const MovieList = (props) => (
    <ul>
    {props.movies.map((movie, i) => {
        return (
            <li key={i}>
            <h4>{movie.Title}</h4>
            <img src={movie.Poster} />
            </li>
        )
    })}
    </ul>
)


class Search extends React.Component {


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
                    <Nav />
                    <h1> Movie Collection</h1>
                    <SearchForm onSearchSubmit={this.onSearch.bind(this)} />
                    <MovieList movies={this.state.movies} />
                 </section>

    )  

    }
}


class Main extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" 
                    component={Home}
                />
                <Route path="/search" 
                    component={Search}
                />
            </Router>
        )
    }
}





const element = document.getElementById('app')
ReactDOM.render(<Main />, element)