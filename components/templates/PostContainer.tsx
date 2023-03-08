import { IPost } from '@/store/dummy'
import { gql, useQuery } from '@apollo/client'
import React from 'react'
import styled from 'styled-components';
import { PostBlock } from '../blocks/PostBlock'


// GraphQL query
const GET_ALL_POSTS = gql`{
    allPosts {
        postId
        createDate
        content
        author {
            userId
            nickname
            imageUrl
        }
        likes {
            userId
            nickname
            imageUrl
        }
        comments {
            commentId
            createDate
            author {
                userId
                nickname
            }
        }
        location
        category
    } 
}`

type AllPost = {
    allPosts : [IPost]
}

export const PostContainer = () => {
  const {data, loading, error} = useQuery<AllPost>(GET_ALL_POSTS);
    
  if(loading) return "loading"
  return (
    <div>
        {data?.allPosts.forEach( post => (
            <PostBlock 
                key={post.postId}
                author={post.author}
                category={post.category}
                comments={post.comments}
                content={post.content}
                createDate={post.createDate}
                likes={post.likes}
                location={post.location}
                postId={post.postId}
            />
        ))}
    </div>
  )
}
