import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Home from './screen/Home'
import reducer from './redux/reducer'

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' component={Home} />
      </Router>
    </Provider>
  )
}

export default App;
