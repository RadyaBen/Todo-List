import React, { Component } from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import PostStatusFilter from '../PostStatusFilter';
import PostList from '../PostList';
import PostAddForm from '../PostAddForm';

import './app.css';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ label: 'Create a ToDoList on the React', important: false, like: false, id: 1 },
				{ label: 'Learn English with teacher', important: false, like: false, id: 2 },
				{ label: 'To prepare for an exam', important: false, like: false, id: 3 }
			],
			term: '',
			filter: 'all',
			errorMessage: ''
		};
		this.maxId = 4;
	}

	onAddItem = (body) => {
		const isListValid = (body.length < 10 || /^\s*$/.test(body));

		if (isListValid) {
			this.setState({
				errorMessage: 'The field cannot be empty and have less than 10 characters'
			});
			return;
		} else {
			const newItem = {
				label: body,
				important: false,
				id: this.maxId++
			}
			this.setState((prevState) => {
				const newArr = [...prevState.data, newItem];
				return {
					...prevState,
					data: newArr,
					errorMessage: ''
				}
			});
		}
	}

	onDeleteItem = (id) => {
		this.setState(({ data }) => {
			const index = data.findIndex((elem) => elem.id === id);

			const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
			return {
				data: newArr
			}
		});
	}

	onToggleImportant = (id) => {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id);

			const old = data[index];
			const newItem = { ...old, important: !old.important } // Ovewrite the old object with the new object

			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; // This's formed object, but already with a new changed some object

			return {
				data: newArr
			}
		});
	}

	onToggleLiked = (id) => {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id);

			const old = data[index];
			const newItem = { ...old, like: !old.like } // Ovewrite the old object with the new object

			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; // This's formed object, but already with a new changed some object

			return {
				data: newArr
			}
		});
	}

	searchPost = (items, term) => {
		if (term.length === 0) {
			return items
		}

		// This method will return posts that contain what the user has entered
		return items.filter((item) => {
			return item.label.indexOf(term) > -1;
		});
	}

	filterPosts = (items, filter) => {
		if (filter === 'like') {
			return items.filter(item => item.like)
		} else {
			return items
		}
	}

	onUpdateSearch = (term) => {
		this.setState({ term });
	}

	onFilterSelect = (filter) => {
		this.setState({ filter });
	}

	render() {
		const { data, term, filter, errorMessage } = this.state;
	
		const liked = data.filter(item => item.like).length;
		const allPosts = data.length;

		const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

		return (
			<div className="app">
				<AppHeader
					liked={liked}
					allPosts={allPosts} />
				<div className="search-panel d-flex">
					<SearchPanel
						onUpdateSearch={this.onUpdateSearch} />
					<PostStatusFilter
						filter={filter}
						onFilterSelect={this.onFilterSelect} />
				</div>
				<PostList
					posts={visiblePosts}
					onDeleteItem={this.onDeleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked} />
				<PostAddForm
					onAddItem={this.onAddItem}
					errorMessage={errorMessage} />
			</div>
		)
	}
}
