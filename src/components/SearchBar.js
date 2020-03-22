import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends Component {
	state = {
		searchTerm: ''
	};

	handleChange = event => {
		this.setState({ searchTerm: event.target.value });
	};
	handleSubmit = event => {
		const { searchTerm } = this.state;
		console.log(searchTerm);
		const { onSubmitForm } = this.props;
		onSubmitForm();
		event.preventDefault();
	};
	render() {
		return (
			<Paper elevation={6} style={{ padding: '25px' }}>
				<form onSubmit={this.handleSubmit}>
					<TextField
						fullWidth
						label='Search...'
						onChange={this.handleChange}
					/>
				</form>
			</Paper>
		);
	}
}

export default SearchBar;
