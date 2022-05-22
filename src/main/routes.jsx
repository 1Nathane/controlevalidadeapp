import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import StorageLocation from '../storageLocation/storageLocation'
import Brand from '../brand/brand'
import Unit from '../unit/unit'
import Provider from '../provider/provider'
import Product from '../product/product'
import Batch from '../batch/batch'
import Report from '../report/report'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='storageLocation' component={StorageLocation} />
            <Route path='brand' component={Brand} />
            <Route path='unit' component={Unit} />
            <Route path='provider' component={Provider} />
            <Route path='product' component={Product} />
            <Route path='batch' component={Batch} />
            <Route path='report' component={Report} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)
