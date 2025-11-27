import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

type LinkButtonProps = {
    padding?: string;
    title?: string;
    href?: string;
}

export const LinkButton = (props: LinkButtonProps) => {
    return (
        <StyledLinkButton
            href={props.href || "#"}
            padding={props.padding}>
            {props.title || 'Start'}
        </StyledLinkButton>
    )
};

const StyledLinkButton = styled.a<LinkButtonProps>`
    display: inline-block;
    text-decoration: none;
    text-align: center;

    position: relative;
    background: transparent;
    padding: ${props => props.padding || '16px 40px'};
    border: 2px solid #007bff;
    color: #007bff;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 50px;
    overflow: hidden;
    transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    color 0.8s ease 0.1s,
    border-color 0.8s ease 0.1s;
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.2);

    @media  ${theme.media.mobile} {
        padding: ${props => props.padding || '16px 75px'};
    }

    &::before {
        content: '';
        position: absolute;
        bottom: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #007bff, #0056b3);
        border-radius: 50% 50% 0 0;
        transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index: -1;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -100%;
        left: -10%;
        width: 120%;
        height: 120%;
        background: rgba(0, 123, 255, 0.1);
        border-radius: 45%;
        animation: wave 6s infinite linear;
        opacity: 0;
        transition: opacity 0.8s ease 0.1s;
        z-index: -2;
    }

    &:hover {
        transform: scale(1.05) translateY(-3px);
        color: white;
        border-color: transparent;
        box-shadow: 0 8px 25px rgba(0, 123, 255, 0.4);

        &::before {
            bottom: 0;
            border-radius: 0;
            height: 200%;
        }

        &::after {
            opacity: 1;
        }
    }

    &:active {
        transform: scale(1.02) translateY(-1px);
        box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
    }

    @keyframes wave {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;