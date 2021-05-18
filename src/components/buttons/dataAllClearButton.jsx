import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './index.css'

export default class DataAllClearButton extends Component {
    allClear = ()=>{
        Pubsub.publish('clear')
        Pubsub.publish('updateDisplay')
    }

    render() {
        const {value} = this.props
        return (
            <button className='span-two' onClick={this.allClear}>{value}</button>
        )
    }
}
