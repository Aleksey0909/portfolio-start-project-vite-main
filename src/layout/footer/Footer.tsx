import {Link} from "../../components/Link.tsx";
import styled from "styled-components";
import {socialLinks} from "../../constants/data.ts";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container padding="0 15px">
                <FlexWrapper mobileDirecriom="column" direction="row" justify="space-between" align="center" wrap="nowrap"  gap="10px">
                    <FooterPhone>Call me: 123-456-789</FooterPhone>
                    <FooterMailLink href="xxx@xyz.com">Email:xxx@xyz.com</FooterMailLink>
                    <Link links={socialLinks}/>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    display: flex;
    padding-block: 15px;
    background-color: ${theme.colors.primaryBg};
    font-weight: 600;
    font-size: 18px;
    color: ${theme.colors.font};
`


const FooterPhone = styled.p`
    font-weight: 600;
    font-size: 22px;
    
`

const FooterMailLink = styled.a`
    font-weight: 600;
    font-size: 22px;
`