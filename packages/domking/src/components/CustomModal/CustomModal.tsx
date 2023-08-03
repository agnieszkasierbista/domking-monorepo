import FocusTrap from 'focus-trap-react';
import React, {PropsWithChildren} from 'react';
import {CustomModalProps} from "./CustomModal.types";
import {useScrollBlocking} from "../../helpers/customHooks";
import {getXbutton, getCancelButton, getConfirmButton} from "../../helpers/helpers";
import {StyledOverlay, StyledModalContent} from "./CustomModal.styled";

export const CustomModal: React.FC<PropsWithChildren<CustomModalProps>> = (props) => {

    useScrollBlocking(props.$isModalVisible);


    return (
        props.$isModalVisible && props.$creator[1] === "custom"
            ?
            <FocusTrap>
                <StyledOverlay
                    id="overlay"
                    onClick={() => props.$dispatchToggleModalVisibility()}
                    colorOption={props.$color}
                    backgroundOption={props.$background}
                    blurOption={props.$blur}>

                    <StyledModalContent
                        id="customModal"
                    >
                        <button
                            onClick={() => getXbutton(props.$xButton, props.$dispatchClose, props.$dispatchCancelX, props.$dispatchConfirmX)}
                        >x
                        </button>
                        <article>
                            <p>
                                Here goes some message.
                            </p>
                            <button
                                onClick={() => getCancelButton(props.$cancelButton, props.$dispatchCancel, props.$dispatchClear, props.$dispatchCancelAndClose)}

                            >Cancel
                            </button>
                            <button
                                onClick={() => getConfirmButton(props.$confirmButton, props.$dispatchConfirm, props.$dispatchSave, props.$dispatchConfirmAndClose)}

                            >Confirm
                            </button>
                        </article>
                    </StyledModalContent>
                </StyledOverlay>
            </FocusTrap>
            :
            null
    )
};