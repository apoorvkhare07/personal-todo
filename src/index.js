import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Table from './Table'
import Form from './Form'
import './index.css'

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    handleCheck = (index) => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                if(i == index)
                    character.checked = !character.checked;

                return character;
            })
        });

    }

    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <h1>Todo-App</h1>
                <p>Add a task </p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                    handleCheck = {this.handleCheck}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'))