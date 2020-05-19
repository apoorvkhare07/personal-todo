import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Table from './Table'
import Form from './Form'
import './index.css'

class App extends Component {
    state = {
        characters: []
    };

    componentWillMount (){
        let data =[] ;

        if (localStorage.getItem('items')) {
            data = JSON.parse(localStorage.getItem('items'))
            data = data.characters
          } else {
            data = []
          }
          console.log(data);
        for ( let i =0; i<data.length; i++){
            this.setState(state => ({
                characters: [...state.characters, data[i]]
              }))
        }
        console.log(this.state);
    }

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
        this.updateStorage();
    }

    handleSubmit = character => {
        console.log(this.state, character);

        this.setState({characters: [...this.state.characters, character]});

        this.updateStorage();

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
        this.updateStorage();
    }

    updateStorage(){
        localStorage.setItem('items', JSON.stringify(this.state));
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