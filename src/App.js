import { useState } from 'react';
import './App.css';
import EmployeesList from './EmployeesList'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'


function App() {
  const [filter, setFilter] = useState('')

  const employees = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania', 'Rafal', 'Marcin', 'Krzysztof', 'Grzegorz', 'Magdalena']
  const employeesFiltered = filter ? employees.filter(name => name.toLowerCase().includes(filter.toLowerCase())) : employees

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
        <PerfectScrollbar options={{swipeEasing: true}}>
            <EmployeesList employeesFiltered={employeesFiltered} />
        </PerfectScrollbar>
        </ul>
      </div>
    </div>
  );
}

export default App;
