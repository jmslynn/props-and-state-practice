import React, { useState } from 'react'
import { INITIAL_CONTACTS } from './data'
import ContactList from './ContactList'

export default function App(props) {
	const [contacts, setContacts] = 
	useState(INITIAL_CONTACTS)

	const handleDeleteContact = (contactId) => {
    setContacts( currentContacts => currentContacts.filter(c => c._id !== contactId) );

	// 	const handleDeleteAll = () => {
	// 		contacts.forEach(c => onDeleteContact(c._id));
	// }
}
	return (
		<div className="container mt-5">
			<ContactList contacts={contacts} deleteContact={handleDeleteContact} />
		</div>
	)
}