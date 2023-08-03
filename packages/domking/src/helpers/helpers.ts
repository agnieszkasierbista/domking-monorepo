import {ConfirmButton, CancelButton, XButton} from "../components/CustomModal/CustomModal.types";

export function getConfirmButton(confirmButton: ConfirmButton, option1: () => void, option2: () => void, option3: () => void) {
    switch (confirmButton[1]) {
        case "confirm":
            return option1()
        case "save":
            return option2()
        case "confirmAndClose":
            return option3()
        default:
            return console.log("Confirm button clicked!")
    }
}

export function getCancelButton(cancelButton: CancelButton, option1: () => void, option2: () => void, option3: () => void) {
    switch (cancelButton[1]) {
        case "cancel":
            return option1()
        case "clear":
            return option2()
        case "cancelAndClose":
            return option3()
        default:
            return console.log("Cancel button clicked!")
    }
}

export function getXbutton(xButton: XButton, option1: () => void, option2: () => void, option3: () => void) {
    switch (xButton[1]) {
        case "close":
            return option1()
        case "cancelX":
            return option2()
        case "confirmX":
            return option3()
        default:
            return console.log("X button clicked!")
    }
}