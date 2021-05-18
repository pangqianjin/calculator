import React, { Component } from 'react'
import Pubsub from 'pubsub-js'

export default class DataNumberButton extends Component {
    state = {
        value: undefined
    }

    componentDidMount(){
        this.setState({value: this.props.value})
    }

    appendNumber = ()=>{
        Pubsub.publish('appendNumber', this.state.value)
        Pubsub.publish('updateDisplay')
    }

    render() {
        const {value} = this.props
        return (
            <button onClick={this.appendNumber}>{value}</button>
        )
    }
}
