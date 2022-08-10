import styled, { css } from "styled-components";
import { AllowedColors } from ".";

interface KeyStyleProps {
  color: AllowedColors;
}

function getThemeByColor(color: AllowedColors) {  
  switch (color) {
    case "light":
      return {
        background: css`
          background: var(--number-key-background);
        `,
        hoverBackground: css`
          background: var(--number-key-hover);
        `,
        activeBackground: css`
          background: var(--number-key-active);
        `,
        color: css`
          color: var(--font-color);
        `,
      };
    case "submit":
      return {
        background: css`
          background: var(--equal-background);
        `,
        hoverBackground: css`
          background: var(--equal-hover);
        `,
        activeBackground: css`
          background: var(--equal-active);
        `,
        color: css`
          color: var(--equal-color);
        `,
      };

    default:
      return {
        background: css`
          background: var(--operator-key-background);
        `,
        hoverBackground: css`
          background: var(--operator-key-hover);
        `,
        activeBackground: css`
          background: var(--operator-key-active);
        `,
        color: css`
          color: var(--font-color);
        `,
      };
  }
}

export const KeyStyle = styled.button<KeyStyleProps>`
  ${(props) => {
    const theme = getThemeByColor(props.color)

    return css`
      ${theme.background}

      font-family: 'Open Sans', sans-serif;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 400;

      ${theme.color}

      transition: background 0.1s;

      img {
        height: 1rem;
      }

      &:hover {
        ${theme.hoverBackground}
      }

      &:active {
        ${theme.activeBackground}
      }
    `;
  }}
`;