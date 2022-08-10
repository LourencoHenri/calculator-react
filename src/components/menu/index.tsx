import { CloseMenuButton, Container, Header, Title, Content, StandardButton, ScientificButton } from "./styles";

import scientificIcon from "../../assets/scientific-icon.svg"
import standardIcon from "../../assets/standard-icon.svg"
import closeIcon from "../../assets/close-icon.svg"
import { AllowedKeys } from "../../App";

interface MenuProps {
    onCloseMenu: () => void;   
    onChange: (newActiveKeys : AllowedKeys) => void; 
}

export function Menu({onCloseMenu, onChange} : MenuProps) {

    return (
        <Container>
            <Header>
                <Title>
                    Calculator
                </Title>
                <CloseMenuButton onClick={onCloseMenu} >
                    <img src={closeIcon} alt="Close Menu Icon" />
                </CloseMenuButton>
            </Header>
            <Content>
                <StandardButton onClick={ () => onChange("Standard")} >
                    <img src={standardIcon} alt="Standard Icon"  />
                    Standard
                </StandardButton>

                <ScientificButton onClick={ () => onChange("Scientific")} >
                    <img src={scientificIcon} alt="Scientific Icon" />
                    Scientific
                </ScientificButton>

            </Content>
        </Container>
    )
}