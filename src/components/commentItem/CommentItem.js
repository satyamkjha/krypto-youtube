import React from 'react';
import moment from 'moment';
import './_commentItem.scss';
const CommentItem = ({ comment }) => {
	const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
		comment;

	return (
		<div className='p-2 comment d-flex'>
			<img src={authorProfileImageUrl} alt='' className='mr-3 rounded-circle' />
			<div className='comment__desc'>
				<p className='mb-1 comment__title'>
					{authorDisplayName} • {moment(publishedAt).fromNow()}
				</p>
				<p className='mb-0'>{textDisplay}</p>
			</div>
		</div>
	);
};

export default CommentItem;
