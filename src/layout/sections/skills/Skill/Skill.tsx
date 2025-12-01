import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";



export type SkillProps = {
    title: string,
    value: number,
}


export const Skill = (props: SkillProps) => {
    return (

        <SkillContainer>
            <p>{props.title}</p>
            <ProgressMeter value={props.value} min={0} max={100}/>
        </SkillContainer>


    )

};


const SkillContainer = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    font-size: 18px
`



const ProgressMeter = styled.meter`
    width: 90%;
    height: 20px;
    margin: 0 0 20px 0;
    
    @media ${theme.media.mobile} {
        width: 100%;
        height: 30px;
    }


    &::-webkit-meter-bar {
        background: ${theme.colors.progressColor};
        border-radius: 4px;
        border: 1px solid transparent;

        @media ${theme.media.mobile} {
            border-radius: 8px;
        }
    }


    &::-webkit-meter-optimum-value {
        background: linear-gradient(45deg, #13ADC7, #6978D1, #945DD6);
        border-radius: 3px;

        @media ${theme.media.mobile} {
            border-radius: 6px;
        }

    }
`

