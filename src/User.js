import React, { useReducer} from 'react'
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

export default function User({user}) {

    function reducer(state, action){
        switch (action.type) {
            case 'updateFirstName':
                return{...state, firstName: 'Will'}         
            case 'updateLastName':
                return{...state, lastName: 'Johnston'}
            default:
                throw new Error('Action not supported...')
        }
    }
    const initialState = {firstName: user.firstName, lastName: user.lastName};
    const [ state, dispatch ] = useReducer(reducer, initialState)
    
    const userName = `${state.firstName} ${state.lastName}` 

    return (
        <ComponentWrapper>
            <p>{userName}</p>
            <button onClick={() => dispatch({type: 'updateFirstName'})}>First Name</button>
            <button onClick={() => dispatch({type: 'updateLastName'})}>Last Name</button>
        </ComponentWrapper>
    )
}
