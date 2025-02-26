import React from 'react'

export default function Contact({contact}) {
    return (
        <div className="col-md-6 col-xl-3 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{contact.firstName}</h5>
                    <h6 className="card-subtitle text-muted">{contact.lastName}</h6>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="text-muted">Phone: </span>{contact.phone}
                    </li>
                    <li className="list-group-item">
                        <span className="text-muted">Address: </span>{contact.address}
                    </li>
                </ul>
            </div>
        </div>
    )
}