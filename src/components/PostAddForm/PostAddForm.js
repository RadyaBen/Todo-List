import React, { Component } from 'react';

import './postAddForm.css'

class PostAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}

	onValueChange = (e) => {
		this.setState({
			text: e.target.value
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		// Transfer the text to our posts
		this.props.onAddItem(this.state.text);
		this.setState({
			text: ''
		});
	}

	render() {
		return (
			<form
				className="bottom-panel d-flex"
				onSubmit={this.onSubmit}>
				<div>
					<input
						type="text"
						placeholder="What do you want to do?"
						className="form-control new-post-label"
						onChange={this.onValueChange}
						value={this.state.text}
					/>
					<div className="text-error" style={{ color: 'red' }}>{this.props.errorMessage}</div>
				</div>
				<button
					type="submit"
					className="btn btn-outline-secondary custom">
					Add
				</button>
			</form>
		);
	}
}

export { PostAddForm };