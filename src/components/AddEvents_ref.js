import React, { Component } from 'react'

class AddEvents extends Component {
constructor(props) {
    super(props);


    this.titleInput = React.createRef();
    this.scheduledInput = React.createRef();
    this.periodInput = React.createRef();
}

    onSubmit = e => {
        e.preventDefault();
       const events = {
           title: this.titleInput.current.value,
           scheduled: this.scheduledInput.current.value,
           period: this.periodInput.current.value
       };
       console.log(events);
    };

    static defaultProps = {
        title: 'Staff Party',
        scheduled: '23/02/2021',
        period: '3:30pm'
    };




    render() {

        const { title, scheduled, period } = this.props;

        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add Events
             </div>

                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" className="form-control form-control-lg" placeholder="Enter Title..."
                                defaultValue={title}
ref={this.titleInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="scheduled">Scheduled</label>
                            <input type="Scheduled"
                                name="scheduled" className="form-control form-control-lg" placeholder="dd/mm/yyyy"
                                defaultValue={scheduled}
                                ref={this.scheduledInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="period">Period</label>
                            <input type="Period" name="period" className="form-control form-control-lg"
                                defaultValue={period}
                                ref={this.periodInput}
                            />


                        </div>
                        <input type="submit" value="Add Event" className="btn btn-success btn-block" />
                    </form>
                </div>

            </div>
        );
    }
}

export default AddEvents;