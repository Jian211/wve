import { IPost } from '@/store/dummy';
import React from 'react'
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
  height: 540px;
  border-radius: 2.8em;
  padding: 20px;

  section:first-child {
    aspect-ratio: 16/9;
    border-radius: 2em;
    background-color: #373737;
    margin-right: 20px;
  }

  section:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    article:last-child {
      border: 1px solid red;
      height: 200px;
    }
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

export const PostBlock = ({
    author,category,comments,content,createDate,likes,location,postId
}:IPost) => {
    console.log( author,category,comments,content,createDate,likes,location,postId)
  return (
    <Wrapper>
          <section>
            사진들...
          </section>
          <section>
            <Post_user_article>
              <div>
                <div>{author.imageUrl}</div>
                <div>
                  <article>{author.nickname}</article>
                  <div>{location}</div>
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
        </Wrapper>
  )
}
