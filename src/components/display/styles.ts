import styled from "styled-components"

export const Container = styled.div`
    padding: 0 0.75rem 1rem 0.75rem;
`

export const Content = styled.main`
    text-align: right;
`

export const Count = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: grey;
    height: 1.35rem;
`

export const Result = styled.div`

    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    font-weight: 400;
    color: var(--font-color);
    height: 2.75rem;

    overflow-x: scroll;
    overflow-y: hidden;

    ::-webkit-scrollbar {
        height: 2px;
    }

    ::-webkit-scrollbar-track {
        border-radius: 1px;
    }

    ::-webkit-scrollbar-thumb {
        background: grey; 
        border-radius: 1px;
    }
`