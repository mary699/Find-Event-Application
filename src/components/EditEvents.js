import React, { Component } from 'react'
import { Consumer } from '../context';
import TextInputGroup from './TextInputGroup';
import axios from 'axios';


class EditEvents extends Component {
    //The way you labelled the state  must be the way you lable the "name value in the form"
    state = {
        title: '',
        scheduled: '',
        period: '',
        errors: {}
        
    };

async componentDidMount()   {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos${id}`);


    const events = res.data;
    this.setState({
        title: events.title,
        scheduled: events.scheduled,
        period: events.period
    });
}






    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        //********* install uuid in your vscode terminal npm i uuid because this is used to generate id */
        const { title, scheduled, period } = this.state;

 

        //check for erros
        if (title === '') {
            this.setState({ errors: { title: 'Title is required' } });
            return;
        }
        if (scheduled === '') {
            this.setState({ errors: { scheduled: 'Scheduled is required' } });
            return;
        }
        if (period === '') {
            this.setState({ errors: { period: 'Period is required' } });
            return;
        }
        

        const updEvents = {
            title,
            scheduled,
            period
            
        }

        const { id } = this.props.match.params;

        const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, updEvents);

        dispatch({type: 'UPDATE_EVENTS', paylod:
        res.data });
       
        // clear state
        this.setState({
        
                title: '',
                scheduled: '',
                period: '',
                errors: {}
        });
        
this.props.history.push('/');
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });




    render() {

        const { title, scheduled, period, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3" style={{
                                 
                            color: 'white',
                            backgroundColor: '#4b5d67'
                            
        
        
        
                    }}>
                            <div className="card-header ">
                               Edit    Events
                </div>

                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>


                                    {/* <div className="form-group">
       <label htmlFor="title">Title</label>
       <input type="text" name="title" className="form-control form-control-lg" placeholder="Enter Title..."
       value={title}
       onChange={this.onChange}
       />
   </div>  */} 

                                    <TextInputGroup
                                        label='Title'
                                        name="title"
                                        placeholder="Enter Title"
                                        value={title}
                                        onChange={this.onChange}
                                        error={errors.title}

                                    />
                                    <TextInputGroup
                                        label='Scheduled'
                                        name="scheduled"
                                        placeholder="Enter Scheduled"
                                        value={scheduled}
                                        onChange={this.onChange}
                                        error={errors.scheduled}

                                    />
                                    <TextInputGroup
                                        label='Period'
                                        name="period"
                                        placeholder="Enter Period"
                                        value={period}
                                        onChange={this.onChange}
                                        error={errors.period
                                        }

                                    />


                                    {/* <div className="form-group">
       <label htmlFor="scheduled">Scheduled</label>
       <input type="Scheduled" 
       name="scheduled" className="form-control form-control-lg" placeholder="dd/mm/yyyy"
       value={scheduled}
       onChange={this.onChange}/>
   </div> */}
                                    {/* <div className="form-group">
       <label htmlFor="period">Period</label>
       <input type="Period" name="period"  className="form-control form-control-lg"
       value={period}
       onChange={this.onChange}/>
     
   
   </div> */}
                                    <input type="submit" value="Update Events"  className="btn  btn-block"
                                    style={{
                                 
                                        color: 'blue',
                                    
                                        fontSize: '20px',
                                        fontWeight: 'bolder'
                    
                    
                    
                                }} />
                                </form>
                            </div>

                        </div>
                    )
                }}
            </Consumer>
        )



    }
}

export default EditEvents;