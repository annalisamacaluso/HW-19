import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Example from "./Example"
import EmployeeTable from "./components/EmployeeTable"
import API from "./utils/API"

class App extends Component {

  state = {
    employeeArr: [],
    search: ""
  };

  componentDidMount(){
    API.getEmployees().then(res=>{
      console.log(res.data);
      this.setState({employeeArr: res.data.results});
    })
  }

  handleInputChange = event => {
    const value = event.target.value;

    this.setState({
      search: value
    });
  };
  
  render(){
    return (
      <div>
        <form className="form">
          <input
            value={this.state.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="search for employees"
          />
        </form>
        <EmployeeTable employees={this.state.employeeArr} input={this.state.search}/>
      </div>
    );
  }
}

export default App;
