import styled from "styled-components";

type ContainerProps = {
    padding?: string
}


export const Container = styled.div<ContainerProps>`
    max-width: 1160px;
    width: 100%;
    min-height: 100%;
    padding: ${props => props.padding || '50px'};
    margin: 0 auto;
    
`