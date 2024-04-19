import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "@components/Buttons";
import { sizeOptions } from "@components/types";
import { buttonTypeOptions, buttonVariantOptions } from "../types";

import * as icons from "@components/Icons";

const IconButtonMeta: Meta<typeof IconButton> = {
    title: "Buttons/IconButton",
    component: IconButton,
    argTypes: {
        size: {
            options: sizeOptions,
            control: { type: "radio" },
        },
        variant: {
            options: buttonVariantOptions,
            control: { type: "radio" },
        },
        type: {
            options: buttonTypeOptions,
            control: { type: "radio" },
        },
        icon: {
            options: Object.keys(icons).map(key => key.replace("Icon", "")),
            control: { type: "radio" },
        },
    },
};

export default IconButtonMeta;

export const Basic: StoryObj<typeof IconButton> = {
    args: {
        disabled: false,
        opacity: 0.7,
        variant: "primary",
        onPress: () => console.log("Pressed"),
        rounded: false,
        type: "solid",
        size: sizeOptions[0],
        loading: false,
        icon: undefined,
    },
};
