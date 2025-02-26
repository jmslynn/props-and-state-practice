import React, { useState } from 'react'
import { INITIAL_CONTACTS } from './data'
import ContactList from './ContactList'

export default function App(props) {
	const [contacts, setContacts] = 
	useState(INITIAL_CONTACTS)
	return (
		<div className="container mt-5">
			<ContactList contacts={contacts} />
		</div>
	)
}

