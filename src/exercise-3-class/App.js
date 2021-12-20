import React, { Component } from 'react'
import { INITIAL_CONTACTS } from './data'
import ContactList from './ContactList'

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: INITIAL_CONTACTS
		}
		this.handleDeleteContact = this.handleDeleteContact.bind(this);
	}

		handleDeleteContact(contactId) {
			this.setState(state => ({ contacts: state.contacts.filter(c => c._id !== contactId) }) );
	}

	
	render() {
		return (
			<div className="container mt-5">
				<ContactList deleteContact={this.handleDeleteContact} contacts={this.state.contacts} />
			</div>
		)
	}
}
