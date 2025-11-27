import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {useState} from "react";

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

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <BurgerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                <span></span>
            </BurgerButton>
            <StyledUlMobile isOpen={isOpen}>
                {navMenuItems.map((item) => (
                    <li key={item.id}><a href={item.href}>{item.text}</a></li>
                ))}
            </StyledUlMobile>
        </>
    );
};

const StyledUlMobile = styled.ul<{ isOpen: boolean }>`
    display: none;
    gap: 80px;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;

    @media ${theme.media.tablet} {
        display: ${props => props.isOpen ? 'flex' : 'none'};
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: ${theme.colors.primaryBg};
        padding: 60px 20px 20px;
        gap: 20px;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
        position: relative;
        width: 30px;
        height: 30px;
        background: transparent;
        border: none;
        cursor: pointer;
        z-index: 1000;

        span {
            display: block;
            width: 30px;
            height: 2px;
            background: ${theme.colors.font};
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.3s ease;

            ${props => props.isOpen && `
                background: transparent;
            `}
            &::before {
                content: "";
                display: block;
                width: 30px;
                height: 2px;
                background: ${theme.colors.font};
                position: absolute;
                top: 10px;
                left: 0;
                transition: all 0.3s ease;

                ${props => props.isOpen && `
                    transform: rotate(45deg) translate(0, 0);
                    top: 0;
                `}
            }

            &::after {
                content: "";
                display: block;
                width: 30px;
                height: 2px;
                background: ${theme.colors.font};
                position: absolute;
                bottom: 10px;
                left: 0;
                transition: all 0.3s ease;

                ${props => props.isOpen && `
                    transform: rotate(-45deg) translate(0, 0);
                    bottom: 0;
                `}
            }
        }
    }
`