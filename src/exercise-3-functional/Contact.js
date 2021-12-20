import React from 'react'

export default function Contact(props) {
    return (
        <div className="row">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.contact.firstName}</h5>
                    <h6 className="card-subtitle text-muted">{props.contact.lastName}</h6>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="text-muted">Phone: </span>{props.contact.phone}
                    </li>
                    <li className="list-group-item">
                        <span className="text-muted">Address: </span>{props.contact.address}
                    </li>
                    <li className="list-group-item text-end">
    <button className="btn btn-danger" onClick={ () => props.deleteContact(props.contact._id) }>Delete</button>
</li>
                </ul>
            </div>
        </div>
    )
}