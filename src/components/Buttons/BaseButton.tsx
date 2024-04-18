import React, { useCallback, useState } from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Pressable,
    PressableProps,
    LayoutChangeEvent,
} from "react-native";

import { getFixedHitSlop } from "@components/utils";

import {
    getButtonHeight,
    getButtonHorizontalPadding,
    getLoadingSize,
} from "@components/Buttons/utils";

import type { HitSlop, Size } from "@components/types";

export type BaseButtonProps = PressableProps &
    React.PropsWithChildren & {
        activityIndicatorColor: string;
        backgroundColor: string;
        borderColor: string;
        borderRadius: number;
        fill?: boolean;
        isIconButton?: boolean;
        loading?: boolean;
        opacity?: number;
        size?: Size;
        textColor: string;
    };

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        alignSelf: "stretch",
        flexDirection: "row",
        justifyContent: "center",
    },
    spinner: {
        alignSelf: "center",
    },
});

function BaseButton({
    activityIndicatorColor,
    children,
    fill = false,
    isIconButton = false,
    loading = false,
    opacity = 0.7,
    size = "medium",
    ...props
}: BaseButtonProps) {
    const [hitSlop, setHitSlop] = useState<HitSlop>({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    });

    const computedStyles: any = {
        ...getButtonHeight(size),
        ...getButtonHorizontalPadding(size, { isIconButton }),
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        borderRadius: props.borderRadius,
    };

    if (fill) {
        computedStyles.width = "100%";
    } else {
        computedStyles.alignSelf = "center";
    }

    const onLayoutButton = useCallback(
        (event: LayoutChangeEvent) => {
            if (props.onLayout) {
                props.onLayout(event);
            }
            if (typeof props.hitSlop === "undefined") {
                const { width, height } = event.nativeEvent.layout;
                const newHitSlop = getFixedHitSlop({ width, height });
                setHitSlop(newHitSlop);
            }
        },
        [props.onLayout, props.hitSlop],
    );

    return (
        <Pressable
            accessibilityRole='button'
            {...props}
            style={({ pressed }) => [
                { opacity: pressed ? opacity : 1 },
                styles.button,
                computedStyles,
            ]}
            hitSlop={props.hitSlop ?? hitSlop}
            onLayout={onLayoutButton}>
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: fill ? 1 : 0,
                }}>
                <View style={{ opacity: loading ? 0 : 1 }}>{children}</View>
                {loading && (
                    <View style={{ position: "absolute", width: "100%" }}>
                        <ActivityIndicator
                            testID='BaseButton.ActivityIndicator'
                            animating
                            size={getLoadingSize(size)}
                            style={styles.spinner}
                            color={activityIndicatorColor}
                        />
                    </View>
                )}
            </View>
        </Pressable>
    );
}

export default BaseButton;
