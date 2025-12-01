import styled from "styled-components";
import { theme } from "../styles/Theme.tsx";
import { motion } from "framer-motion";

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
                    return (
                        <CoinIcon
                            key={link.id}
                            whileHover={{
                                rotateY: 360,
                                scale: 1.5
                            }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut"
                            }}
                        >
                            <a href={link.href}>
                                <svg width={link.width} height={link.height} color={link.color}>
                                    <use xlinkHref={`/public/image/sprite.svg#${link.id}`}/>
                                </svg>
                            </a>
                        </CoinIcon>
                    )
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
`;

const CoinIcon = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;