import { configureStore } from '@reduxjs/toolkit'
import commentsReducer from './reducers/comment'
const store=configureStore({
  reducer: commentsReducer,
})

export default store