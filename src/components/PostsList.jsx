import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../redux/asyncActions/fetchPosts'

export default function PostsList() {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector((state) => state.posts)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts())
    }
  }, [dispatch, status])

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'failed') return <p>Error: {error}</p>

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {items.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
