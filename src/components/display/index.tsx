
import { Container, Count, Result } from "./styles";
import { Content } from "./styles";

interface DisplayProps {
    displayContent: string;
    countContent: string;
}

// eslint-disable-next-line no-empty-pattern
export function Display({displayContent, countContent} : DisplayProps) {
    return (
        <Container>
            <Content>
                <Count>
                    {countContent}
                </Count>
                <Result>
                    {new Intl.NumberFormat("en-US").format(Number(Number(displayContent)))}
                </Result>
            </Content>
        </Container>
    )
}
