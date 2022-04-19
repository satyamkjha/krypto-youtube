import React, { useEffect, useState } from 'react';
import './_videoContainer.scss';

import { AiFillEye } from 'react-icons/ai';
import request from '../../api';

import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHistory } from 'react-router-dom';
const Video = ({ video, channelScreen }) => {
	const {
		id,
		snippet: {
			channelId,
			channelTitle,
			title,
			publishedAt,
			thumbnails: { medium },
		},
		contentDetails,
	} = video;

	const [views, setViews] = useState(null);
	const [duration, setDuration] = useState(null);
	const [channelIcon, setChannelIcon] = useState(null);

	const seconds = moment.duration(duration).asSeconds();
	const currentDuration = moment.utc(seconds * 1000).format('mm:ss');

	const videoId = id?.videoId || contentDetails?.videoId || id;

	const history = useHistory();

	useEffect(() => {
		const get_video_details = async () => {
			const {
				data: { items },
			} = await request('/videos', {
				params: {
					part: 'contentDetails,statistics',
					id: videoId,
				},
			});
			setDuration(items[0].contentDetails.duration);
			setViews(items[0].statistics.viewCount);
		};
		get_video_details();
	}, [videoId]);

	useEffect(() => {
		const get_channel_icon = async () => {
			const {
				data: { items },
			} = await request('/channels', {
				params: {
					part: 'snippet',
					id: channelId,
				},
			});
			setChannelIcon(items[0].snippet.thumbnails.default);
		};
		get_channel_icon();
	}, [channelId]);

	const handleVideoClick = () => {
		history.push(`/watch/${videoId}`);
	};

	return (
		<div className='videoCont' onClick={handleVideoClick}>
			<div className='videoCont__top'>
				<LazyLoadImage src={medium.url} effect='blur' />
				<span className='videoCont__top__duration'>{currentDuration}</span>
			</div>
			<div className='videoCont__title'>{title}</div>
			<div className='videoCont__details'>
				<span>
					<AiFillEye /> {numeral(views).format('0.a')} Views •{' '}
				</span>{' '}
				<span> {moment(publishedAt).fromNow()} </span>
			</div>
			{!channelScreen && (
				<div className='videoCont__channel'>
					<LazyLoadImage src={channelIcon?.url} effect='blur' />

					<p>{channelTitle}</p>
				</div>
			)}
		</div>
	);
};

export default Video;
