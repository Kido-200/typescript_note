import React from 'react'
import {BrowserRouter , Route } from 'react-router-dom'

import App from '../components/App'

const Root = () => {
  return (
    <BrowserRouter>
      <Route Path="/" component={App}></Route>
    </BrowserRouter>
  )
}

export default Root