import type {Meta, StoryObj} from '@storybook/react';

import {CustomDropdown} from "domking/dist";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CustomDropdown> = {
    title: 'CustomDropdown',
    component: CustomDropdown,
    tags: ['autodocs'],
    argTypes: {
        values: {
            description: "Values for the dropdown",
            control: "object"
        },
        dispatchSetDropdownContent: {
            description: "A function that returns void",
        }
    }
};

export default meta;
type Story = StoryObj<typeof CustomDropdown>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
    args: {
        values: ["aaa", "bbb", "ccc", "qwerrty", "odnfuf", "124"],
        dispatchSetDropdownContent: () => console.log("yup!")
    },
};


