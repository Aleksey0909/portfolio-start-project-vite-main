import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {LinkButton} from "../../../components/LinkButton.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main = () => {
    return (
        <StyledMain>
            <Container padding="30px 15px">
                <FlexWrapper justify="space-evenly" align="center" height="100%"
                             gap="20px">
                    <ContentBlock>
                        <Title>
                            <Typewriter
                                options={{
                                    strings: ['Lorem ipsum dolor amet'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150,
                                }}
                            />
                        </Title>
                        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. </Description>
                        <LinkButton title={'Let’s Begin'}/>
                    </ContentBlock>
                    <Tilt scale={1.15}
                          transitionSpeed={2000}>
                        <PhotoWrapper>
                            <Photo src="/image/nicolas-cage-catge4.jpg" alt=""/>
                        </PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    display: flex;
    min-height: 100vh;


    ${FlexWrapper} {
        @media ${theme.media.tablet} {
            padding-top: 80px;
            flex-direction: column-reverse;
        }
    }



`

const ContentBlock = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
    max-width: 675px;
    min-height: 300px;

    @media ${theme.media.tablet} {
        gap: 25px;
    }

`


const PhotoWrapper = styled.div`
    aspect-ratio: 380 / 450;
    height: 450px;
    width: 380px;


`


const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 80px 0;
    border: 4px solid transparent;
    background: linear-gradient(white, white) padding-box,
    linear-gradient(45deg, #8643DC, #00C0FD) border-box;

    @media ${theme.media.mobile} {
        width: 90%;
    }
`

const Title = styled.h2`
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 54px;
    text-align: left;
    min-height: 170px;

    @media ${theme.media.tablet} {
        min-height: 120px;
        font-size: 36px;
    }

}
`

const Description = styled.p`
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    text-align: left;
    overflow-wrap: break-word;
    width: 70%;

    @media ${theme.media.tablet} {
        font-size: 16px;
    }
`