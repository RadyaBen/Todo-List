import React from 'react';
import styled from 'styled-components';

import './appHeader.css';

const Header = styled.div` 
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	h1 {
		font-size: 26px;
		color: ${props => props.colored ? 'red' : 'green'}
		hover { 
			color: blue;
		}
	}
	h2 {
		font-size: 1.2rem;
		color: grey;
	}
`;

const AppHeader = ({ liked, allPosts }) => {
	return (
		<Header as='a'>
			<h1>To Do List</h1>
			<h2>{allPosts} entries, of which I liked {liked}</h2>
		</Header>
	);
};

export { AppHeader };