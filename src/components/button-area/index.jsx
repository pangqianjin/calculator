import React, { Component } from 'react'
import DataAllClearButton from '../buttons/dataAllClearButton'
import DataDeleteButton from '../buttons/dataDeleteButton'
import DataOperationButton from '../buttons/dataOperationButton'
import DataNumberButton from '../buttons/dataNumberButton'
import DataEqualsButton from '../buttons/dataEqualsButton'
import './index.css'

export default class ButtonArea extends Component {
    render() {
        return (
            <div className='button-area'>
                <DataAllClearButton value='AC'/>
                <DataDeleteButton value='DEL' />
                <DataOperationButton value='÷'/>

                <DataNumberButton value='7'/>
                <DataNumberButton value='8'/>
                <DataNumberButton value='9'/>
                <DataOperationButton value='*'/>
            
                <DataNumberButton value='4'/>
                <DataNumberButton value='5'/>
                <DataNumberButton value='6'/>
                <DataOperationButton value='-'/>
            
                <DataNumberButton value='1'/>
                <DataNumberButton value='2'/>
                <DataNumberButton value='3'/>
                <DataOperationButton value='+'/>
            
                <DataNumberButton value='0'/>
                <DataNumberButton value='.'/>
                <DataEqualsButton value='='/>
            </div>
        )
    }
}
