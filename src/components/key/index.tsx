import { ReactNode } from "react";
import { KeyStyle } from "./styles";

export type AllowedColors = "default" | "light" | "submit"

export type actions = "number" | "x-power-two" | "pi" | "euler" | "clear-all" | "backspace" | "square-root" | "one-over-x" | "module" | "exponential" | "mod" | "x-power-y" | "x-power-three" | "cubic-root" | "log-y-x" | "percentage" | "y-root-x" | "two-power-x" | "right-parentheses" | "factorial" | "divider" | "ten-power-x" | "multiply" | "e-power-x" | "subtract" | "log" | "add" | "natural-logarithm" | "negate" | "decimal" | "calculate" | "clear" | "one-div-x"

interface KeyProps {
    children: ReactNode | number;
    color?: AllowedColors;
    action: actions;
    handlePressedKey: (action : actions, number ?: string) => void;
}

export function Key({children, color="default", handlePressedKey, action} : KeyProps) {
    const number : string | undefined = action === "number" ? children as string : undefined;

    return (
        <KeyStyle color={color} onClick={() => handlePressedKey(action, number )}>
            {children}
        </KeyStyle>
    )
}