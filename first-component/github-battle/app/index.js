import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// Component composed of:
// State
// Lifecycle
// UI

class App extends React.Component {
    render() {
        return <div>Hello World</div> // JSX will get converted by Babel to JS e.g.: React.createElement(...)
    }
}

ReactDOM.render(
    <App />, // React Element,
    document.getElementById('app') // Where to render the element to
);