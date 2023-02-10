import { useRouter } from "next/router";
import styled from "styled-components"



const Wrapper = styled.section`

    margin: var(--margin-side);
    height: 17vh;
    display: flex;
    flex-direction: column;
    justify-content: end;

    h3{
        font-size: 2em;
        font-weight: 900;
        margin: 0.2em 0;
    }
`;


const links:ILinks = {
    "": {
        title: "한일 정보공유 사이트",
        label: "오늘의 이슈입니다."
    },
    service: {
        title: "서비스",
        label: "당신의 일상을 공유하세요."
    },
    jobs: {
        title: "일자리",
        label: "도움이 필요한 분을 찾아봐요."
    },
    voice : {
        title: "보이스룸",
        label: "당신과 맞는 친구와 소통햅보아요."
    },
};

interface ILinks {
    [key : string]: {
        title: string,
        label: string
    }
}

export function TitleHeaderWrap (){
    const router = useRouter();
    let root = router.asPath.split("/")[1];
    return (
        <Wrapper>
            <h3>{links[root].title}</h3>
            <h3>{links[root].label}</h3>
        </Wrapper>
    )
}