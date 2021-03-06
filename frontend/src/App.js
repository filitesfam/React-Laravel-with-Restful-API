import React, { Component } from 'react'
import './App.css'
import List from './Name'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            items: []
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h1 className="text-center">Crude Operation</h1>
                        <List />
                    </div>
                </div>
            </div>
        )
    }
}

export default App