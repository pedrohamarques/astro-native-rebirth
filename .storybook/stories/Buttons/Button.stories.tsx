import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

import Button from "../../../src/components/Buttons/Button";

const ButtonMeta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
    args: {
        text: "Hello world",
    },
    decorators: [
        Story => (
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}>
                <Story />
            </View>
        ),
    ],
};

export default ButtonMeta;
export const Basic: StoryObj<typeof Button> = {};
export const AnotherExample: StoryObj<typeof Button> = {
    args: {
        text: "Button",
    },
};
