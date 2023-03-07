import { Category } from '@/components/templates/Category';
import { gql, useQuery } from '@apollo/client';
import Image from 'next/image';
import React  from 'react'
import styled from 'styled-components'



const Wrapper = styled.section`
  width: 100%;
  
`;

const PostWrapper = styled.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
  height: 540px;

  section:first-child {
    aspect-ratio: 16/9;
    background-color: #373737;
  }
`;


const Post_user_article = styled.article`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;

  div:first-child {
    display: flex;

    div:first-child {
      width: 40px;
      height: 40px;
      background-color: pink;
    }
  }
`

const GET_ALL_POSTS = gql`
  {
    getPost{
      postId
      createDate
      content
      user {
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
        user {
          userId
          nickname
        }
      }
    } 
  }
`

export default function Index() {
  const {data,loading, error} = useQuery(GET_ALL_POSTS);

  console.log("테스트입니다.",data)

  return (
    <Wrapper>
      <Category />
      <PostWrapper>
        <section>사진들...</section>
        <section>
          <Post_user_article>
            <div>
              <div>이미지</div>
              <div>
                <article>Jian</article>
                <div>tokyo city in sinjuku</div>
              </div>
            </div>
            <div>...</div>
          </Post_user_article>
          <article>
            <div>게시글</div>
          </article>
          <article>
            <div>좋아요, 댓글, 공유, 스크랩, 좋아요 갯수, 게시글 내용 + 더보기 버튼(너무길때), 해시태그, 몇시간전 내용인지</div>
          </article>

        </section>
      </PostWrapper>
     
    </Wrapper>
  )
}


