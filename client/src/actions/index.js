import axios from 'axios';

const FETCH_POSTS = 'fetch_posts';

export const fetchPosts = () => {
  const res = axios.get('/api/posts');
  
  console.log('data', res.data);
  // dispatch({ type: FETCH_POSTS, payload: res.data });
};