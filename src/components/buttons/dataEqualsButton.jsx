import React, { Component } from 'react'
import Pubsub from 'pubsub-js'

export default class DataEqualsButton extends Component {
    compute = ()=>{
        Pubsub.publish('compute')
        Pubsub.publish('updateDisplay')
    }


    render() {
        const {value} = this.props
        return (
            <button className='span-two' onClick={this.compute}>{value}</button>
        )
    }
}
