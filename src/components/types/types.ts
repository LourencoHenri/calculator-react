import { actions } from "../key";

export interface KeyboardProps {
    handlePressedKey: (action : actions) => void;
}