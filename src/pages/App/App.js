import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ItemListPage from '../../pages/ItemList/ItemListPage';

class App extends Component {
  state = {
    groceries: [{ name: 'Bananas', quantity: 'All of them' }, { name: 'bread', quantity: 3 }]
  };


  render() {
    return (
      <div className="App">
        <main>
          <Route exact path='/' render={() =>
            <ItemListPage
              groceries={this.state.groceries}
            />
          } />
        </main>
      </div>
    )
  };
}

export default App;