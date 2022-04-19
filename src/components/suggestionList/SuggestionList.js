import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	getPopularVideos,
	getVideosByCategory,
} from '../../redux/actions/videos';
import './_suggestionList.scss';

const suggestions = [
	'All',
	'React Native',
	'Angular js',
	'REST APIs',
	'Sorting Methods',
	'Redux',
	'React JS',
	'Algorithm Data Structures ',
	'Merge Sort',
	'Coding',
	'Cricket',
	'Football',
	'Real Madrid',
	'Macbook Air',
	'AMD Ryzen',
	'NVIDIA',
];

const SuggestionList = () => {
	const [currentSuggestion, setCurrentSuggestion] = useState('All');

	const dispatch = useDispatch();
	const onClick = (value) => {
		setCurrentSuggestion(value);
		if (value === 'All') {
			dispatch(getPopularVideos());
		} else {
			dispatch(getVideosByCategory(value));
		}
	};
	return (
		<div className='suggestionList'>
			{suggestions.map((value, i) => (
				<span
					onClick={() => onClick(value)}
					key={i}
					className={currentSuggestion === value ? 'active' : ''}>
					{value}
				</span>
			))}
		</div>
	);
};

export default SuggestionList;
