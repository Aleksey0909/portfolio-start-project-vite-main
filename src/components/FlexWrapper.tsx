import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";


type FlexWrapperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
    height?: string,
    gap?: string,
    mobileDirecriom?: string,
}


export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    height: ${props => props.height || 'auto'};
    gap: ${props => props.gap || '0px'};
    @media ${theme.media.mobile}
    {
        flex-direction: ${props => props.mobileDirecriom || props.direction || "row"};
    }
`