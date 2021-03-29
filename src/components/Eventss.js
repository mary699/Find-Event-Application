import React, { Component } from 'react'
import Events from './Events';
import { Consumer } from '../context'


class Eventss extends Component {

    //state is called here


   

    render() {
        return (
            <Consumer>
                {value => {
                     const { eventss } = value;
                    return (<React.Fragment>
                        <h1 className="display-4 mb-2">
<span className="text-danger">Event </span>List
                        </h1>
                        {eventss.map(events => (
                            <Events
                                key={events.id}
                                events={events} 
                            />
                        ))}
                    </React.Fragment>
                    )
                }}
            </Consumer>
            //this value is coming from the context provider
        )
    }      
     }


export default Eventss;





















