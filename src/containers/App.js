import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import {setSearchField} from '../action';

function mapStateTpProps(state) {
  return {
    searchField: state.searchField
  };
}
const MapDispatchToProps = (dispatch) =>{
  return {
    onSearchChange :(event) => dispatch(setSearchField(event.target.value))

  }
  
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      
    }
  }

  componentDidMount() {
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

 
  

  render() {
    const { robots } = this.state;
    const {searchField, onSearchChange} = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends, search for your friend</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
        <ErrorBoundry>
        <CardList robots={filteredRobots} />
        </ErrorBoundry>
            
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateTpProps, MapDispatchToProps) (App);