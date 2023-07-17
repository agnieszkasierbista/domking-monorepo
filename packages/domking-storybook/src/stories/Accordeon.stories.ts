import type {Meta, StoryObj} from '@storybook/react';

import {Accordeon} from "domking/dist";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Accordeon> = {
    title: 'Accordeon',
    component: Accordeon,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordeon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
    args: {
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed nulla sit amet purus semper gravida. Suspendisse mattis lorem justo, sed vehicula tellus rutrum id. In sit amet facilisis eros. Aliquam in.",
    },
};


