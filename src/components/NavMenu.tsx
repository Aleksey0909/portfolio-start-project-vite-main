import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";



type NavMenuType = {
    href: string,
    text: string,
    id: number,
}
const navMenuItems: NavMenuType[] = [
    {
        id: 1,
        text: "About me",
        href: "#",
    },
    {
        id: 2,
        text: "Technologies",
        href: "#",
    },
    {
        id: 3,
        text: "Projects",
        href: "#",
    },
]


export const NavMenu = () => {
    return (
        <StyledUl>
            {navMenuItems.map((item) => (
                <li key={item.id}><a href={item.href}>{item.text}</a></li>
            ))}
        </StyledUl>
    );
};

const StyledUl = styled.ul`
    display: flex;
    gap: 80px;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;

    @media ${theme.media.tablet} {
        gap: 20px;
        display: none;
    }
    
  

`