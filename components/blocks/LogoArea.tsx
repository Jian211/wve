import Link from 'next/link';
import styled from 'styled-components';
import logo from '../../public/images/test-logo.png'
import ImageAtom from '../atoms/ImageAtom';


const Wrapper = styled.div`
    display: flex;
    width: 33%;
    justify-content: space-between;
    align-items: center;

    ul {
        display: flex;
        font-size: 1.1em;
        font-weight: 500;
        justify-content: space-around;

        li {
            padding : 10px;
        }
    }
`;

const navPageLinks = [
    { href: "/service", label: "서비스" },
    { href: "/jobs", label: "비즈니스" },
    { href: "/voice", label: "보이스룸" },
]

const LogoArea = () => {
  return (
    <Wrapper>
        <Link href="/">
            <ImageAtom 
                src={logo}
                alt="Logo Img"
                width={70}
            />
        </Link>
        <ul>
            {navPageLinks.map( ( {href, label} ) => (
                <li key={href}>
                    <Link href={href}> {label}</Link>
                </li>
            ))}
        </ul>
    </Wrapper>
  )
}

export default LogoArea