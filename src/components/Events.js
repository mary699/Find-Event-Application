import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../context';
import axios from 'axios';

class Events extends Component {
    state = {
        showEventsInfo: false
    };

onDeleteClick = async (id, dispatch) => {
  
  try{


    await
axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
dispatch({type: 'DELETE_EVENTS', payload: id}) ;
}
   catch(e) {
    dispatch({type: 'DELETE_EVENTS', payload: id}) ;
   }


};
    render() {   
        const { id, title, scheduled, period } = this.props.events;
        const { showEventsInfo } = this.state;


    
        return(
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="card card-body mb-3">
                        <h4>{title}{' '}
            {/* for dropdown  */}
                            <i onClick={() => this.setState({ showEventsInfo: !this.state.showEventsInfo })} className="fa fa-caret-down" style={{ cursor: 'pointer' }} />
            {/* for delete button */}
                            <i className= "fa fa-trash" style={{cursor: 'pointer', float: 'right', color:'red'}}
                             onClick={this.onDeleteClick.bind(this, id, dispatch)} 
                             />
            {/* for edit icon */}
            <Link to= {`events/edit/${id}`}>
                <i 
                className ="fa fa-pencil"
                style={{
                    cursor: 'pointer',
                    float: 'right',
                    color: '#4b5d67',
                    marginRight: '1rem'
            }} 
                />
            </Link>
          
            
                        </h4>
            
                        {showEventsInfo ?
                            (<ul className="list-group">
                                <li className="list-group-item" style={{
                                 
                                 color: 'blue',
                                 
             
             
             
                         }}>Scheduled:{scheduled}</li>
                                <li className="list-group-item"
                                 style={{
                                 
                                    color: 'blue',
                                    
                
                
                
                            }}
                            >Period: {period} </li>
                            </ul>) : null}
            
            
                    </div>
                    );
                }}
                </Consumer>


         
        );
    }
}
Events.propTypes = {
    events: PropTypes.object.isRequired

};

export default Events;



























