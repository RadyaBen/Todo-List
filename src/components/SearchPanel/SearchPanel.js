import React, { Component } from 'react';

import './searchPanel.css';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}

	onUpdateSearch = (e) => {
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
		);
	}
}

export { SearchPanel }; 