import {Link} from "../../components/Link.tsx";
import styled from "styled-components";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderTitle} from "../../components/HeaderTitle.tsx";
import {NavMenu} from "../../components/NavMenu.tsx";
import {theme} from "../../styles/Theme.tsx";
import {socialLinks} from "../../constants/data.ts";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";


export const Header = () => {
    return (
        <StyledHeader>
            <Container padding="0 15">
                <HeaderFlexWrapper align="center" justify="space-between" wrap="wrap">
                    <HeaderTitle/>
                    <NavMenu/>
                    <Link links={socialLinks}/>
                    <MobileMenu/>
                </HeaderFlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    padding-block: 15px;

    Link {
        @media ${theme.media.tablet} {
            display: none;
        }
    }

`


const HeaderFlexWrapper = styled(FlexWrapper)`

    @media ${theme.media.tablet} {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: auto;
    
    }
    
}
`


