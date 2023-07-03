import type {Meta, StoryObj} from '@storybook/react';

import {AutoValidateInput} from "domking/dist";
import {
    validateIfInputContainsAtLeastOneLowercaseLetter,
    validateIfInputContainsAtLeastOneNumber, validateIfInputContainsAtLeastOneSpecialCharacter,
    validateIfInputContainsAtLeastOneUppercaseLetter,
    validateIfInputContainsOnlyNumbers,
    validateInputContentContainsAbcLowerCase,
    validateInputLengthEquals16,
    validateInputLengthEquals5
} from "../helpers/validators";


const validatingFunctions = {
    validateIfInputContainsAtLeastOneLowercaseLetter,
    validateInputLengthEquals5,
    validateInputLengthEquals16,
    validateInputContentContainsAbcLowerCase,
    validateIfInputContainsOnlyNumbers,
    validateIfInputContainsAtLeastOneUppercaseLetter,
    validateIfInputContainsAtLeastOneNumber,
    validateIfInputContainsAtLeastOneSpecialCharacter,

}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AutoValidateInput> = {
    title: 'AutoValidateInput',
    component: AutoValidateInput,
    tags: ['autodocs'],
    argTypes: {
        validate: {
            description: "Validating functions",
            options: Object.values(validatingFunctions), // An array of serializable values
            mapping: validatingFunctions,
            control: {
                type: "check",
                labels: {
                    [validateIfInputContainsAtLeastOneLowercaseLetter.toString()]: "At Least One Lowercase Letter",
                    [validateIfInputContainsAtLeastOneNumber.toString()]: "At Least One Number",
                    [validateIfInputContainsAtLeastOneSpecialCharacter.toString()]: "At Least One Special Character ",
                    [validateIfInputContainsAtLeastOneUppercaseLetter.toString()]: "At Least One Uppercase Letter",
                    [validateIfInputContainsOnlyNumbers.toString()]: "Only Numbers",
                    [validateInputLengthEquals16.toString()]: "Length Equals 16",
                    [validateInputLengthEquals5.toString()]: "Length Equals 5",
                    [validateInputContentContainsAbcLowerCase.toString()]: "ContainsAbcLowerCase"
                }
            },
        },
    }
};

export default meta;
type Story = StoryObj<typeof AutoValidateInput>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
    args: {
        validate: [validateIfInputContainsAtLeastOneLowercaseLetter],
    },
};


