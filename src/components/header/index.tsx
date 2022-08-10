import { Container, Content, OpenMenuButton, Title } from "./styles";
import iconMenu from "../../assets/iconMenu.svg"
import { AllowedKeys } from "../../App";

interface HeaderProps {
    onOpenMenu: () => void;
    activeKeys: AllowedKeys
}

export function Header({onOpenMenu, activeKeys} : HeaderProps) {

    return (
        <Container>
            <Content>
                <OpenMenuButton onClick={onOpenMenu} >
                    <img src={iconMenu} alt="Open menu button" />
                </OpenMenuButton>
                <Title>
                    {activeKeys}              
                </Title>
            </Content>
        </Container>
    )
}