import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ListAlbuns from './components/ListAlbuns'
import Album from './components/Album'

export default props => (
    <Router >
        <div>
            <Route exact path='/' component={ListAlbuns} />
            <Route exatc path='/album/:id' component={Album} />
            
        </div>
    </Router>
)