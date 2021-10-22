import React, { Component } from 'react'

export default class Contact extends Component {

    render() {
        return (
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.contacts.firstName}</h5>
                        <h6 className="card-subtitle text-muted">{this.props.contacts.lastName}</h6>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="text-muted">Phone: </span>{this.props.contacts.phone}
                        </li>
                        <li className="list-group-item">
                            <span className="text-muted">Address: </span>{this.props.contacts.address}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
