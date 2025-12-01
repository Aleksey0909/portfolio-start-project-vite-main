import styled from "styled-components";

export const HeaderTitle = () => {
    return (
        <HeaderTitleStyle><a href="">Portfolio</a>
            <svg width="47" height="47">
                <use xlinkHref="/public/image/sprite.svg#circle"/>
            </svg>
        </HeaderTitleStyle>
    );
};

const HeaderTitleStyle = styled.h1`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    line-height: 100%;
    gap: 5px;
`