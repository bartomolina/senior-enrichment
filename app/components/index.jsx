import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { fetchCampuses } from '../store'
import Navbar from './Navbar'
import CampusList from './CampusList'

export default class Root extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const campusesThunk = fetchCampuses()
    store.dispatch(campusesThunk)
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Router>
            <div>
              <Navbar />
              <CampusList />
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}