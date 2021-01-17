import React, { Component } from 'react'
import Bodycards from './Body-cards'
import Bodyscripts from './Body-scripts'

export default class Body extends Component {
    render() {
        return (
            <div className="container">
                <Bodyscripts/>
                <Bodycards/>
            </div>
        )
    }
}
