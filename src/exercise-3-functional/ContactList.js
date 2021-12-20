import React from 'react'
import Contact from './Contact'

export default function ContactList(props) {

    return (
        <React.Fragment>
    <div className="row">
    { props.contacts.map( c => <Contact deleteContact={props.deleteContact} contact={c} key={c._id} /> ) }
</div>
   <div className="row mb-3">
   <div className="col text-end">
       <button className="btn btn-danger btn-lg" >Delete All</button>
   </div>
</div>
</React.Fragment>
    )
}
