import React, {Component} from 'react';

class Form extends Component {
        initialState = {
            task: '',
            details: '',
            date: ''
        };

        state = this.initialState;


    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { task, details, date } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="task">Task</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={this.handleChange} />
                <label for="details">Details</label>
                <input
                    type="text"
                    name="details"
                    id="details"
                    value={details}
                    onChange={this.handleChange} />
                <label for="date">Date</label>
                <input
                    type="text"
                    name="date"
                    id="date"
                    value={date}
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;