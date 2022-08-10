import styled from "styled-components"

export const Container = styled.div`
    background-color: var(--menu-background);
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    border-radius: 0 0.75rem 0.75rem 0;
    width: 15rem;
    height: 19rem;
    box-shadow: 0px 0px 3px 0.125px var(--menu-title);
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
`

export const Content = styled.main`
    margin-left: 0.25rem;
`

export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;
    color: var(--menu-title);
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem;
`

export const CloseMenuButton = styled.button` //Arrumar esse botão //
    cursor: pointer;
    background: transparent;
    width: 1rem;
    height: 1rem;
    border-radius: 0.75rem;
    margin: 0.5rem;

    img {
        height: 1rem;
    }
`

export const StandardButton = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: transparent;
    border-radius: 0.25rem 0 0 0.25rem;
    height: 2rem;
    width: 100%;

    font-family: 'Open Sans', sans-serif;
    color: var(--menu-text);
    text-align: left;

    img {
        height: 1.25rem;
        padding: 0 0.5rem;
    }

    &:hover {
        background: var(--menu-hover-background);
    }

    &:active {
        background: var(--menu-active-background);
    }
`

export const ScientificButton = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: transparent;
    border-radius: 0.25rem 0 0 0.25rem;
    height: 2rem;
    width: 100%;
    
    font-family: 'Open Sans', sans-serif;
    color: var(--menu-text);
    text-align: left;

    img {
        height: 1.25rem;
        padding: 0 0.5rem;
    }

    &:hover {
        background: var(--menu-hover-background);
    }

    &:active {
        background: var(--menu-active-background);
    }
`