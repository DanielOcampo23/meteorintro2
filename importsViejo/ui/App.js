import React, { Component } from 'react';
import TaskList from './components/TaskList.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Meteor } from 'meteor/meteor';
// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return (
      <div className="App container">
      	<AccountsUIWrapper></AccountsUIWrapper>
        <TaskList owner="Leonardo" />
      </div>
    );
  }
} 
