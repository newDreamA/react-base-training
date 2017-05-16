/**
 * Created by tangxiewen on 2017/5/16.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'




import RouterMap from './router/router'


render(
    <RouterMap history={browserHistory}/>,
    document.getElementById('root')
)
