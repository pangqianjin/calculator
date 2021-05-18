import React, { Component } from 'react'
import Pubsub from 'pubsub-js'

export default class DataOperationButton extends Component {
    state = {
        value: ''
    }

    chooseOpertaion = ()=>{
        Pubsub.publish('chooseOpertaion', this.state.value)
        Pubsub.publish('updateDisplay')
    }

    componentDidMount(){
        this.setState({value: this.props.value})
    }

    render() {
        const {value} = this.props
        return (
            <button onClick={this.chooseOpertaion}>{value}</button>
        )
    }
}
