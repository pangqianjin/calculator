import React, { Component } from 'react'
import Pubsub from 'pubsub-js'

export default class DataDeleteButton extends Component {
    delete = ()=>{
        Pubsub.publish('delete')
        Pubsub.publish('updateDisplay')
    }

    render() {
        const {value} = this.props
        return (     
                <button onClick={this.delete}>{value}</button>
        )
    }
}
