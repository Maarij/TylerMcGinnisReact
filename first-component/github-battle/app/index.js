import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from "./components/Popular";

// Component composed of:
// State
// Lifecycle
// UI

class App extends React.Component {
    render() {
        // JSX will get converted by Babel to JS to return React.createElement(...)
        return (
            <div className='container'>
                <Popular />
            </div>
        )
    }
}

ReactDOM.render(
    <App />, // React Element,
    document.getElementById('app') // Where to render the element to
);