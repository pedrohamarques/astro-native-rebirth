import type { Meta, StoryObj } from "@storybook/react";

import { sizeOptions } from "@components/types";
import * as icons from "@components/Icons";

import { Button } from "@components/Buttons";
import {
    buttonTypeOptions,
    buttonVariantOptions,
} from "@components/Buttons/types";

const ButtonMeta: Meta<typeof Button> = {
    title: "Buttons/Button",
    component: Button,
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
        iconRight: {
            options: ["ArrowChevronDoubleDown"],
            control: { type: "radio" },
        },
        iconLeft: {
            options: Object.keys(icons).map(key => key.replace("Icon", "")),
            control: { type: "radio" },
        },
    },
};

export default ButtonMeta;

export const Basic: StoryObj<typeof Button> = {
    args: {
        text: "Button",
        fill: false,
        disabled: false,
        opacity: 0.7,
        variant: "primary",
        onPress: () => console.log("Pressed"),
        rounded: false,
        type: "solid",
        size: sizeOptions[0],
        loading: false,
        iconRight: undefined,
        iconLeft: undefined,
    },
};
