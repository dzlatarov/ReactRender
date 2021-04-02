import jsonPlaceholder from '../api/jsonPlaceholder'

export const fetchPosts = () => {
    const promise = jsonPlaceholder.get('/posts')

    return {
        type: 'FETCH_POSTS'
    }
}