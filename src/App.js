import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state =
    {
      monsters: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((users) =>
        this.setState(
          () => { return { monsters: users } },
          () => { console.log(users) })
      )
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) =>
          <div key={monster.id}>
            <h1 >{monster.name}</h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;
