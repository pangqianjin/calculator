import React, { Component } from 'react'
import ShowArea from './components/show-area'
import ButtonArea from './components/button-area'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className='calculator'>
                <ShowArea/>
                <ButtonArea/>
            </div>
        )
    }
}
