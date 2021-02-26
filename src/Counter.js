import React, { useReducer } from 'react'
import styled from 'styled-components'

const ComponentWrapper = styled.div`
    border: solid thin white;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 75%;
    margin: 0 auto;
    margin-top: 5%;
    flex-direction: column;
`
const Controls = styled.div`
    display: flex;
`
const Button = styled.button`
    margin: 5px;
    font-size: 18pt;
    height: 40px;
    width: 40px;
`
const initialState = {count: 0};

function reducer(state,action){
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
            /*
                return {...state, count: state.count + 1};
            */
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error('Action not recognized...');
    }
}

export default function Counter() {

    const [ state, dispatch ] = useReducer(reducer, initialState);
    /*
        Initial state can also be initialized like this:

        const [ state, dispatch ] = useReducer(reducer, {count: 0})
    */

    return (
        <ComponentWrapper>
            <p style={{'fontWeight': 'bolder', 'fontSize' : '24pt'}}>Count: {state.count}</p>
            <Controls>
                <Button onClick={() => dispatch({type: 'decrement'})}>-</Button>
                <Button onClick={() => dispatch({type: 'increment'})}>+</Button>
            </Controls>
        </ComponentWrapper>
    )
}
