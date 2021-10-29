import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Hero from './Hero/index'
import HeroDetail from './HeroDetail/index'
import Home from './Home/index'
import Catalogue from './Catalogue/index'
import Contact from './Contact/index'

import View from '../layout/View'

const RouterApp = () => {
  return (
    <View>
     
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hero" component={Hero} />
          <Route path="/herodetails" component={HeroDetail} />
          <Route path="/catalogue" component={Catalogue} />
          <Route path="/contact" component={Contact} />
        </Switch>
     
    </View>
  )
}

export default RouterApp
