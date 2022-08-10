import { Keyboard } from "./styles"

import backspaceKey from "../../assets/backspace-icon.svg"
import { Key } from "../key"
import { KeyboardProps } from "../types/types"

export function StandardKeyboard({handlePressedKey} : KeyboardProps) {
    return (
            <Keyboard>
                <Key handlePressedKey={handlePressedKey}  action="percentage">%</Key>
                <Key handlePressedKey={handlePressedKey}  action="clear">CE</Key>
                <Key handlePressedKey={handlePressedKey}  action="clear-all">C</Key>
                <Key handlePressedKey={handlePressedKey}  action="backspace"><img src={backspaceKey} alt="Backspace Key" /></Key>
                <Key handlePressedKey={handlePressedKey}  action="one-div-x" ><sup>1</sup>/<sub>x</sub></Key>
                <Key handlePressedKey={handlePressedKey}  action="x-power-two">x<sup>2</sup></Key>
                <Key handlePressedKey={handlePressedKey}  action="square-root"><sup>2</sup>&radic;x</Key>
                <Key handlePressedKey={handlePressedKey}  action="divider">÷</Key>
                <Key handlePressedKey={handlePressedKey}  action="number" color="light">7</Key>
                <Key handlePressedKey={handlePressedKey}  action="number" color="light">8</Key>
                <Key handlePressedKey={handlePressedKey}  action="number" color="light">9</Key>
                <Key handlePressedKey={handlePressedKey}  action="multiply">&times;</Key>
                <Key handlePressedKey={handlePressedKey}  action="number" color="light">4</Key>
                <Key handlePressedKey={handlePressedKey}  action="number" color="light">5</Key>
                <Key handlePressedKey={handlePressedKey}  action="number" color="light">6</Key>
                <Key handlePressedKey={handlePressedKey}  action="subtract">-</Key>
                <Key handlePressedKey={handlePressedKey}  action="number" color="light">1</Key>
                <Key handlePressedKey={handlePressedKey}  action="number" color="light">2</Key>
                <Key handlePressedKey={handlePressedKey}  action="number" color="light">3</Key>
                <Key handlePressedKey={handlePressedKey}  action="add">+</Key>
                <Key handlePressedKey={handlePressedKey}  action="negate" color="light">+/-</Key>
                <Key handlePressedKey={handlePressedKey}  action="number" color="light">0</Key>
                <Key handlePressedKey={handlePressedKey}  action="decimal" color="light">.</Key>
                <Key handlePressedKey={handlePressedKey}  action="calculate" color="submit">=</Key>
            </Keyboard>        
    )
}