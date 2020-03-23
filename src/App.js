import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetail, VideoList } from './components';
import youtube from './api/Youtube';

class App extends Component {
	state = {
		videos: [],
		selectedVideo: null
	};
	componentDidMount() {
		this.handleSubmit('Shin chan');
	}
	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};
	handleSubmit = async searchTerm => {
		const response = await youtube.get('search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: 'AIzaSyBNPu5ClRIe0QpOMOVDiQ1vV95zNoKt604',
				q: searchTerm
			}
		});
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};
	render() {
		const { selectedVideo, videos } = this.state;
		return (
			<div className='App'>
				<Grid justify='center' container spacing={10}>
					<Grid item xs={12}>
						<Grid container spacing={10}>
							<Grid item xs={12}>
								<SearchBar onSubmitForm={this.handleSubmit} />
							</Grid>
							<Grid item xs={8}>
								<VideoDetail video={selectedVideo} />
							</Grid>
							<Grid item xs={4}>
								<VideoList
									videos={videos}
									onVideoSelect={this.onVideoSelect}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default App;
