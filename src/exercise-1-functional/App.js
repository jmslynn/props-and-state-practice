import React from 'react'
import Contact from './Contact'

export default function App() {
	
	const eleanor = {
		firstName: "Eleanor",
    lastName: "Shellstrop",
    phone: "555-483-1457",
    address: "335 Avalon St, Apt 2C, Pheonix, Arizona"
	}

	return (
		<div className="container mt-5">
			<div class="row">
				<Contact contact={eleanor}/>
			</div>
		</div>
	)
}

