import React, { Component } from 'react'
import { INITIAL_CONTACTS } from './data'
import ContactList from './ContactList'

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: INITIAL_CONTACTS
		}
	}
	render() {
		return (
			<div className="container mt-5">
				<ContactList contacts={this.state.contacts} />
			</div>
		)
	}
}
