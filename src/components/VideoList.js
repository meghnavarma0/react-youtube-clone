import React from 'react';

import VideoItem from './VideoItem';

import { Grid } from '@material-ui/core';

const VideoList = ({ videos, onVideoSelect }) => {
	const listOfVideos = videos.map((video, index) => (
		<VideoItem key={index} video={video} onVideoSelect={onVideoSelect} />
	));
	return (
		<Grid container spacing={10}>
			{listOfVideos}
		</Grid>
	);
};

export default VideoList;
