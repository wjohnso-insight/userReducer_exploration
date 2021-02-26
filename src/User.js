import React, { useReducer, useRef} from 'react'
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
const Input = styled.input`
    margin: 5px;
    font-size: 18pt;
`

export default function User({user}) {

    function reducer(state, action){
        switch (action.type) {
            case 'updateFirstName':
                return{...state, firstName: firstNameInputRef.current.value} //Spread state & update firstName property        
            case 'updateLastName':
                return{...state, lastName: lastNameInputRef.current.value} //Spread state & update lastName property
            default:
                throw new Error('Action not supported...')
        }
    }

    const firstNameInputRef = useRef(null);
    const lastNameInputRef = useRef(null);
    const initialState = {firstName: user.firstName, lastName: user.lastName};
    const [ state, dispatch ] = useReducer(reducer, initialState)
    
    const userName = `${state.firstName} ${state.lastName}` 

    return (
        <ComponentWrapper>
            <p style={{'fontWeight': 'bolder', 'fontSize' : '24pt'}}>{userName}</p>
            <Controls>
                <Input 
                    type='text'
                    placeholder='Update first name'
                    ref={firstNameInputRef}
                    onChange={() => dispatch({type: 'updateFirstName'})}
                ></Input>
                <Input 
                    type='text'
                    placeholder='Update last name'
                    ref={lastNameInputRef}
                    onChange={() => dispatch({type: 'updateLastName'})}
                ></Input>
            </Controls>
        </ComponentWrapper>
    )
}
