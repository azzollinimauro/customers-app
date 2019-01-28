import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import './index.css';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

class App extends Component {

  renderHome = () => <HomeContainer></HomeContainer>;

  renderCustomerContainer = () => <h1>Customer Container</h1>;

  renderCustomerListContainer = () => <CustomersContainer></CustomersContainer>;



  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderHome}></Route>
          <Route exact path="/customers" component={this.renderCustomerListContainer}></Route>
          <Switch>
            <Route exact path="/customers/new" component={NewCustomerContainer}></Route>
            <Route  path="/customers/:dni" render={props => <CustomerContainer {...props} dni={props.match.params.dni}></CustomerContainer>}></Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
