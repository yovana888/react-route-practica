import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Hero from './Hero/index'
import Home from './Home/index'
import Persona from './Persona/index'

import View from '../layout/View'

const RouterApp = () => {
  return (
    <View>
     
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hero" component={Hero} />
          <Route path="/persona" component={Persona} />
        </Switch>
     
    </View>
  )
}

export default RouterApp
