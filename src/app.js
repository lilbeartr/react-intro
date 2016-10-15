import React from 'react'
import ReactDOM from 'react-dom'

const SearchForm = () => {

    return (
        <form>
            <input type="text" />
            <button type="submit"> search </button>
        </form>
    )

}

const Header = (props) => (

        <header> 
            <h1> {props.title} </h1>
            <SearchForm />
        </header>

)

const Items = (props) => {

    console.log(props.items) 

    return (
            <ul>

                {
                    props.items.map(item => (
                     <li>{item}</li>
                    )) 
                }

             </ul>
    )

}

const Content = (props) => (

    <section>

        <p> {props.content} </p>
        <Items items={props.items} />

    </section>


)


const AppWithoutDescription = () => (

    <Header title="No description here" />
)

const App = () => {
    const appTitle = 'Fronttechs: React'
    const appContent = 'This is a simple react application Kappa123'
    const items = [ "Arteezy" , "Sumail" , "Universe" , "Zai" , "Cr1t" ]

    return (
            <section>
                 <Header title={appTitle} />
                 <Content 
                    content={appContent} 
                    items={items}
                 />
            </section>

    )  

}

const element = document.getElementById('app')
ReactDOM.render(<App />, element)