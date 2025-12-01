import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Timeline} from "./timeline/Timeline.tsx";
import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

const itemsData = [
    { date: "2020", label: "Начало карьеры" },
    { date: "2021", label: "Junior Developer" },
    { date: "2022", label: "Middle Developer" },
    { date: "2023", label: "Senior Developer" }
]



export const Experience = () => {
    return (
        <SectionExperience>
            <Container>
            <SectionTitle title="Experience"  />
            <Timeline items={itemsData} />
            </Container>
        </SectionExperience>
    );
};

const SectionExperience = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40vh;
    @media ${theme.media.tablet} {
        height: 75vh;
        
    }
`