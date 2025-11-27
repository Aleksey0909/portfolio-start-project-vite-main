import styled from "styled-components";
import {LinkButton} from "../../../../components/LinkButton.tsx";
import {theme} from "../../../../styles/Theme.tsx";

type ProjectProps = {
    title?: string;
    description?: string;
    imageSrc?: string;
}

export const Project = (props: ProjectProps) => {
    return (
        <ProjectCard>
            <StyledImg src={props.imageSrc || '/public/image/cena.jpg'}  alt="projectpicture"/>
            <SubtitleStyled>{props.title || 'PROJECT 1'}</SubtitleStyled>
            <DescriptionStyled>{props.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</DescriptionStyled>
            <LinkButton title={'Look It Up'}/>
        </ProjectCard>
    );
};


const  ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    padding: 50px;
    max-width: 400px; 
    min-height: 488px;
    border-radius: 80px 0;
    border: 1px solid ${theme.colors.projectBorderColor};
    background: padding-box,
    linear-gradient(45deg, #36415975, #0F1624) border-box; 
`


const StyledImg = styled.img`
    height: 180px;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    display: block;
    margin: 0 auto;
    
    @media ${theme.media.mobile} {
        height: 140px;
    }
        
    }
`

const SubtitleStyled = styled.h3`
    padding-bottom: 20px;
    position: relative;
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    line-height: 89%;
    color: ${theme.colors.font};
    

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%; 
        transform: translateX(-50%); 
        width: 75%;
        height: 3px;
        background: linear-gradient(90deg, #8e44ad, #c194dd, #8e44ad);
        border-radius: 2px;
`

const DescriptionStyled = styled.p`
    line-height: 1.5;
    color: ${theme.colors.textColor};
    font-weight: 500;
    font-size: 18px;
`