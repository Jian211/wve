import { Category } from '@/components/templates/Category';
import { gql, useQuery } from '@apollo/client';
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

  div:first-child {
    width: 70%;
    background-color: pink;
  }
`;


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
        <div>사진들.../ 순번확인가능한 표지</div>
        <div>
          <div>프로필사진</div>
          <div>유저이름</div>
          <div>... /저장, qr코드,링크, 공유</div>
          <div>좋아요, 댓글, 공유, 스크랩, 좋아요 갯수, 게시글 내용 + 더보기 버튼(너무길때), 해시태그, 몇시간전 내용인지</div>
        </div>
      </PostWrapper>
      <PostWrapper>
        <div>사진들.../ 순번확인가능한 표지</div>
        <div>
          <div>프로필사진</div>
          <div>유저이름</div>
          <div>... /저장, qr코드,링크, 공유</div>
          <div>좋아요, 댓글, 공유, 스크랩, 좋아요 갯수, 게시글 내용 + 더보기 버튼(너무길때), 해시태그, 몇시간전 내용인지</div>
        </div>
      </PostWrapper>
    </Wrapper>
  )
}


