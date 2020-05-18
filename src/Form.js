import React, {Component} from 'react';

class Form extends Component {
        initialState = {
            task: '',
            checked: false
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
        const { task } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="task">Task</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={this.handleChange} />
                <button type="submit">
                    Add
                </button>
            </form>
        );
    }
}

export default Form;