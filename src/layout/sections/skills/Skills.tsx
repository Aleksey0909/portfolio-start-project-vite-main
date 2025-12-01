import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill, SkillProps} from "./Skill/Skill.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import { Container } from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

type SkillType = SkillProps & {
    id: number,
}


const skillsData: SkillType[] = [
    {
        id: 1,
        title: 'Html',
        value: 75,


    }, {
        id: 2,
        title: 'Css, Sass',
        value: 50,
    }, {
        id: 3,
        title: 'React',
        value: 90,
    }, {
        id: 4,
        title: 'JS',
        value: 35,
    }

]

const skillImage = [
    {
        id: 5,
        img: '/public/image/skill-git.jpg',
        width:"",
        height:""
    },
    {
        id: 6,
        img: '/public/image/Vector.png',
        width:"",
        height:""
    },{
        id: 7,
        img: '/public/image/skill-figma.jpg',
        width:"",
        height:""
    }
]





export const Skills = () => {
    return (
        <SkillsWrapper>
            <Container>
            <SectionTitle title={'Skills'}/>
            <FlexWrapper direction='column' height="40vh">
                {skillsData.map((skill) => (<Skill title={skill.title} value={skill.value} key={skill.id}/>))}
            </FlexWrapper>
            <SectionTitle sizeMobile="26px" align='center' title={"Additional technologies and skills"} size={"44px"} />
            <ImagesWrapper>
                {skillImage.map((image) => (
                    <img
                        alt={""}
                        src={image.img}
                        key={image.id}
                        width={image.width}
                        height={image.height}
                    />
                ))}
            </ImagesWrapper>
            </Container>
        </SkillsWrapper>
    );
};

const SkillsWrapper = styled.section`
    position: relative;
    background-color: peachpuff;

    ${Container} {
        @media ${theme.media.mobile} {
            padding: 15px;
        }
    }
`;



const ImagesWrapper = styled.div`
    gap: 50px;
    display: flex;
    justify-content: center;
    img{
        background: transparent; 
        mix-blend-mode: normal;
        border-radius: 25px;
        @media ${theme.media.tablet} {
            width: 70px;
            height: 70px;
            border-radius: 20px;
        }
    }
`


