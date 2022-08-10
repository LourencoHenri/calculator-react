import { Keyboard } from "./styles"
import { Key } from "../key/index"

import backspaceKey from "../../assets/backspace-icon.svg"
import { KeyboardProps } from "../types/types"

export function ScientificKeyboard({handlePressedKey} : KeyboardProps) {
    return (
        <Keyboard>
            <Key handlePressedKey={handlePressedKey} action="x-power-two">x<sup>2</sup></Key>
            <Key handlePressedKey={handlePressedKey} action="pi">π</Key>
            <Key handlePressedKey={handlePressedKey} action="clear">CE</Key>
            <Key handlePressedKey={handlePressedKey} action="clear-all">C</Key>
            <Key handlePressedKey={handlePressedKey} action="backspace"><img src={backspaceKey} alt="Backspace Key" /></Key>
            <Key handlePressedKey={handlePressedKey} action="square-root"><sup>2</sup>&radic;x</Key>
            <Key handlePressedKey={handlePressedKey} action="one-over-x"><sup>1</sup>/<sub>x</sub></Key>
            <Key handlePressedKey={handlePressedKey} action="module">|x|</Key>
            <Key handlePressedKey={handlePressedKey} action="exponential">exp</Key>
            <Key handlePressedKey={handlePressedKey} action="mod">mod</Key>
            <Key handlePressedKey={handlePressedKey} action="x-power-y">x<sup>y</sup></Key>
            <Key handlePressedKey={handlePressedKey} action="x-power-three">x<sup>3</sup></Key>
            <Key handlePressedKey={handlePressedKey} action="cubic-root"><sup>3</sup>&radic;x</Key>
            <Key handlePressedKey={handlePressedKey} action="log-y-x">log<sub>y</sub>x</Key>
            <Key handlePressedKey={handlePressedKey} action="percentage">%</Key> 
            <Key handlePressedKey={handlePressedKey} action="y-root-x"><sup>y</sup>&radic;x</Key>
            <Key handlePressedKey={handlePressedKey} action="two-power-x">2<sup>x</sup></Key>
            <Key handlePressedKey={handlePressedKey} action="euler">e</Key>
            <Key handlePressedKey={handlePressedKey} action="factorial">n!</Key>
            <Key handlePressedKey={handlePressedKey} action="divider">÷</Key>
            <Key handlePressedKey={handlePressedKey} action="ten-power-x">10<sup>x</sup></Key>
            <Key handlePressedKey={handlePressedKey} action="number" color="light">7</Key>
            <Key handlePressedKey={handlePressedKey} action="number" color="light">8</Key>
            <Key handlePressedKey={handlePressedKey} action="number" color="light">9</Key>
            <Key handlePressedKey={handlePressedKey} action="multiply">&times;</Key>
            <Key handlePressedKey={handlePressedKey} action="e-power-x">e<sup>x</sup></Key>
            <Key handlePressedKey={handlePressedKey} action="number" color="light">4</Key>
            <Key handlePressedKey={handlePressedKey} action="number" color="light">5</Key>
            <Key handlePressedKey={handlePressedKey} action="number" color="light">6</Key>
            <Key handlePressedKey={handlePressedKey} action="subtract">-</Key>
            <Key handlePressedKey={handlePressedKey} action="log">log</Key>
            <Key handlePressedKey={handlePressedKey} action="number" color="light">1</Key>
            <Key handlePressedKey={handlePressedKey} action="number" color="light">2</Key>
            <Key handlePressedKey={handlePressedKey} action="number" color="light">3</Key>
            <Key handlePressedKey={handlePressedKey} action="add">+</Key>
            <Key handlePressedKey={handlePressedKey} action="natural-logarithm">ln</Key>
            <Key handlePressedKey={handlePressedKey} action="negate" color="light">+/-</Key>
            <Key handlePressedKey={handlePressedKey} action="number" color="light">0</Key>
            <Key handlePressedKey={handlePressedKey} action="decimal" color="light">.</Key>
            <Key handlePressedKey={handlePressedKey} action="calculate" color="submit">=</Key>
        </Keyboard>
    )
}
/*
parisienne font
petit formal script
Great Vibes
Tangerine
*/