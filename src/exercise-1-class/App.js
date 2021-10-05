import React, { Component } from 'react'
import Contact from './Contact'

export default class App extends Component {
	render() {

		const chidi = {
			firstName: "Chidi",
			lastName: "Anagonye",
			phone: "555-366-8987",
			address: "St. John's University, Sydney, Australia"
		}

		return (
			<div className="container mt-5">
				<div className="row">
					<Contact contacts={chidi} />
				</div>
			</div>
		)
	}
}
