import _ from 'lodash'
import jsonPlaceholder from '../api/jsonPlaceholder'

export const fetchPostsAndUsers = () => async dispatch => {
    console.log('Posts about to be fetched');
    await dispatch(fetchPosts())
    console.log('Fetched posts');
}

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({ type: 'FETCH_USER', payload: response.data })
}


// export const fetchUser = id => dispatch => _fetchUser(id, dispatch)
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`)

//     dispatch({ type: 'FETCH_USER', payload: response.data })
// })