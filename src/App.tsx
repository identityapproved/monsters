import { ChangeEvent, useEffect, useState } from 'react';
import CardList from './Components/CardList/CardList.component';
import SearchBox from './Components/SearchBox/SearchBox.component';
import './App.css';
import { getData } from './utils/data.utils';

export type Monster = {
  id: string,
  name: string,
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(filterMonsters);
  }, [monsters, searchField]);


  const onSearchField = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchField = e.target.value.toLowerCase().trim();
    setSearchField(searchField);
  };


  return (
    <div className="App">
      <h1 className='main-title'>MONSTERS</h1>
      <SearchBox onChangeHandler={onSearchField} placeholder='Search monsters...' className='search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
