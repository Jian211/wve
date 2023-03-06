// 포스트 관련된 더미 데이터



export const post = {
    postId: "1",
    user : {
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
            user: {
                userId: "testuser01",
                nickname: "정글",
                imageUrl: "img01"
            }
        },
        {
            commentId: 2,
            createDate: "202303032100",
            user: {
                userId: "testuser02",
                nickname: "멜롱이",
                imageUrl: "img02"
            }
        },
    ], 
    location: {
        location: "일본신사"
    },
    category: ["일상","여행"]
}