/**
 * Created by tangxiewen on 2017/5/16.
 */
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers'


class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>

                </Route>
            </Router>
    )
    }
}

export default RouterMap