import { createStore, applyMiddleware, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { authReducer } from './reducers/authReducer'
import {
   homeVideosReducer,
   relatedVideoReducer,
   searchedVideosReducer,
   subscriptionsChannelReducer,
   channelVideosReducer,
} from './reducers/videosReducer'
import { selectedVideoReducer } from './reducers/videosReducer'
import { channelDetailsReducer } from './reducers/channelReducer'
import { commentListReducer } from './reducers/commentsReducer'

const rootReducer = combineReducers({
   auth: authReducer,
   homeVideos: homeVideosReducer,
   selectedVideo: selectedVideoReducer,
   channelDetails: channelDetailsReducer,
   commentList: commentListReducer,
   relatedVideos: relatedVideoReducer,
   searchedVideos: searchedVideosReducer,
   subscriptionsChannel: subscriptionsChannelReducer,
   channelVideos: channelVideosReducer,
})

const store = createStore(
   rootReducer,
   {},
   composeWithDevTools(applyMiddleware(thunk))
)

export default store
