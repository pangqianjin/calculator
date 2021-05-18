import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './index.css'

export default class ShowArea extends Component {
    state = {
        previousOperand: '',
        currentOperand: '',
        operation: ''
    }

    componentDidMount(){
        Pubsub.subscribe('updateDisplay', ()=>{
            console.log(this.state)
            this.setState({currentOperand:this.getDisplayNumber(this.state.currentOperand)})
            if(this.state.operation!=null){
                this.setState({previousOperand:`${this.getDisplayNumber(this.state.previousOperand)} ${this.state.operation}`})
            }else{
                this.setState({previousOperand: ''})
            } 
        })

        Pubsub.subscribe('clear', ()=>{
            this.setState({currentOperand:'', previousOperand:''})
        })

        Pubsub.subscribe('delete', ()=>{
            this.setState({currentOperand: this.state.currentOperand.toString().slice(0,-1)})
        })

        Pubsub.subscribe('appendNumber', (_, number)=>{
            this.appendNumber(number)
        })

        Pubsub.subscribe('compute', ()=>{
            this.compute()
        })

        Pubsub.subscribe('chooseOpertaion', (_, operation)=>{
            if(this.currentOperand==='') return;
            if(this.previousOperand!==''){
                this.compute();
            }
            this.setState({operation:operation, currentOperand: ''})
            this.setState({previousOperand: this.state.currentOperand.toString()+operation.toString()})
        })
    }

    componentWillUnmount(){
        Pubsub.clearAllSubscriptions()
    }

    appendNumber = (number)=>{
        if(number==='.'&&this.state.currentOperand.includes('.')) return 
        this.setState({currentOperand: this.state.currentOperand.toString()+number.toString()})
        
    }

    getDisplayNumber = (number)=>{
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if(isNaN(integerDigits)){
            integerDisplay = '';
        }else{
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            });
        }
        if(decimalDigits!=null){
            return `${integerDisplay}.${decimalDigits}`;
        }else{
            return integerDisplay;
        }
    }

    compute = ()=>{
        let computation;
        const prev = parseFloat(this.state.previousOperand);
        const current = parseFloat(this.state.currentOperand);
        if(isNaN(prev)||isNaN(current)) return;
            switch(this.state.operation){
                case '+':
                    computation = prev + current;
                    break;
                case '-':
                    computation = prev - current;
                    break;
                case '*':
                    computation = prev * current;
                    break;
                case '÷':
                    computation = prev / current;
                    break;
                default:
                    return;
            }
        this.setState({currentOperand: computation, operation: undefined, previousOperand:''})
    }

    render() {
        const {previousOperand, currentOperand} = this.state
        return (
            <div className='show-area'>
                <div data-previous-operand className='previous'>{previousOperand}</div>
                <div data-current-operand className='current'>{currentOperand}</div>
            </div>
        )
    }
}
