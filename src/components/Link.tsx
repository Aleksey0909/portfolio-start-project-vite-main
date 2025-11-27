import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";


type LinkType = {
    id?: string,
    href?: string,
    width?: string,
    height?: string,
    color?: string,
}

type LinksProps = { links: LinkType[] }


export const Link = (props: LinksProps) => {
    return (
        <SocialIcons>
            {
                props.links.map((link) => {
                    return (<a key={link.id} href={link.href}>
                        <svg width={link.width} height={link.height} color={link.color}>
                            <use xlinkHref={`/public/image/sprite.svg#${link.id}`}/>
                        </svg>
                    </a>)
                })
            }
        </SocialIcons>
    );
};



const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    
    @media ${theme.media.tablet} {
        display: none;
    }
    
`