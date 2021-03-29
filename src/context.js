// import { render } from '@testing-library/react';
import React, {Component} from 'react';
import axios from 'axios';
const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_EVENTS':
            return{
                ...state,
                eventss: state.eventss.filter(events => events.id !== action.payload)
            };
            //*****For ADDing Content */
            case 'ADD_EVENTS':
                return{
                    ...state,
                   eventss: [action.payload, ...state.eventss]
                };
            case 'UPATE_EVENTS':
                return{
                    ...state,
                    eventss: state.eventss.map(events =>
                     events.id === action.payload.id 
                     ? (events = action.payload)   
                     : events
                 )
                };
          default:
              return state;
    }
};

export class Provider  extends Component{
    state = {
        eventss: [
         
        ], 
        dispatch: action => 
            this.setState(state => reducer(state, action))
        
    };


   async  componentDidMount(){
const res =  await axios.get('https://jsonplaceholder.typicode.com/todos');

this.setState({eventss: res.data});
    }

 render(){
     return (
<Context.Provider value= {this.state}>
    {this.props.children}
</Context.Provider>
     )
 }
}

export const Consumer = Context.Consumer;

// this file holds the application level state