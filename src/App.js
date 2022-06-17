import './App.css';
import { Component } from 'react';
import CardList from './Components/CardList/CardList.component';
import SearchBox from './Components/SearchBox/SearchBox.component';

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
        return res.json()
      })
      .then((users) =>
        this.setState(
          () => { return { monsters: users } }
        )
      )
  }

  onSearchField = (e) => {
    const searchField = e.target.value.toLowerCase().trim()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchField } = this;


    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <h1 className='main-title'>MONSTERS</h1>
        <SearchBox onChangeHandler={onSearchField} placeholder='Search monsters...' className='search-box' />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
