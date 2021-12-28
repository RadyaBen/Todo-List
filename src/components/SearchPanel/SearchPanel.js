import React, { Component } from 'react';

import './searchPanel.css';

export default class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
	}

	// We'll monitor what a user enters and after that change our state 
	onUpdateSearch(e) {
		const term = e.target.value;
		this.setState({ term });
		this.props.onUpdateSearch(term);
	}

	render() {
		return (
			<input
				className="form-control search-input"
				type="text"
				placeholder="Search by notes"
				onChange={this.onUpdateSearch}
			/>
		)
	}
}
