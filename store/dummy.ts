// 포스트 관련된 더미 데이터

export interface IPost {
    postId : string,
    createDate : string,
    content: string,
    author : {
        userId : string,
        nickname : string,
        imageUrl : string,
    },
    likes : {
        userId : string,
        nickname : string,
        imageUrl : string,
    },
    comments : {
        commentId : number,
        createDate : string,
        author : {
        userId : string,
        nickname : string
        }
    },
    location : string,
    category: [string]
}

export const posts = [
    {
        postId: "1",
        author : {
            userId: "1",
            nickname: "솔감자",
            imageUrl: "이미지유알엘입니다.",
        },
        createDate: "202303032100",
        content: "아직 백단은 어렵네요 흑흑, 일본에서 사케한잔?",
        hits: 10,
        likes: [
            { 
                userId: "testuser01",
                nickname:"정글",
            },
            { 
                userId: "testuser02",
                nickname:"사에루",
            },
            { 
                userId: "testuser03",
                nickname:"쮜맹",
            },
        ],
        comments : [
            {
                commentId: 1,
                createDate: "202303032100",
                author: {
                    userId: "testuser01",
                    nickname: "정글",
                    imageUrl: "img01"
                }
            },
            {
                commentId: 2,
                createDate: "202303032100",
                author: {
                    userId: "testuser02",
                    nickname: "멜롱이",
                    imageUrl: "img02"
                }
            },
        ], 
        location: "일본신사",
        category: ["일상","여행"]
    },
    {
        postId: "2",
        author : {
            userId: "2",
            nickname: "우리사에",
            imageUrl: "이미지유알엘입니다.",
        },
        createDate: "202303072400",
        content: "오류해결좀요 ㅠㅠ",
        hits: 21,
        likes: [
            { 
                userId: "testuser11",
                nickname:"미드",
            },
        ],
        comments : [
            {
                commentId: 1,
                createDate: "202303091010",
                author: {
                    userId: "testuser12",
                    nickname: "서폿",
                    imageUrl: "img05"
                }
            },
            {
                commentId: 2,
                createDate: "202303102155",
                author: {
                    userId: "testuser09",
                    nickname: "원딜",
                    imageUrl: "img12"
                }
            },
        ], 
        location: "됴코",
        category: ["일상"]
    },
];