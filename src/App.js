import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetail } from './components';

function App() {
	return (
		<div className='App'>
			<Grid justify='center' container spacing={16}>
				<Grid item xs={12}>
					<Grid container spacing={16}>
						<Grid item spacing={12} xs={12}>
							<SearchBar />
						</Grid>
						<Grid item spacing={12} xs={8}>
							<VideoDetail />
						</Grid>
						<Grid item spacing={12} xs={4}>
							{/* Video List */}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
