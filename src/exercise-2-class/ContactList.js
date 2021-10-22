import React, { Component } from 'react'
import Contact from './Contact'

export default class ContactList extends Component {
    render() {
        return (
            <div className="row">
            { this.props.contacts.map( c => <Contact contacts={c} key={c._id} /> ) }
        </div>
        )
    }
}
