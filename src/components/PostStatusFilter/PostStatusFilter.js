import React, { Component } from 'react';

class PostStatusFilter extends Component {
	constructor(props) {
		super(props);
		this.buttons = [
			{ name: 'all', label: 'All' },
			{ name: 'like', label: 'Liked' }
		]
	}

	render() {
		const buttons = this.buttons.map(({ name, label }) => {
			const { filter, onFilterSelect } = this.props;
			// The button is formed wwhere the filter matches
			const active = filter === name;
			const clazz = active ? 'btn-info' : 'btn-outline-secondary'
			return (
				<button
					key={name}
					type='button"'
					className={`btn ${clazz}`}
					onClick={() => onFilterSelect(name)}>{label}</button>
			)
		});
		return (
			<div className="btn-group">
				{buttons}
			</div>
		);
	}
}

export { PostStatusFilter }; 