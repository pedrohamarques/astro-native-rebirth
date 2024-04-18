import { colors, sizes } from "@magnetis/astro-tokens";
import { colors as legacyColors } from "@magnetis/astro-galaxy-tokens";

import * as icons from "@components/Icons";
import { getFontSize } from "@tokens/fonts";

import type {
    ButtonVariant,
    ButtonProperties,
    IconProperties,
    ButtonType,
    LoadingSizes,
} from "./types";
import type { Size } from "@components/types";

interface GetPropertiesOptionsParam {
    isIconButton: boolean;
}

const defaultOptions = {
    isIconButton: false,
};

/**
 * Calculates button height according to button size
 * @param {Size} size Valid **Size**
 */
export function getButtonHeight(size: Size) {
    const buttonHeight = {
        small: sizes.small,
        medium: sizes.large,
        large: sizes.larger,
        xlarge: sizes.great,
    };

    return {
        height: buttonHeight[size],
    };
}

/**
 * Calculates button horizontal padding according to button size
 * @param {Size} size Valid **Size**
 * @param options.isIconButton If button is icon button
 */
export function getButtonHorizontalPadding(
    size: Size,
    options: GetPropertiesOptionsParam = defaultOptions,
) {
    const { isIconButton } = options;

    const iconButtonWidth = {
        small: sizes.small,
        medium: sizes.large,
        large: sizes.larger,
        xlarge: sizes.great,
    };

    const buttonHorizontalPadding = {
        small: sizes.micro,
        medium: sizes.tiny,
        large: sizes.smaller,
        xlarge: sizes.smaller,
    };

    return {
        width: isIconButton ? iconButtonWidth[size] : undefined,
        paddingHorizontal: isIconButton ? 0 : buttonHorizontalPadding[size],
    };
}

/**
 * Calculates button's text line-height based on size
 * @param {Size} size Valid **Size**
 */
export function getLineHeight(size: Size): number {
    return getFontSize(size) * 1.5;
}

/**
 * Recovers Icon component based on iconName
 * @param _iconName Valid **IconID**
 */
export function getIcon(_iconName: string) {
    const iconName = `${_iconName}Icon`;

    if (Object.keys(icons).includes(iconName)) {
        return icons[iconName as keyof typeof icons];
    }

    return () => null;
}

/**
 * Defines button size based on size passed
 * @param {ButtonVariant} variant Valid **ButtonVariant**
 * @param {Size} size Valid **Size**
 */
export function getIconProperties(size: Size): IconProperties {
    return {
        small: { iconSize: sizes.tiny, iconMargin: sizes.quark },
        medium: { iconSize: sizes.tiny, iconMargin: sizes.quark },
        large: { iconSize: sizes.smaller, iconMargin: sizes.nano },
        xlarge: { iconSize: sizes.small, iconMargin: sizes.nano },
    }[size];
}

/**
 * Defines button text color and background color based on variant and type
 * @param {ButtonVariant} variant Valid **ButtonVariant**
 * @param {ButtonType} type Valid **ButtonType**
 */
export function getButtonProperties(
    variant: ButtonVariant = "primary",
    type: ButtonType = "solid",
): ButtonProperties {
    return {
        primary: {
            solid: {
                textColor: colors.solidBrightWhite,
                backgroundColor: colors.solidPrimaryMedium,
            },
            subtle: {
                textColor: colors.solidPrimaryMedium,
                backgroundColor: colors.transparentPrimarySemitransparent,
            },
            outline: {
                textColor: colors.solidPrimaryMedium,
                backgroundColor: "transparent",
            },
            ghost: {
                textColor: colors.solidPrimaryMedium,
                backgroundColor: "transparent",
            },
        },
        secondary: {
            solid: {
                textColor: colors.solidBrightWhite,
                backgroundColor: colors.solidFaintDark,
            },
            subtle: {
                textColor: colors.solidFaintDark,
                backgroundColor: colors.transparentFaintSemitransparent,
            },
            outline: {
                textColor: colors.solidFaintDark,
                backgroundColor: "transparent",
            },
            ghost: {
                textColor: colors.solidFaintDark,
                backgroundColor: "transparent",
            },
        },
        alert: {
            solid: {
                textColor: colors.solidBrightWhite,
                backgroundColor: colors.solidAlertMedium,
            },
            subtle: {
                textColor: colors.solidAlertMedium,
                backgroundColor: colors.transparentAlertSemitransparent,
            },
            outline: {
                textColor: colors.solidAlertMedium,
                backgroundColor: "transparent",
            },
            ghost: {
                textColor: colors.solidAlertMedium,
                backgroundColor: "transparent",
            },
        },
        success: {
            solid: {
                textColor: colors.solidFaintDarkest,
                backgroundColor: colors.solidSuccessMedium,
            },
            subtle: {
                textColor: colors.solidSuccessDark,
                backgroundColor: colors.transparentSuccessSemitransparent,
            },
            outline: {
                textColor: colors.solidSuccessDark,
                backgroundColor: "transparent",
            },
            ghost: {
                textColor: colors.solidSuccessDark,
                backgroundColor: "transparent",
            },
        },
        inversed: {
            solid: {
                textColor: colors.solidFaintDarkest,
                backgroundColor: colors.solidBrightWhite,
            },
            subtle: {
                textColor: colors.solidBrightWhite,
                backgroundColor: colors.transparentBrightSemitransparent,
            },
            outline: {
                textColor: colors.solidBrightWhite,
                backgroundColor: "transparent",
            },
            ghost: {
                textColor: colors.solidBrightWhite,
                backgroundColor: "transparent",
            },
        },
        disabled: {
            solid: {
                textColor: colors.transparentFaintSoft,
                backgroundColor: colors.transparentFaintSemitransparent,
            },
            subtle: {
                textColor: colors.transparentFaintSoft,
                backgroundColor: colors.transparentFaintSemitransparent,
            },
            outline: {
                textColor: colors.transparentFaintSoft,
                backgroundColor: "transparent",
            },
            ghost: {
                textColor: colors.transparentFaintSoft,
                backgroundColor: "transparent",
            },
        },
        legacy: {
            solid: {
                textColor: colors.solidBrightWhite,
                backgroundColor: legacyColors.uranus500,
            },
            subtle: {
                textColor: colors.solidBrightWhite,
                backgroundColor: legacyColors.uranus500,
            },
            outline: {
                textColor: legacyColors.uranus500,
                backgroundColor: "transparent",
            },
            ghost: {
                textColor: legacyColors.uranus500,
                backgroundColor: "transparent",
            },
        },
    }[variant][type];
}

/**
 * Defines button loading size
 * @param {Size} size Valid **Size**
 */
export function getLoadingSize(size: Size): LoadingSizes {
    return {
        small: "small",
        medium: "small",
        large: "large",
        xlarge: "large",
    }[size] as LoadingSizes;
}
