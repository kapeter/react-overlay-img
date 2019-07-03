import React from 'react'
import ReactDom from 'react-dom'
import OverlayImg from '../lib'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <OverlayImg></OverlayImg>
            </div>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById("app")
)

