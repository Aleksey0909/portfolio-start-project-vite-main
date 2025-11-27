import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Project} from "./project/Project.tsx";
import {Container} from "../../../components/Container.tsx";



const projectsData = [
    {
        id: 1,
        img: '',
        title: 'Project 1',
        description: '',
    },
    {
        id: 2,
        img: '/public/image/cat.jpg',
        title: 'Project 2',
        description: '',
    },
    {
        id: 3,
        img: '/public/image/pedro.webp',
        title: 'Project 3',
        description: '',
    },
    {
        id: 4,
        img: '/public/image/fish.jpg',
        title: 'Project 4',
        description: '',
    },

]

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle/>

                    <ProjectsWrapper>
                        {
                            projectsData.map((p) => <Project title={p.title}
                                                             imageSrc={p.img}
                                                             description={p.description}
                                                             key={p.id}/>)
                        }
                    </ProjectsWrapper>

            </Container>
        </StyledProjects>
    );
};


const StyledProjects = styled.section`
    display: flex;
    min-height: 100vh;

${Container} {
    padding: 50px;
}

`



const ProjectsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
    
`