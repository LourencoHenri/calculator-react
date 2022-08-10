import styled from "styled-components"

export const Container = styled.header`
    padding: 0.5rem;
`

export const Content = styled.div`
    display: flex;
`

export const OpenMenuButton = styled.button`
    //cursor: pointer;
    border: none;
    border-radius: 0.35rem;
    width: 2.5rem;
    height: 2rem;
    background: var(--background-color);

    transition: background 0.15s;

    &:hover {
        background: var(--menu-hover-background);    
    }

    img {
        background: transparent;
    }
`

export const Title = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    color: var(--font-color);
    padding-left: 0.5rem;
`