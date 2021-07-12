import { useState } from 'react';
import './App.css';
import EmployeesList from './EmployeesList'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

//This data would be fetched from API
const employees = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania', 'Rafal', 'Marcin', 'Krzysztof', 'Grzegorz', 'Magdalena']



function App() {
  //Text according to which list will be filtered
  const [filter, setFilter] = useState('')

  //TODO prepare for race conditions
  const employeesFiltered = filter ? employees.filter(name => name.toLowerCase().includes(filter.toLowerCase())) : employees

  //Sets state to input value
  const handleInput = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className="app">
      <div className="container">
        <div className="container__header">
          <input type="text" className="header__input" placeholder='Search...' value={filter} onChange={handleInput} />
        </div>
        <ul className="container__list">
        <PerfectScrollbar>
            <EmployeesList employeesFiltered={employeesFiltered} />
        </PerfectScrollbar>
        </ul>
      </div>
    </div>
  );
}

export default App;
