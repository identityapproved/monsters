import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state =
    {
      monsters: [],
      searchField: ''
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

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField)
    })

    return (
      <div className="App">
        <input type="search" className='search' onChange={(e) => {
          const searchField = e.target.value.toLowerCase().trim()
          this.setState(() => {
            return { searchField }
          })
        }} />
        {filteredMonsters.map((monster) =>
          <div key={monster.id}>
            <h1 >{monster.name}</h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;
