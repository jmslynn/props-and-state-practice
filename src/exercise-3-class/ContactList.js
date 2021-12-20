import React, { Component } from 'react'
import Contact from './Contact'

// delete all not working
export default class ContactList extends Component {

    render() {
        return (
            <React.Fragment>
            <div className="row mb-3">
    <div className="col text-end">
        <button className="btn btn-danger btn-lg" onClick={this.handleDeleteAll}>Delete All
        </button>
    </div>
</div>
            <div className="row">
            { this.props.contacts.map( c => <Contact contact={c} key={c._id}
            deleteContact={this.props.deleteContact} /> ) }
        </div>
        </React.Fragment>
        )
    }
    
}
