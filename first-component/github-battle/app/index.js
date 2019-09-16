import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from "./components/Popular";
import Battle from "./components/Battle";

// Component composed of:
// State
// Lifecycle
// UI

class App extends React.Component {
    render() {
        // JSX will get converted by Babel to JS to return React.createElement(...)
        return (
            <div className='container'>
                {/*<Popular />*/}
                <Battle />
            </div>
        )
    }
}

ReactDOM.render(
    <App />, // React Element,
    document.getElementById('app') // Where to render the element to
);