import React from 'react'
import Contact from './Contact'

export default function ContactList(props) {
    return (
    <div className="row">
    { props.contacts.map( c => <Contact contact={c} key={c._id} /> ) }
</div>
    )
}
