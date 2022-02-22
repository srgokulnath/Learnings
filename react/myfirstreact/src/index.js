import React from 'react'
import ReactDom, { render } from 'react-dom'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: '0'
        }
    }
    increasecount = () => {
        this.setState({ count: this.count + 1 })
    }

    render() {
        return (
            <div>
                <button type='button' onClick={this.increasecount}>increse count </button>
                <h2>
                    {this.state.count}</h2>
            </div>
        )
    }
}
ReactDom.render(<App />, document.getElementById('root'))