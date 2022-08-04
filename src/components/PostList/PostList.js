import React from 'react';

import { PostListItem } from '../PostListItem';

import './postList.css'

const PostList = ({ posts, onDeleteItem, onToggleImportant, onToggleLiked }) => {

	const elements = posts.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<li key={id} className='list-group-item'>
				<PostListItem
					{...itemProps}
					onDeleteItem={() => onDeleteItem(id)}
					onToggleImportant={() => onToggleImportant(id)}
					onToggleLiked={() => onToggleLiked(id)} />
			</li>
		);
	});

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	);
};

export { PostList };