import styled from "styled-components";

type TitleProps = {
    title?: string,
    size?: string,
    align?: string,
}



 export const SectionTitle = (props:TitleProps) => {
    return (
        <StyledSectionTitle size={props.size} align={props.align}>{props.title || 'PROJECTS' }</StyledSectionTitle>
    );
};


const StyledSectionTitle = styled.h3<TitleProps>`
    margin-bottom: 50px;
    font-weight: 600;
    color: #fff;
    font-size: ${props => props.size || '46px'};
    text-align: ${props => props.align || 'unset'};
    
`
